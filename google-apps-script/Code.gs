function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var p = e.parameter;

  sheet.appendRow([
    new Date(),
    p.name || '',
    p.phone || '',
    p.address || '',
    p.package || '',
    p.qty || '',
    p.total || '',
    p.note || '',
    'Mới'
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
