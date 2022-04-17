---
title: Secuencia básica de leds en Arduino
date: Apr 9, 2022 17:42:00
heroImage: https://raw.githubusercontent.com/munozrc/softlink/main/content/posts/secuencia-basica-de-leds-en-arduino/photo-1527356900876-cae61d8d8462.jpg
authorDisplayName: munozrc
authorPhotoURL: https://avatars.githubusercontent.com/u/47870821?v=4
authorLink: https://github.com/munozrc
description: Como crear efecto de encendido y apagado de leds usando una placa de arduino
---

## Hardware & Software Requerido

- IDE de arduino ó Editor de código
- 6 Leds
- 6 Resistencias de 1k ohms
- Placa Arduino

## Circuito

// Coming soon 😉

## Proceso

Una secuencia es el orden o disposición de una serie de elementos que se suceden unos a otros, para nuestro caso podemos definir como secuencia el hecho de encender un led tras de otro generando un efecto de cascada o de domino. para ello como primer paso conectaremos los seis leds a un pin de nuestra placa

Para que sea nuestro código un poco mas reutilizable y flexible definiremos un arreglo el cual contendrá cada uno de nuestros pines, así será mas sencillo porque no importaría el pin físico sino la posición que tiene asignado en el arreglo:

```cpp
int arregloDePines[] = {D0, D1, D2, D3, D4, D5};
```

Uno de los inconvenientes que tenemos que evitar es el de acceder a una posición del arreglo que no exista en memoria, esto generar un error en ejecución. 😎 tranquilo! no hará que nuestros leds o placa dejen de funcionar, pero no nos permitirá generar el efecto de secuencia. Lo podemos evitar conociendo de antemano el valor total de elementos, para eso usaremos la variable `tamaño`:

```cpp
int tamaño = sizeof(arregloDePines) / sizeof(arregloDePines[0]);
```

En el método `setup()` solo tendremos que configurar los pines que usaremos como pines de salida de datos, esto nos permitirá enviar señales de `HIGH` o `LOW` para encender o apagar los leds.  Ya que tenemos definidos los pines de cada led en un arreglo podemos usar un ciclo `for` para iterar cada elemento para obtener el valor del pin en cada posición:

```cpp
for (int posicion = 0; posicion < tamaño; posicion++)
{
  // Asignamos el pin actual como pin de salida
  pinMode(arregloDePines[posicion], OUTPUT);
}
```

Para crear el efecto de encendido de los leds uno tras otro debemos definir un primer ciclo `for` en el método `loop()`, el cual recorre de forma accedente todos los pines del arreglo. Después de cada iteración o ciclo completado aumentamos el valor de `posicion`  usando la instrucción de `posicion++`. Por lo general para que el ciclo recorra o itere de forma accedente debemos iniciar `posicion = 0` y que la condición de salida del ciclo sea comprobar si `posicion` sigue siendo menor al valor que tiene la variable `tamaño`:

```cpp
for (int posicion = 0; posicion < tamaño; posicion++)
{
  // Encedemos el led enviando una seña de HIGH al pin actual
  digitalWrite(arregloDePines[posicion], HIGH);
  // Establecemos un tiempo de esperan antes que pase a la siguiente instrucción
  delay(500);
}
```

El segundo ciclo lo usaremos para apagar todos los leds, para apagarlos iniciando desde el ultimo led que fue encendido, debemos recorrer el array de pines de atrás hacia adelante. debemos usar un iterador negativos el cual le reste de uno en uno a nuestra variable `posicion = posicion - 1` una forma mas corta es `posicion--` pero debemos tener en cuenta que `posicion` como valor inicial debe ser el total de elementos del array que en nuestro caso es `tamaño` y colocar como condición de salida sea comprobar si `posicion` sigue siendo mayor que cero.

```cpp
for (int posicion = tamaño; posicion > 0; posicion--)
{
  digitalWrite(arregloDePines[posicion - 1], LOW);
  delay(500);
}
```

Para entender porque restamos 1 a la variable `posicion` en la linea donde llamamos la función:

```cpp
digitalWrite(arregloDePines[posicion - 1], LOW);  
```

Es porque si no restamos una posición, estaríamos consultado una posición la cual no existe; Si tenemos un arreglo de seis elementos, pero para acceder a una posición se empieza contando desde cero, nuestro rango de posiciones validas seria `0 - 5`. Regresando a nuestro ejercicio, debemos tener claro que nuestra variable `tamaño` almacena el total de elementos de nuestro arreglo de pines. mas no la la ultima posición o la mayor posición valida del arreglo. 

Al finalizar todas las instrucciones dentro del método `loop()` al ser un ciclo infinito hará que nuestra secuencia se inicie de nuevo.  A continuación mostraremos todo el código 🤗

## Código

```cpp
// Este es un arreglo de los pines a los cuales estan conectados los leds
int arregloDePines[] = {D0, D1, D2, D3, D4, D5};

// Esta variables nos permite saber el número total de elementos del arreglo
int tamaño = sizeof(arregloDePines) / sizeof(arregloDePines[0]);

void setup()
{
  // Configuramos todos los pines del arreglo como pines de salida
  for (int posicion = 0; posicion < tamaño; posicion++)
  {
    pinMode(arregloDePines[posicion], OUTPUT);
  }
}

void loop()
{
  // Ciclo para encender todos los leds con un delay de 500 milisegundos
  for (int posicion = 0; posicion < tamaño; posicion++)
  {
    // Encedemos el led enviando una seña de HIGH al pin actual
    digitalWrite(arregloDePines[posicion], HIGH);
    // Establecemos un tiempo de esperan antes que pase a la siguiente instrucción
    delay(500);
  }

  // Ciclo para apagar todos los leds en orden desendente con un delay de 500 milisegundos
  for (int posicion = tamaño; posicion > 0; posicion--)
  {
    // Apagamos el led enviado una señal de LOW al pin
    digitalWrite(arregloDePines[posicion - 1], LOW);
    // Establecemos un tiempo de esperan antes que pase a la siguiente instrucción
    delay(500);
  }
}
```

## Conclusiones

<video src="https://cdn.discordapp.com/attachments/692177227571527721/965394583305453628/secuenciaUnicoLedV2.mp4" controls></video>

El primer problema que resalta es la de generar nuevas secuencias debemos modificar todo el algoritmo de la secuencia actual, tenemos la ventaja que sabemos los pines a los cuales están conectados los leds por el hecho que están almacenados en un arreglo, pero las instrucciones de la secuencia están implícitas en el código mediante el uso de los ciclos `for` y el método de `digitalWrite()`, el segundo problema es el numero limitado de pines y que por consiguiente nos limita a conectar hasta un máximo de 16 leds por placa (Nota: este numero puede variar según la placa, muchos modelos poseen mas pines de conexión).
