---
title: Arreglos en Arduino
date: Apr 11, 2022 17:42:00
heroImage: https://raw.githubusercontent.com/munozrc/softlink/main/content/posts/arreglos-en-arduino/spencer-lbqLxgvLt0U.jpg
authorDisplayName: munozrc
authorPhotoURL: https://avatars.githubusercontent.com/u/47870821?v=4
authorLink: https://github.com/munozrc
description: Crear secuencias usando arreglos en Arduino mediante LEDs, asi logramos crear secuencias mas complejas y flexibles
---

## Hardware & Software Requerido

- IDE de Arduino ó Editor de código
- 6 LEDs
- 6 Resistencias de 1k ohms
- Placa Arduino

## ¿Que son los arreglos en C++?

un array de una sola dimensión y forman parte de la amplia variedad de estructuras de datos que nos ofrece C++, siendo además una de las principales y más útiles estructuras que podremos tener como herramienta de programación. Los vectores o arrays o arreglos de una dimensión (como los quieras llamar), son utilizados para almacenar múltiples valores en una única variable. En un aspecto más profundo, este tipo de arrays (vectores), permiten almacenar muchos valores en posiciones de memoria continuas, lo cual permite acceder a un valor u otro de manera rápida y sencilla.

## ¿Como usarlos para crear secuencias?

En este paso usaremos los arreglos para almacenar las instrucciones de nuestras secuencias, para ello definiremos varios conceptos que necesitamos comprender al ejecutar una secuencia de encendido y apagado de los LEDs

- Estado del LED (encendido o pagado)
- Posición del PIN correspondiente a ese LED en concreto
- El tiempo que deseamos que dure el estado que le asignamos al LED

Este es un ejemplo de arreglo para almacenar una secuencia. como objetivo era encender todos los LEDs y luego apagar todos los LEDs iniciando desde el ultimo led encendido.

```cpp
// [2] es la candida de frames
// [6] es la cantidad de pasos
// [3] son las instrucciones para un paso (ESTADO, PIN, DELAY)
int secuencia[2][6][3] = {
  
  // PRIMER FRAME
  {
    // ESTADO = HIGH, PIN = 0, DELAY = 500)
    {HIGH, 0, 500}, 
    {HIGH, 1, 500}, 
    {HIGH, 2, 500}, 
    {HIGH, 3, 500}, 
    {HIGH, 4, 500}, 
    {HIGH, 5, 500}
  },

  // SEGUNDO FRAME
  { 
    {LOW, 5, 500}, 
    {LOW, 4, 500}, 
    {LOW, 3, 500}, 
    {LOW, 2, 500}, 
    {LOW, 1, 500}, 
    {LOW, 0, 500}
  }
};
```

## Interpretar arreglo de secuencias

Como primer paso en el método de `setup` vamos a asignar los pines de los LEDs en pines de tipo `OUTPUT` y enviaremos una señal de `LOW`.

```cpp
// Almacena los pines de los LEDs a usar
int arregloDePines[] = {D0, D1, D2, D3, D4, D5};

// Almacena el total de elementos (PINES) del arreglo
int tamaño = sizeof(arregloDePines) / sizeof(arregloDePines[0]);

void setup()
{
  for (int posicion = 0; posicion < tamaño; posicion++)
  {
    pinMode(arregloDePines[posicion], OUTPUT);
    digitalWrite(arregloDePines[posicion], LOW);
  }
}
```

Continuamos con el método `loop` el cual es el encargado de recorrer cada `FRAME` y recorrer del `FRAME` actual, cada paso `PASO`.

```cpp

// Almacenamos el total de filas o FRAMES
int totalFilas = sizeof(secuencia) / sizeof(secuencia[0]);

// Almacenamos el total de columnas o PASOS
int totalColumnas = sizeof(secuencia[0]) / sizeof(secuencia[0][0]);

void loop()
{
  // Recorre los FRAMEs del arreglo de la secuencia
  for (int posFila = 0; posFila < totalFilas; posFila++)
  {
    // Recorre cada paso del FRAME
    for (int posColumna = 0; posColumna < totalColumnas; posColumna++)
    {
      // Recuperamos las instrucciones del paso de la secuencia
      int estado = secuencia[posFila][posColumna][0]; // puede ser HIGH o LOW
      int posicionLed = secuencia[posFila][posColumna][1]; // numero del pin
      int tiempoEntreCambio = secuencia[posFila][posColumna][2]; // delay

      // Aquí usamos los datos para enviar la order o instrucción
      // accedemos al PIN que esta en `arregloDePines` mediante su posicion
      digitalWrite(arregloDePines[posicionLed], estado);
      delay(tiempoEntreCambio);
    }
  }
}
```

Ya podremos modificar nuevas secuencias, pero la lógica de lo interpretación que definimos en el método `loop` no cambiara.

> Se importante entender que la variable `posicionLed`
> almacena la posicion del Pin del led que esta definido en `arregloDePines`

## Código

