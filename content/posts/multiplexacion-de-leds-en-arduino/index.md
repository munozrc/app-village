---
title: Multiplexación de LEDs en Arduino
date: Apr 17, 2022 20:28:00
heroImage: https://raw.githubusercontent.com/munozrc/softlink/main/content/posts/secuencia-basica-de-leds-en-arduino/vishnu-mohanan.jpg
authorDisplayName: munozrc
authorPhotoURL: https://avatars.githubusercontent.com/u/47870821?v=4
authorLink: https://github.com/munozrc
description: Como controlar multiples LEDs usando la menor cantidad de pines con Arduino
---

## Hardware & Software Requerido

- IDE de Arduino ó Editor de código
- 6 LEDs
- 6 Resistencias de 1k ohms
- Placa Arduino

## Circuito

![circuito multiplexacion con arduino](https://raw.githubusercontent.com/munozrc/softlink/main/content/posts/multiplexacion-de-leds-en-arduino/diagrama-multiplexacion.jpg)

## ¿Qués la Multiplexación?

Multiplexar consiste en compartir un mismo canal para el envío de datos a diferentes receptores. Un ejemplo lo encontramos en la telefonía, ya sea móvil o fija.

En este caso no tenemos un canal para cada número de teléfono, esto sería prácticamente inviable, existe un único canal donde se transmiten todos los datos desde los emisores hasta los receptores por lo tanto, los emisores necesitan multiplexar la información y los receptores necesitan demultiplexar dicha información para redirigir al receptor al que van dirigidos los datos.

## Controlar matriz de LEDS

Si tenemos una matriz de LEDs que no es más que un montón de LEDs que queremos controlar. El objetivo es poder decir que LED se enciende usando el mínimo de entradas posibles. Usaremos el método definido por **Charlie Allen**.

Teniendo claro esto podemos seguir avanzando en nuestro objetivo, utilizar **Charlieplexing** para poder manejar un volumen grande de LEDs con el mínimo de entradas. Como ya había dicho, vamos a utilizar los pines digitales y vamos a incorporar un nuevo estado que nos permita multiplexar, ahora nuestros pines van a poder estar en `3` estados `HIGH`, `LOW` e `INPUT`.

![diagrama de leds multiplexacion con arduino](https://raw.githubusercontent.com/munozrc/softlink/main/content/posts/multiplexacion-de-leds-en-arduino/charlie-plexing.jpg)

En este caso para encender un LED determinado debemos enviar una señal predeterminada hacia los tres pines que en este caso vamos a usar.

| LED         | PIN A       | PIN B       | PIN C       |
| ----------- | ----------- | ----------- | ----------- |
| **1**       | LOW         | HIGH        | INPUT       |
| **2**       | HIGH        | LOW         | INPUT       |
| **3**       | INPUT       | LOW         | HIGH        |
| **4**       | INPUT       | HIGH        | LOW         |
| **5**       | LOW         | INPUT       | HIGH        |
| **6**       | HIGH        | INPUT       | LOW         |

## Código

```cpp
#define PIN_A D5
#define PIN_B D6
#define PIN_C D0

void setup()
{
}

void loop()
{
  // Bucle para encender los LEDs de menor a mayor
  for (int i = 1; i <= 6; i++)
  {
    encenderLed(i);
    delay(100);
  }

  // Bucle para encender los LEDs de mayor a menor eliminando lo extremos
  for (int i = 5; i > 1; i--)
  {
    encenderLed(i);
    delay(100);
  }
}

// Función que pondrá en los estados correctos para encender un LED (HIGH, LOW e INPUT)
void ponerEstados(int pinHigh, int pinLow, int pinInput)
{
  pinMode(pinHigh, OUTPUT);
  digitalWrite(pinHigh, HIGH);
  pinMode(pinLow, OUTPUT);
  digitalWrite(pinLow, LOW);
  pinMode(pinInput, INPUT);
}

// Esta función se va a encargar de aplicar la lógica dependiendo del LED que queramos encender
void encenderLed(int led_num)
{
  switch (led_num)
  {
  case 1:
    ponerEstados(PIN_B, PIN_A, PIN_C);
    break;
  case 2:
    ponerEstados(PIN_A, PIN_B, PIN_C);
    break;
  case 3:
    ponerEstados(PIN_C, PIN_B, PIN_A);
    break;
  case 4:
    ponerEstados(PIN_B, PIN_C, PIN_A);
    break;
  case 5:
    ponerEstados(PIN_C, PIN_A, PIN_B);
    break;
  case 6:
    ponerEstados(PIN_A, PIN_C, PIN_B);
    break;
  }
}
```