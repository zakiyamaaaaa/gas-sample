
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('aaa');
sheet.getRange(1, COL_TITLE).setValue('Title');
sheet.getRange(1, COL_LATEST).setValue('Last Update');
sheet.getRange(1, COL_PV).setValue('View');
sheet.getRange(1, COL_LIKE).setValue('Like');
sheet.getRange(1, COL_STOCK).setValue('Stock');

var now = Moment.moment();
sheet.getRange(1, COL_UPDATE).setValue("【確認日時】" + now.format('YYYY/MM/DD HH:mm:ss'));

var headers = {'Authorization': 'Bearer ' + QIITA_TOKEN};
var params = {'headers' : headers};

var paramstr = '?per_page=100&page=1';
var res = UrlFetchApp.fetch(API_ENDPOINT + API_MY_ITEMS + paramstr, params);
var json = JSON.parse(res.getContentText());
json.forEach(function(item, i) {
  sheet.getRange(i + 2, COL_TITLE).setValue(item["title"]);
});

function doGet(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('aaa');
  sheet.getRange(2, 2).setValue(e.parameter.firstName + e.parameter.familyName);
  Logger.log(e.parameter.firstName + e.parameter.familyName);
  Logger.log(e.parameter.firstName + e.parameter.familyName);
  // hello world
  //var data = sheet.getRange('A1:A4').getValues();
  //return ContentService.createTextOutput(JSON.stringify(data))
  // return ContentService.createTextOutput(e.parameter.firstName + e.parameter.familyName)
  
}
