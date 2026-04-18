---
modulo: 4
titulo: Minería de Datos
nivel: Intermedio-Avanzado
tags: [machine-learning, clustering, arboles-decision]
preparado_por: Jcenteno
---
# Módulo 4 — Minería de Datos

[![Abrir en Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/jacenteno/jacenteno.github.io/blob/main/Analisis_Datos_Maritimo/03_Notebooks/M4_Mineria_Flota.ipynb)

> [!info] Objetivo
> Aplicar técnicas de Machine Learning (clustering, clasificación, detección de anomalías) a datos de flota naviera.

## 🤖 Algoritmos Aplicados
| Algoritmo | Tipo | Librería |
| :--- | :--- | :--- |
| **K-Means** | Clustering | `sklearn.cluster` |
| **Isolation Forest**| Anomalías | `sklearn.ensemble` |

---

## 👨‍🏫 Guía del Profesor (Ejemplo en Clase)
*Usa esta guía para el cuaderno `M4_Mineria_Flota.ipynb`*

1. **Celda 1: Escalamiento**: Explicamos el `StandardScaler`. Es vital porque la distancia (5000 nm) y el consumo (50 ton) tienen escalas muy distintas y KMeans usa distancia euclidiana.
2. **Celda 2: K-Means**: Agrupamos la flota en 3 clústeres. Muestra el gráfico y ayuda a identificar qué grupo es el "Eficiente", el "Promedio" y el "Altamente Contaminante".
3. **Celda 3: Detección de Anomalías**: Usamos `Isolation Forest`. Explica que esto sirve para detectar si un buque está informando mal su consumo o si hay una avería técnica.

---

## 🚀 Laboratorio Práctico 4
**Tarea**: Implementa un modelo de K-Means para agrupar los viajes de la `Naviera Panameña` en 3 clústeres.

---

## 📥 Recursos y Descargas
- [📊 Descargar Dataset: flota_historial.csv](file:///Users/jorgecenteno/dev/jacenteno.github.io/Analisis_Datos_Maritimo/02_Datasets/flota_historial.csv)
- [📓 Cuaderno en Formato Local: M4_Mineria_Flota.ipynb](file:///Users/jorgecenteno/dev/jacenteno.github.io/Analisis_Datos_Maritimo/03_Notebooks/M4_Mineria_Flota.ipynb)

---
[[M3_Tipos_Analisis|⬅️ Anterior]] | [[Inicio|🏠 Inicio]] | [[M5_Calidad_Dato|Siguiente ➡️]]
