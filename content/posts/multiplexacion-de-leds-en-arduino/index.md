---
title: Multiplexación de LEDs en Arduino
date: Apr 17, 2022 20:28:00
heroImage: https://raw.githubusercontent.com/munozrc/softlink/main/content/posts/secuencia-basica-de-leds-en-arduino/photo-1527356900876-cae61d8d8462.jpg
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

![circuito multiplexacion con arduino]("https://raw.githubusercontent.com/munozrc/softlink/main/content/posts/multiplexacion-de-leds-en-arduino/diagrama-multiplexacion.jpg")

## ¿Qués la Multiplexación?

Multiplexar consiste en compartir un mismo canal para el envío de datos a diferentes receptores. Un ejemplo lo encontramos en la telefonía, ya sea móvil o fija.

En este caso no tenemos un canal para cada número de teléfono, esto sería prácticamente inviable, existe un único canal donde se transmiten todos los datos desde los emisores hasta los receptores por lo tanto, los emisores necesitan multiplexar la información y los receptores necesitan demultiplexar dicha información para redirigir al receptor al que van dirigidos los datos.

## Controlar matriz de LEDS

Si tenemos una matriz de LEDs que no es más que un montón de LEDs que queremos controlar. El objetivo es poder decir que LED se enciende usando el mínimo de entradas posibles. Usaremos el método definido por **Charlie Allen**.

Teniendo claro esto podemos seguir avanzando en nuestro objetivo, utilizar **Charlieplexing** para poder manejar un volumen grande de LEDs con el mínimo de entradas. Como ya había dicho, vamos a utilizar los pines digitales y vamos a incorporar un nuevo estado que nos permita multiplexar, ahora nuestros pines van a poder estar en `3` estados `HIGH`, `LOW` e `INPUT`.

En este caso para encender un LED determinado debemos enviar una señal predeterminada hacia los tres pines que en este caso vamos a usar.

![diagrama de leds multiplexacion con arduino]("https://raw.githubusercontent.com/munozrc/softlink/main/content/posts/multiplexacion-de-leds-en-arduino/charlie-plexing.jpg")

| LED         | PIN A       | PIN B       | PIN C       |
| ----------- | ----------- | ----------- | ----------- |
| **1**       | LOW         | HIGH        | INPUT       |
| **2**       | HIGH        | LOW         | INPUT       |
| **3**       | INPUT       | LOW         | HIGH        |
| **4**       | INPUT       | HIGH        | LOW         |
| **5**       | LOW         | INPUT       | HIGH        |
| **6**       | HIGH        | INPUT       | LOW         |