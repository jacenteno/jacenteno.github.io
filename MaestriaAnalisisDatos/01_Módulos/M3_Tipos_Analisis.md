---
modulo: 3
titulo: Tipos de Análisis de Datos
nivel: Intermedio
tags: [estadistica, prediccion, optimizacion]
preparado_por: Jcenteno
---
# Módulo 3 — Tipos de Análisis de Datos

[![Abrir en Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/jacenteno/jacenteno.github.io/blob/main/Analisis_Datos_Maritimo/03_Notebooks/M3_Analisis_Corozal.ipynb)

> [!info] Objetivo
> Aplicar los 4 tipos de análisis al dataset de operaciones de contenedores de Terminal Corozal.

## 🧭 Los 4 Horizontes
| Tipo | Pregunta | Ejemplo Portuario |
| :--- | :--- | :--- |
| **Descriptivo** | ¿Qué pasó? | TEUs movidos en el último trimestre. |
| **Diagnóstico** | ¿Por qué pasó? | Causas del retraso en muelles. |
| **Predictivo** | ¿Qué pasará? | Pronóstico de demanda 2025. |
| **Prescriptivo** | ¿Qué hacer? | Optimización de turnos de grúa. |

---

## 👨‍🏫 Guía del Profesor (Ejemplo en Clase)
*Usa esta guía para el cuaderno `M3_Analisis_Corozal.ipynb`*

1. **Celda 1: Correlación**: Mostramos el Mapa de Calor (Heatmap). Explica que un valor cercano a 1 entre `buques_en_puerto` y `tiempo_espera_h` indica un cuello de botella logístico.
2. **Celda 2: Regresión Lineal**: Usamos Scikit-Learn para predecir TEUs. Haz énfasis en el valor de **R²** (Coeficiente de determinación). Si es 0.85, el modelo explica el 85% de la realidad.
3. **Celda 3: Estacionalidad**: Analizamos la tendencia por año. Pregunta: *¿Cómo afectó la pandemia (2020) a la tendencia de Corozal?*

---

## 🚀 Laboratorio Práctico 3
**Tarea**: Realiza un análisis de correlación entre el `tiempo_espera_h` y el número de `buques_en_puerto`.

---

## 📥 Recursos y Descargas
- [📊 Descargar Dataset: corozal_ops.csv](file:///Users/jorgecenteno/dev/jacenteno.github.io/Analisis_Datos_Maritimo/02_Datasets/corozal_ops.csv)
- [📓 Cuaderno en Formato Local: M3_Analisis_Corozal.ipynb](file:///Users/jorgecenteno/dev/jacenteno.github.io/Analisis_Datos_Maritimo/03_Notebooks/M3_Analisis_Corozal.ipynb)

---
[[M2_Proceso_Analisis|⬅️ Anterior]] | [[Inicio|🏠 Inicio]] | [[M4_Mineria_Datos|Siguiente ➡️]]