```cpp
int secuencia[2][6][3] = {
  {
    {HIGH, 0, 500}, {HIGH, 1, 500}, {HIGH, 2, 500}, {HIGH, 3, 500}, {HIGH, 4, 500}, {HIGH, 5, 500}
  },
  {
    {LOW, 5, 500}, {LOW, 4, 500}, {LOW, 3, 500}, {LOW, 2, 500}, {LOW, 1, 500}, {LOW, 0, 500}
  }
};

int arregloDePines[] = {D0, D1, D2, D3, D4, D5};
int tamaño = sizeof(arregloDePines) / sizeof(arregloDePines[0]);
int totalFilas = sizeof(secuencia) / sizeof(secuencia[0]);
int totalColumnas = sizeof(secuencia[0]) / sizeof(secuencia[0][0]);

void setup()
{
  for (int posicion = 0; posicion < tamaño; posicion++)
  {
    pinMode(arregloDePines[posicion], OUTPUT);
    digitalWrite(arregloDePines[posicion], LOW);
  }
}

void loop()
{
  for (int posFila = 0; posFila < totalFilas; posFila++)
  {
    for (int posColumna = 0; posColumna < totalColumnas; posColumna++)
    {
      // Estado puede ser "encendió" = HIGH ó "apagado" = LOW
      int estado = secuencia[posFila][posColumna][0];
      int posicionLed = secuencia[posFila][posColumna][1];
      int tiempoEntreCambio = secuencia[posFila][posColumna][2];

      digitalWrite(arregloDePines[posicionLed], estado);
      delay(tiempoEntreCambio);
    }
  }
}
```

## Creando Nuevas secuencias

Solo debes cambiar el contenido definido en el arreglo llamado `secuencia`


- **Secuencia de LEDs intercalada**

```cpp
int secuencia[2][6][3] = {
  {{HIGH, 0, 0}, {LOW, 1, 0}, {HIGH, 2, 0}, {LOW, 3, 0}, {HIGH, 4, 0}, {LOW, 5, 500}},
  {{LOW, 0, 0}, {HIGH, 1, 0}, {LOW, 2, 0}, {HIGH, 3, 0}, {LOW, 4, 0}, {HIGH, 5, 500}}};
```

<video src="https://cdn.discordapp.com/attachments/692177227571527721/965394583032836136/secuenciaIntercalada.mp4" controls></video>

- **Secuencia de recorrido de un único LED**

```cpp
// contiene mas FRAMES pero menos pasos
int secuencia[7][6][3] = {
    {{HIGH, 0, 200}, {LOW, 1, 0}, {LOW, 2, 0}, {LOW, 3, 0}, {LOW, 4, 0}, {LOW, 5, 0}},
    {{LOW, 0, 0}, {HIGH, 1, 200}, {LOW, 2, 0}, {LOW, 3, 0}, {LOW, 4, 0}, {LOW, 5, 0}},
    {{LOW, 0, 0}, {LOW, 1, 0}, {HIGH, 2, 200}, {LOW, 3, 0}, {LOW, 4, 0}, {LOW, 5, 0}},
    {{LOW, 0, 0}, {LOW, 1, 0}, {LOW, 2, 0}, {HIGH, 3, 200}, {LOW, 4, 0}, {LOW, 5, 0}},
    {{LOW, 0, 0}, {LOW, 1, 0}, {LOW, 2, 0}, {LOW, 3, 0}, {HIGH, 4, 200}, {LOW, 5, 0}},
    {{LOW, 0, 0}, {LOW, 1, 0}, {LOW, 2, 0}, {LOW, 3, 0}, {LOW, 4, 0}, {HIGH, 5, 200}},
    {{LOW, 0, 0}, {LOW, 1, 0}, {LOW, 2, 0}, {LOW, 3, 0}, {LOW, 4, 0}, {LOW, 5, 0}}};
```

```cpp
// Contiene menos FRAMES pero mas pasos
int secuencia[2][12][3] = {
  {{HIGH, 0, 200}, {LOW, 0, 0}, {HIGH, 1, 200}, {LOW, 1, 0}, {HIGH, 2, 200}, {LOW, 2, 0}, {HIGH, 3, 200}, {LOW, 3, 0}, {HIGH, 4, 200}, {LOW, 4, 0}, {HIGH, 5, 200}, {LOW, 5, 0}},
  {{HIGH, 5, 200}, {LOW, 5, 0}, {HIGH, 4, 200}, {LOW, 4, 0}, {HIGH, 3, 200}, {LOW, 3, 0}, {HIGH, 2, 200}, {LOW, 2, 0}, {HIGH, 1, 200}, {LOW, 1, 0}, {HIGH, 0, 200}, {LOW, 0, 0}}};
```

<video src="https://cdn.discordapp.com/attachments/692177227571527721/965394583305453628/secuenciaUnicoLedV2.mp4" controls></video>

- **Secuencia con variación de velocidad**

```cpp
int secuenciaUnicoLedV3[2][12][3] = {
  {{HIGH, 0, 200}, {LOW, 0, 0}, {HIGH, 1, 160}, {LOW, 1, 0}, {HIGH, 2, 120}, {LOW, 2, 0}, {HIGH, 3, 70}, {LOW, 3, 0}, {HIGH, 4, 50}, {LOW, 4, 0}, {HIGH, 5, 40}, {LOW, 5, 0}},
  {{HIGH, 5, 40}, {LOW, 5, 0}, {HIGH, 4, 50}, {LOW, 4, 0}, {HIGH, 3, 70}, {LOW, 3, 0}, {HIGH, 2, 120}, {LOW, 2, 0}, {HIGH, 1, 160}, {LOW, 1, 0}, {HIGH, 0, 200}, {LOW, 0, 0}}};
```

<video src="https://cdn.discordapp.com/attachments/692177227571527721/965394582546309181/secuenciaUnicoLedV3.mp4" controls></video>