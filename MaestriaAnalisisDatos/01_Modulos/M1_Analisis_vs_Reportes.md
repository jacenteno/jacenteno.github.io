---
modulo: 1
titulo: Análisis de Datos vs Reportes
nivel: Introductorio
tags: [datos, reportes, introduccion]
preparado_por: Jcenteno
---
# Módulo 1 — Análisis de Datos vs Reportes

[![Abrir en Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/jacenteno/jacenteno.github.io/blob/main/Analisis_Datos_Maritimo/03_Notebooks/M1_Analisis_Puerto.ipynb)

> [!info] Objetivo
> Distinguir conceptualmente entre reportar e interpretar datos en el contexto del sector portuario panameño.

## 📌 Conceptos Clave
| Dimensión | 📄 Reporte | 🔬 Análisis |
| :--- | :--- | :--- |
| **Pregunta central** | ¿Qué ocurrió? | ¿Por qué? ¿Qué implica? |
| **Producto final** | Tabla / Informe estático | Insight · Modelo · Recomendación |
| **Herramienta** | Excel · SQL | Python · R · Power BI · ML |
| **Temporalidad** | Retrospectivo | Predictivo / Prescriptivo |

---

## 👨‍🏫 Guía del Profesor (Ejemplo en Clase)
*Usa esta guía para explicar paso a paso el cuaderno `M1_Analisis_Puerto.ipynb`*

1. **Celda 1: Configuración**: Importamos `pandas` y `seaborn`. Explica a los alumnos que `viridis` es una paleta "perceptualmente uniforme", ideal para datos científicos.
2. **Celda 2: Carga**: Mostramos cómo cargar el CSV. El código tiene un "fallback" que genera datos si el archivo no está presente, asegurando que la clase nunca se detenga.
3. **Celda 3: El Reporte**: Ejecutamos una agrupación simple (`groupby`). Esto es lo que haría un administrativo senior: sumar totales por año.
4. **Celda 4: El Análisis**: Aquí calculamos el **Costo por TEU**. Mostramos el gráfico de dispersión. Pregunta a la clase: *¿Por qué el costo sube si la estadía es menor?* (Posiblemente por tarifas de urgencia).

---

## 🚀 Laboratorio Práctico 1
**Tarea**: Usando el dataset `atraques_balboa.csv`, identifica qué tipo de buque genera el mayor costo promedio de operación por cada TEU movilizado.

---

## 📥 Recursos y Descargas
- [📊 Descargar Dataset: atraques_balboa.csv](file:///Users/jorgecenteno/dev/jacenteno.github.io/Analisis_Datos_Maritimo/02_Datasets/atraques_balboa.csv)
- [📓 Cuaderno en Formato Local: M1_Analisis_Puerto.ipynb](file:///Users/jorgecenteno/dev/jacenteno.github.io/Analisis_Datos_Maritimo/03_Notebooks/M1_Analisis_Puerto.ipynb)

---
[[Inicio|🏠 Volver al Inicio]] | [[M2_Proceso_Analisis|Siguiente Módulo ➡️]]
