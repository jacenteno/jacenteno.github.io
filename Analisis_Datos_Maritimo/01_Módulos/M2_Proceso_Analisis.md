---
modulo: 2
titulo: Proceso de Análisis de Datos
nivel: Básico-Intermedio
tags: [proceso, limpieza, exploration, AIS]
preparado_por: Jcenteno
---
# Módulo 2 — Proceso de Análisis de Datos

[![Abrir en Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/jacenteno/jacenteno.github.io/blob/main/Analisis_Datos_Maritimo/03_Notebooks/M2_Limpieza_AIS.ipynb)

> [!info] Objetivo
> Dominar las 5 fases del proceso analítico aplicadas a datos de señales AIS del Canal de Panamá.

## 🔄 El Ciclo Analítico

```mermaid
graph LR
    A[1. RECOLECCIÓN] --> B[2. LIMPIEZA]
    B --> C[3. EXPLORACIÓN]
    C --> D[4. MODELADO]
    D --> E[5. INTERPRETACIÓN]
    E --> C
```

---

## 👨‍🏫 Guía del Profesor (Ejemplo en Clase)
*Usa esta guía para explicar el cuaderno `M2_Limpieza_AIS.ipynb`*

1. **Celda 1: Diagnóstico**: Mostramos `df.isnull().sum()`. Explica que en el sector marítimo, los nulos suelen ser "puntos ciegos" o interferencias en el sensor AIS.
2. **Celda 2: Geofencing**: Usamos `.between()` para crear una "caja virtual" del Canal de Panamá. Mostramos cómo se eliminan puntos que "caen" en el desierto o el Ártico por errores de GPS.
3. **Celda 3: Imputación**: Reemplazamos velocidades nulas con la **mediana**. Explica por qué usamos la mediana y no la media (la media se ve afectada por barcos a velocidad 0 o muy alta).
4. **Celda 4: Visualización**: Comparamos el "Antes" vs "Después" con un gráfico de densidad.

---

## 🚀 Laboratorio Práctico 2
**Reto**: Limpia el dataset `ais_muestra_canal.csv` eliminando los buques que se encuentren fuera de las coordenadas del Canal.

---

## 📥 Recursos y Descargas
- [📊 Descargar Dataset: ais_muestra_canal.csv](file:///Users/jorgecenteno/dev/jacenteno.github.io/Analisis_Datos_Maritimo/02_Datasets/ais_muestra_canal.csv)
- [📓 Cuaderno en Formato Local: M2_Limpieza_AIS.ipynb](file:///Users/jorgecenteno/dev/jacenteno.github.io/Analisis_Datos_Maritimo/03_Notebooks/M2_Limpieza_AIS.ipynb)

---
[[M1_Analisis_vs_Reportes|⬅️ Anterior]] | [[Inicio|🏠 Inicio]] | [[M3_Tipos_Analisis|Siguiente ➡️]]
