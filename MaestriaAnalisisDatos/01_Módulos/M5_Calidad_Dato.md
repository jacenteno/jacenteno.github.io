---
modulo: 5
titulo: Calidad del Dato
nivel: Conceptual + Aplicado
tags: [calidad, integridad, sesgo]
preparado_por: Jcenteno
---
# Módulo 5 — Características del Buen Dato

[![Abrir en Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/jacenteno/jacenteno.github.io/blob/main/Analisis_Datos_Maritimo/03_Notebooks/M5_Auditoria_Calidad.ipynb)

> [!info] Objetivo
> Evaluar la calidad del dato en organizaciones portuarias y detectar sesgos en registros de banderas.

---

## 👨‍🏫 Guía del Profesor (Ejemplo en Clase)
*Usa esta guía para el cuaderno `M5_Auditoria_Calidad.ipynb`*

1. **Celda 1: Función de Auditoría**: Explicamos cómo automatizar la revisión de miles de filas. El uso de **Emojis** (`✅`, `❌`) ayuda a que un supervisor de datos entienda el reporte rápidamente.
2. **Celda 2: Completitud**: Analizamos qué porcentajes de nulos son aceptables. Pregunta a la clase: *¿Podemos trabajar con un 95% de completitud en la columna de MMSI?* (No, el MMSI es clave primaria).
3. **Celda 3: Consistencia**: Verificamos que los tipos de datos sean correctos (ej: que la fecha no sea un texto).

---

## 🚀 Laboratorio Práctico 5
**Tarea**: Realiza una auditoría automatizada sobre el dataset de `Lloyd's Register`.

---

## 📥 Recursos y Descargas
- [📊 Descargar Dataset: lloyds_register.csv](file:///Users/jorgecenteno/dev/jacenteno.github.io/Analisis_Datos_Maritimo/02_Datasets/lloyds_register.csv)
- [📓 Cuaderno en Formato Local: M5_Auditoria_Calidad.ipynb](file:///Users/jorgecenteno/dev/jacenteno.github.io/Analisis_Datos_Maritimo/03_Notebooks/M5_Auditoria_Calidad.ipynb)

---
[[M4_Mineria_Datos|⬅️ Anterior]] | [[Inicio|🏠 Inicio]] | [[M6_Aplicaciones_CII|Siguiente ➡️]]
