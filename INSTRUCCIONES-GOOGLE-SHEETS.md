# 📊 Configuración de Google Sheets para Chatbot

## 🚀 Pasos para Configurar (5 minutos)

### **Paso 1: Crear Google Apps Script**
1. Ve a [script.google.com](https://script.google.com)
2. Click **"Nuevo proyecto"**
3. **Elimina** el código por defecto
4. **Copia y pega** todo el código del archivo `google-apps-script.js`
5. **Renombra** el proyecto: "Portafolio Chatbot Logger"

### **Paso 2: Configurar Permisos**
1. Click **"Guardar"** (Ctrl+S)
2. Click **"Ejecutar"** (función setupInitialSheet)
3. **Autoriza los permisos** cuando aparezca el popup
4. Click **"Ir a configuración avanzada"** si aparece advertencia
5. Click **"Ir a Portafolio Chatbot Logger (no seguro)"**
6. Click **"Permitir"**

### **Paso 3: Desplegar como Web App**
1. Click **"Implementar"** > **"Nueva implementación"**
2. Tipo: **"Aplicación web"**
3. Ejecutar como: **"Yo"** 
4. Acceso: **"Cualquier usuario"**
5. Click **"Implementar"**
6. **COPIA LA URL** que aparece (algo como: `https://script.google.com/macros/s/ABC123.../exec`)

### **Paso 4: Actualizar tu Portafolio**
1. Abre tu archivo `index.html`
2. Busca esta línea:
   ```javascript
   const SHEET_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
   ```
3. **Reemplaza `YOUR_SCRIPT_ID`** con la URL que copiaste en el paso 3
4. **Guarda** el archivo

### **Paso 5: Probar el Sistema**
1. Abre tu portafolio en el navegador
2. **Usa el chatbot** - haz una pregunta cualquiera
3. Ve a [drive.google.com](https://drive.google.com)
4. Busca **"Portafolio - Consultas Chatbot"**
5. **¡Deberías ver tu pregunta registrada!**

---

## 📊 **Lo que Verás en Google Sheets:**

| Fecha/Hora          | Pregunta                    | Respuesta                | Categoría     | Navegador    | Página           |
|--------------------|-----------------------------|--------------------------|---------------|--------------|------------------|
| 19/12/2024 14:30:25| ¿Qué tecnologías usas?     | Jorge es experto en...   | ios_swift     | Chrome 120   | portafolio.com   |
| 19/12/2024 14:32:10| ¿Estás disponible?         | Actualmente disponible..| availability  | Safari 17    | portafolio.com   |

---

## 🎯 **Categorías que se Registran:**

- **`greeting`** - Saludos (Hola, Buenos días)
- **`ios_swift`** - Preguntas sobre iOS/Swift
- **`android_kotlin`** - Preguntas sobre Android/Kotlin
- **`backend_django`** - Preguntas sobre Django/Python
- **`ai_llms`** - Preguntas sobre IA/LLMs
- **`availability`** - Consultas de disponibilidad
- **`projects`** - Preguntas sobre proyectos
- **`tools`** - Preguntas sobre herramientas
- **`experience`** - Preguntas sobre experiencia
- **`contact`** - Solicitudes de contacto
- **`default_response`** - Otras preguntas

---

## 🛠️ **Funciones Avanzadas:**

### **Ver Estadísticas:**
En Google Apps Script, ejecuta la función `getChatStats()` para obtener:
- Total de interacciones
- Conteo por categoría
- Última interacción

### **Exportar Datos Locales:**
Si Google Sheets falla temporalmente, los datos se guardan localmente. 
Agrega este botón a tu portafolio para exportar:

```html
<button onclick="exportChatLog()">📥 Exportar Log Local</button>
```

### **Backup Automático:**
El sistema guarda localmente como respaldo si Google Sheets no está disponible.

---

## ⚠️ **Resolución de Problemas:**

### **Error "Script not found":**
- Verifica que hayas copiado la URL completa del script
- Asegúrate de que esté implementado como "Aplicación web"

### **Error de permisos:**
- Ve a Google Apps Script
- Ejecuta `setupInitialSheet()` manualmente
- Autoriza todos los permisos

### **No se guardan datos:**
- Abre las herramientas de desarrollador (F12)
- Ve a la consola
- Busca errores en rojo
- Verifica que la URL del script sea correcta

### **Datos solo locales:**
- Si ves "💾 Datos guardados localmente" en consola, Google Sheets no está funcionando
- Usa `exportChatLog()` para obtener los datos
- Revisa la configuración del script

---

## 🎉 **¡Listo!**

Una vez configurado, cada interacción con tu chatbot se guardará automáticamente en Google Sheets. Podrás:

- **Ver todas las consultas** en tiempo real
- **Analizar preguntas frecuentes**
- **Identificar intereses** de los visitantes
- **Mejorar respuestas** basado en feedback real
- **Hacer seguimiento** de potenciales clientes

¡Tu portafolio ahora tiene analytics profesionales del chatbot! 🚀📊