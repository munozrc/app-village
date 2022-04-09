---
title: Secuencia básicas con leds en Arduino
date: Apr 9, 2022 17:42:00
heroImage: https://raw.githubusercontent.com/munozrc/softlink/main/content/posts/secuencia-basica-de-leds-en-arduino/photo-1527356900876-cae61d8d8462.jpg
authorDisplayName: munozrc
authorPhotoURL: https://avatars.githubusercontent.com/u/47870821?v=4
authorLink: https://github.com/munozrc
description: Como crear secuencias basicas usando leds en Arduino
---

## Hardware & Software Requerido

- Editor de código
- 6 Leds
- Placa Arduino

  

## Circuito

// Coming soon 😉

## Proceso

Usando seis leds conectados a la placa mediante entradas diferentes se realizo uno secuencia en cascada de encendido y apagado de los leds uno tras de otro.

se define `LEDS_PIN[]` como arreglo donde estarán las referencias a los pines a los cuales estarán conectados los leds, después se hace uso de la variable `size` , esta almacena en memoria el tamaño del arreglo anterior.

En la función `void setup()` establecemos todos los pines del arreglo en `OUTPUT` usando un loop `for`, en la función `void loop()` realizamos dos ciclos `for` . El primer ciclo recorre el array y establece el encendido del los led usando el método `digitalWrite()` se asigna un delay de 500 milisegundos, al terminar el delay continua al inicio del `for`, para el siguiente for se usa con la finalidad de apagar todos los leds usando la mismas instrucciones del primer `for` pero con order descendente, por eso se usa `for (uint8_t i = size; i > 0; i--)`.

## Código

```cpp
// Establemos las variables del archivo
// Este es un arreglo de los pines a los cuales estan conectados los leds
uint8_t arregloDePines[] = {D0, D1, D2, D3, D4, D5};

// Esta variables nos permite saber el tamaño del anterios arreglo de pines
uint8_t tamaño = sizeof(arregloDePines) / sizeof(arregloDePines[0]);

void setup()
{
  // Configuramos todos los pines del arreglo como pines de salida
  for (uint8_t posicion = 0; posicion < tamaño; posicion++)
  {
    pinMode(arregloDePines[posicion], OUTPUT);
  }
}

void loop()
{
  /*
    Para crear el efecto de encendido de los leds unos tras otros
    debemos usar el ciclo for el cual recorre de forma acedente todos los pines
    del arreglo. Despues de cada ciclo aumentamos el valor
    de posicion.
    NOTA: La condicion que debe cumplir el ciclo para que no termine es que la
    variable posicion sea menor al tamaño del arreglo.
  */
  for (uint8_t posicion = 0; posicion < tamaño; posicion++)
  {
    // Encedemos el led enviando una seña de HIGH al pin actual
    digitalWrite(arregloDePines[posicion], HIGH);
    // Establecemos un tiempo de esperan antes que pase a la siguiente instrucción
    delay(500);
  }

  /*
    Despues del enceder todos los leds debemos apagarlos de forma desendente, para lograrlo
    debemos recorrer el arreglo de pines de atras hacia a adelante, lo haremos definiendo como valor
    inicial de posicion el tamaño del arreglo, que sera de 6, despues de cada ciclo decrementamos el valor
    de posicion asi pasara de 5 a 4, de 3 a 2... hasta llegar a 1
    NOTA: La condicion que debe cumplir el ciclo para que no termine es que la
    variable posicion sea mayor a cero.
  */
  for (uint8_t posicion = tamaño; posicion > 0; posicion--)
  {
    // Apagamos el led enviado una señal de LOW al pin
    // NOTA: para acceder a un elemento del array por ciclo usamos "posicion - 1", porque
    // en el arreglo no existe la posicion 6, ya que se cuenta desde la posicion 0 a 5
    // dando como resultado 6 elementos.
    digitalWrite(arregloDePines[posicion - 1], LOW);
    // Establecemos un tiempo de esperan antes que pase a la siguiente instrucción
    delay(500);
  }

  // Al terminar todos los ciclos, se hace un nuevo llamado a la funcion loop()
  // Creando el efecto de secuencia de encedido y apagado de los leds de forma infinita.
}
```

## Conclusiones

El primer problema que resalta es la de generar nuevas secuencias debemos modificar todo el algoritmo de la secuencia actual, tenemos la ventaja que sabemos los pines a los cuales están conectados los leds por el hecho que están almacenados en un arreglo, pero las instrucciones de la secuencia están implícitas en el código mediante el uso de los ciclos `for` y el método de `digitalWrite()`, el segundo problema es el numero limitado de pines y que por consiguiente nos limita a conectar hasta un máximo de 16 leds por placa (Nota: este numero puede variar según la placa, muchos modelos poseen mas pines de conexión).