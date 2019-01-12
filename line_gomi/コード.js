// LINE developersのメッセージ送受信設定に記載のアクセストークン
var ACCESS_TOKEN = '+Y4fgpNPRCDqJZnnRpYFda25UuArnuxMLxEZkUuPtoEEr+dhalisglekcRLTsv084FKr2fjGw49wU66lw5SCH1eB1/pSY5EmHWGeopa8HRoirOPh/bfRiK2ToeNqB0L5AfWz6T76y7XmGVngzsGUBgdB04t89/1O/w1cDnyilFU=';

function doPost(e) {

  Logger.log(e);
  // WebHookで受信した応答用Token
  var replyToken = JSON.parse(e.postData.contents).events[0].replyToken;
  // ユーザーのメッセージを取得
  var userMessage = JSON.parse(e.postData.contents).events[0].message.text;
  // 応答メッセージ用のAPI URL
  var url = 'https://api.line.me/v2/bot/message/reply';

  UrlFetchApp.fetch(url, {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + ACCESS_TOKEN,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'replyToken': replyToken,
      'messages': [{
        'type': 'text',
        'text': userMessage,
      }],
    }),
    });
  return ContentService.createTextOutput(JSON.stringify({'content': 'post ok'})).setMimeType(ContentService.MimeType.JSON);
}
