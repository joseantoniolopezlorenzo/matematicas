---
title: Tema 1
subtitle: Los números reales
author: JallProfesor
date: 01/02/2021
title-prefix: 4º ESO - Matemáticas
description: Teoría del primer tema de matemáticas de 4º ESO
keywords:
    - preuniversitaria
    - matemáticas
    - 4º ESO
    - números reales
    - exponentes
    - radicales
    - logaritmos
script: ../../assets/js/graficos/eso4-t1.js
---
- [Ejercicios resueltos](./resueltos.html)
- [Indice general](/index.html)

# 1. Conjuntos de números
****
## CURSOS ANTERIORES.

Conjuntos numéricos que ya has estudiado:[^nota1]

* **NATURALES** $\mathbb N$: $1, 2, 3, \sqrt[3]{4}, 2^{0}, \sqrt{16}, 3^{1}, 4^{2}, ...$
* **ENTEROS** $\mathbb Z$: $\mathbb N \cup \{0, -1, -2, ...\}$
* **RACIONALES** $\mathbb Q$ \
  Números racionales son los que se pueden poner como *cociente* de dos números enteros. Su expresión decimal puede ser *exacta* ($\frac{3}{4} = 0,75$ ) o *periódica* ($\frac{1}{3} = 0,\overset{\frown}{3}$).

  [^nota1]:
  **Se cumple** \
  $$\mathbb{Q} = \mathbb Z \cup \left\{ \frac{1}{2}, \frac{2}{1}, -\frac{1}{2}, ...\right\}$$
  $$\mathbb N \subset \mathbb Z \subset \mathbb Q$$


## LOS IRRACIONALES.

Son **números irracionales** ($\mathbb I$) aquellos números que no son racionales y por tanto no
pueden expresarse como fracción de números enteros.

En otras palabras, son todos aquellos números que tienen una *expresión decimal que no es ni exacta ni periódica*, es decir, infinitas cifras decimales y sin periodo.

Por ejemplo: $\sqrt{2},~\sqrt{3},~\pi,~e, ~\varphi ~ \text{(proporción áurea)}$


## LOS REALES.
Los **NÚMEROS REALES** son la unión de los *racionales* y los *irracionales* [^nota2]
$$\mathbb R = \mathbb Q \cup \mathbb I$$

**Recta real**
es una recta en la que elegimos el origen de coordenadas y el tamaño de la unidad\
(colocamos el 0 y el 1). Decimos que es **real** por que:

- todo **número real** ocupa una **posición** en la recta numérica.
- todo **punto de la recta** se puede **hacer corresponder** con un número real.

[^nota2]:
**Propiedad importante:** Los números reales son **DENSOS**, es decir, entre dos cualesquiera números reales hay *infinitos números* en medio.Eso es fácil de entender, si $a, b$ son dos números con $a < b$ tenemos que $$a < \frac {a + b}{2} <b $$ es decir, la *media* está entre los dos números. Y esto podemos hacerlo las veces que queramos (infinitas veces). Los racionales y los irracionales son también *densos*.

# 2. Los intervalos y las semirectas.
****
## DEFINICIONES.

### **Intervalo**
es el conjunto de los números reales que hay entre dos números dados que llamamos **extremos**.

### **Semirecta**
es el conjunto de números reales que no está limitado por uno de sus extremos.

## TIPOS DE INTERVALOS.

### **Abiertos**

conjunto de números reales que hay entre dos dados **excluyendo** los extremos. \
    Por ejemplo: $(-5,2) = \{x | -5 < x < 2\}$

::: intervalo
<div id="intervalo1" class="jxgbox" style="width:100%; height:100%;"></div>
:::

### **Cerrados **
conjunto de números reales que hay entre dos dados **incluyendo** los extremos. \
    Por ejemplo: $[-5,2] = \{x | -5 \leq x \leq 2\}$

::: intervalo
<div id="intervalo2" class="jxgbox" style="width:100%; height:100%;"></div>
:::

### **Semiabiertos**
 conjunto de números reales que hay entre dos dados **incluyendo** sólo uno de los extremos. \
 Por ejemplo: $[-5,2) = \{x | -5 \leq x < 2\}$

::: intervalo
<div id="intervalo3" class="jxgbox" style="width:100%; height:100%;"></div>
:::

Por ejemplo: $(-5,2] = \{x | -5 < x \leq 2\}$

::: intervalo
<div id="intervalo4" class="jxgbox" style="width:100%; height:100%;"></div>
:::


## SEMIRECTAS.

- conjunto de todos los menores que $a$
  $$(-\infty,a) = \{x | x < a\}$$

::: intervalo
<div id="semirecta1" class="jxgbox" style="width:100%; height:100%"></div>
:::

- conjunto de todos los menores que $a$ y el mismo $a$ (incluido $a$)
  $$(-\infty,a] = \{x | x \leq a\}$$

::: intervalo
<div id="semirecta2" class="jxgbox" style="width:100%; height:100%"></div>
:::

- conjunto de todos los mayores que $a$
  $$(a, +\infty) = \{x | x > a\}$$

::: intervalo
<div id="semirecta3" class="jxgbox" style="width:100%; height:100%"></div>
:::

- conjunto de todos los menores que $a$ y el mismo $a$ (incluido $a$)
  $$[a, +\infty) = \{x | x \geq a\}$$

::: intervalo
<div id="semirecta4" class="jxgbox" style="width:100%; height:100%"></div>
:::

# 3. Potencias y raíces.

## Potencias

### Exponente entero

Dado $a$, un número cualquiera, y $n$, un número *natural* ($n \in \mathbb N$), **la potencia $a^n$** es el producto del número $a$ por sí mismo $n$ veces. $a$ se llama la **base** y $n$, el **exponente**. Se dice que $a$ está **elevado** a $n$.

Es **importante** recordar:

- si la base es positiva, el resultado es siempre positivo. $a>0 \Rightarrow a^n>0$
- si la base es negativa y el exponente es par, el resultado es positivo. $a<0, n \text{ es par} \Rightarrow a^n>0$
- si la base es negativa y el exponente es impar, el resultado es negativo. $a<0, n \text{ es impar} \Rightarrow a^n<0$

## Raíces
