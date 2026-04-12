---
modulo: 8
titulo: Big Data Analytics
nivel: Avanzado
tags: [big-data, pyspark, spark, escalabilidad]
preparado_por: Jcenteno
---
# Módulo 8 — Big Data Analytics

[![Abrir en Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/jacenteno/jacenteno.github.io/blob/main/Analisis_Datos_Maritimo/03_Notebooks/M8_Spark_AIS.ipynb)

> [!info] Objetivo
> Procesar volúmenes masivos de datos AIS con PySpark en el entorno de Google Colab.

---

## 👨‍🏫 Guía del Profesor (Ejemplo en Clase)
*Usa esta guía para el cuaderno `M8_Spark_AIS.ipynb`*

1. **Celda 1: Instalación**: Explicamos por qué PySpark necesita Java. Comenta que en sistemas locales esto es complejo, pero en Google Colab se resuelve en 30 segundos.
2. **Celda 2: Sesión Spark**: Iniciamos el "Contexto de Spark". Explica que esto activa el motor distribuido que permitirá procesar millones de filas AIS.
3. **Celda 3: Filtrado Distribuido**: Usamos `F.col()`. Muestra que la sintaxis de PySpark es muy similar a SQL, lo que facilita la transición para analistas senior.
4. **Celda 4: Agregación**: Realizamos el `groupBy` masivo. Comenta que esto tardaría minutos en Excel, pero en Spark es casi instantáneo.

---

## 🚀 Laboratorio Práctico 8
**Tarea**: Procesa un snapshot global de datos AIS usando PySpark en Colab.

---

## 📥 Recursos y Descargas
- [📊 Descargar Dataset: ais_muestra_canal.csv](file:///Users/jorgecenteno/dev/jacenteno.github.io/Analisis_Datos_Maritimo/02_Datasets/ais_muestra_canal.csv)
- [📓 Cuaderno en Formato Local: M8_Spark_AIS.ipynb](file:///Users/jorgecenteno/dev/jacenteno.github.io/Analisis_Datos_Maritimo/03_Notebooks/M8_Spark_AIS.ipynb)

---
[[M7_Competencias|⬅️ Anterior]] | [[Inicio|🏠 Inicio]]
