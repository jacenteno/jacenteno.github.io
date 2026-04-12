import pandas as pd
import numpy as np
import os

# Create directory if not exists
os.makedirs('/Users/jorgecenteno/dev/CienciaDeDatos/Analisis_Datos_Maritimo/02_Datasets', exist_ok=True)
base_path = '/Users/jorgecenteno/dev/CienciaDeDatos/Analisis_Datos_Maritimo/02_Datasets/'

np.random.seed(42)

# 1. atraques_balboa.csv (6,000)
print("Generando atraques_balboa.csv...")
tipos = ['Portacontenedores', 'Granelero', 'Tanquero', 'RoRo', 'Carga General', 'Buque Frigorífico']
muelles = ['Muelle 1', 'Muelle 2', 'Muelle 3', 'Muelle 4', 'Muelle 5', 'Muelle Norte']
ops = ['Carga', 'Descarga', 'Mixta', 'Tránsito', 'Reparación']
df1 = pd.DataFrame({
    'fecha': pd.date_range(start='2018-01-01', periods=6000, freq='H'),
    'nombre_buque': [f'MV-{np.random.randint(1000, 9999)}' for _ in range(6000)],
    'bandera': np.random.choice(['Panamá', 'Liberia', 'Islas Marshall', 'Singapur', 'Malta'], 6000),
    'tipo_buque': np.random.choice(tipos, 6000),
    'muelle': np.random.choice(muelles, 6000),
    'operacion': np.random.choice(ops, 6000),
    'teu_cargados': np.random.randint(50, 6000, 6000),
    'tiempo_estadia_h': np.random.uniform(8, 96, 6000),
    'costo_usd': np.random.uniform(4000, 30000, 6000)
})
df1.to_csv(base_path + 'atraques_balboa.csv', index=False)

# 2. ais_muestra_canal.csv (8,000)
print("Generando ais_muestra_canal.csv...")
df2 = pd.DataFrame({
    'mmsi': np.random.choice([355123, 371987, 344555, 311009, 211888], 8000),
    'timestamp': pd.date_range(start='2024-01-01', periods=8000, freq='2min'),
    'lat': np.random.uniform(7.0, 9.5, 8000),
    'lon': np.random.uniform(-80.5, -77.5, 8000),
    'velocidad_kn': np.random.normal(12, 4, 8000),
    'rumbo': np.random.randint(0, 360, 8000),
    'tipo_buque': np.random.choice(['Cargo', 'Tanker', 'Passenger', 'Other'], 8000)
})
# Inject errors
df2.loc[::100, 'velocidad_kn'] = np.nan
df2.loc[::500, 'lat'] = 50.0 
df2.to_csv(base_path + 'ais_muestra_canal.csv', index=False)

# 3. corozal_ops.csv (5,000)
print("Generando corozal_ops.csv...")
df3 = pd.DataFrame({
    'fecha': pd.date_range(start='2020-01-01', periods=5000, freq='D'),
    'teu_movilizados': np.random.randint(3000, 20000, 5000),
    'tiempo_espera_h': np.random.uniform(1, 15, 5000),
    'buques_en_puerto': np.random.randint(2, 12, 5000),
    'clima_codigo': np.random.choice([0, 1, 2], 5000), # 0: Sol, 1: Lluvia, 2: Tormenta
    'turno': np.random.choice(['Diurno', 'Nocturno', 'Mixto'], 5000)
})
df3.to_csv(base_path + 'corozal_ops.csv', index=False)

# 4. flota_historial.csv (5,500)
print("Generando flota_historial.csv...")
df4 = pd.DataFrame({
    'consumo_ton_dia': np.random.uniform(20, 120, 5500),
    'distancia_nm': np.random.uniform(500, 8000, 5500),
    'carga_ton': np.random.uniform(5000, 80000, 5500),
    'condicion_mar': np.random.randint(0, 10, 5500),
    'retraso_h': np.random.uniform(0, 48, 5500),
    'ruta_id': np.random.randint(1, 50, 5500)
})
df4.to_csv(base_path + 'flota_historial.csv', index=False)

# 5. lloyds_register.csv (5,000)
print("Generando lloyds_register.csv...")
df5 = pd.DataFrame({
    'mmsi': range(100000, 105000),
    'bandera': np.random.choice(['Panamá', 'Liberia', 'Malta', 'Singapur', 'Grecia'], 5000),
    'año_construccion': np.random.randint(1990, 2024, 5000),
    'capacidad_dwt': np.random.randint(5000, 150000, 5000),
    'longitud_m': np.random.uniform(100, 400, 5000),
    'calado_m': np.random.uniform(5, 18, 5000)
})
df5.to_csv(base_path + 'lloyds_register.csv', index=False)

print("✅ Todos los datasets generados exitosamente.")
