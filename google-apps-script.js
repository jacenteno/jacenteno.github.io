// Google Apps Script para recibir datos del chatbot y guardar en Google Sheets
// Este código debe ir en Google Apps Script (script.google.com)

function doPost(e) {
  try {
    // Parsear los datos recibidos
    const data = JSON.parse(e.postData.contents);
    
    // Obtener o crear la hoja de cálculo
    const sheet = getOrCreateSheet();
    
    // Agregar fila con los datos
    sheet.appendRow([
      data.timestamp,
      data.question,
      data.answer,
      data.category,
      data.userAgent,
      data.page
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({status: 'success', message: 'Datos guardados'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({status: 'error', message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Para pruebas - permite verificar que el script funciona
  return ContentService
    .createTextOutput(JSON.stringify({status: 'success', message: 'Script funcionando'}))
    .setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateSheet() {
  const SHEET_NAME = 'Consultas Chatbot';
  
  // Intentar obtener la hoja existente
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  
  // Si no hay spreadsheet activo, crear uno nuevo
  if (!spreadsheet) {
    spreadsheet = SpreadsheetApp.create('Portafolio - Consultas Chatbot');
  }
  
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  
  // Si la hoja no existe, crearla
  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
    
    // Configurar headers
    const headers = [
      'Fecha/Hora',
      'Pregunta',
      'Respuesta',
      'Categoría',
      'Navegador',
      'Página'
    ];
    
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    
    // Formatear headers
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#4285f4');
    headerRange.setFontColor('#ffffff');
    
    // Configurar ancho de columnas
    sheet.setColumnWidth(1, 120); // Fecha/Hora
    sheet.setColumnWidth(2, 300); // Pregunta
    sheet.setColumnWidth(3, 400); // Respuesta
    sheet.setColumnWidth(4, 120); // Categoría
    sheet.setColumnWidth(5, 200); // Navegador
    sheet.setColumnWidth(6, 150); // Página
  }
  
  return sheet;
}

// Función para obtener estadísticas (opcional)
function getChatStats() {
  const sheet = getOrCreateSheet();
  const data = sheet.getDataRange().getValues();
  
  if (data.length <= 1) return { message: 'No hay datos' };
  
  // Contar por categoría
  const categoryCount = {};
  for (let i = 1; i < data.length; i++) {
    const category = data[i][3];
    categoryCount[category] = (categoryCount[category] || 0) + 1;
  }
  
  return {
    totalInteractions: data.length - 1,
    categoryCounts: categoryCount,
    lastInteraction: data[data.length - 1][0]
  };
}

// Función de configuración inicial (ejecutar una vez)
function setupInitialSheet() {
  const sheet = getOrCreateSheet();
  
  // Agregar datos de prueba (opcional)
  sheet.appendRow([
    new Date().toLocaleString('es-ES'),
    'Pregunta de prueba',
    'Respuesta de prueba',
    'test',
    'Mozilla/5.0 (Test Browser)',
    'https://tu-portafolio.com'
  ]);
  
  console.log('Hoja configurada correctamente');
  console.log('URL del spreadsheet:', SpreadsheetApp.getActiveSpreadsheet().getUrl());
}