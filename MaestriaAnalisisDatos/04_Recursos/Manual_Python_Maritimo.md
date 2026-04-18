# 🐍 Manual de Python para el Sector Marítimo

Este manual resume los comandos y bibliotecas esenciales para un analista de datos logísticos.

## 1. Tratamiento de Fechas y Tiempos
El tiempo de vuelta (Turnaround Time) es crítico en el puerto.

```python
import pandas as pd

# Convertir a datetime
df['arribo'] = pd.to_datetime(df['fecha_arribo'])
df['zarpe'] = pd.to_datetime(df['fecha_zarpe'])

# Calcular estadía en horas
df['estadia_h'] = (df['zarpe'] - df['arribo']).dt.total_seconds() / 3600
```

## 2. Análisis de Eficiencia (CII)
Cálculo del Carbon Intensity Indicator.

```python
def calcular_cii(consumo_ton, dwt, distancia_nm):
    # CO2 factor for HFO/MDO is ~3.114
    co2 = consumo_ton * 3.114
    return (co2 * 1e6) / (dwt * distancia_nm)

df['CII'] = df.apply(lambda x: calcular_cii(x.consumo, x.capacidad, x.distancia), axis=1)
```

## 3. Visualización con Plotly
Para dashboards interactivos que permitan hacer "drill-down" en la flota.

```python
import plotly.express as px
fig = px.scatter(df, x="distancia", y="CII", color="rating", size="dwt")
fig.show()
```

---
[[Inicio|🏠 Volver al Inicio]]
