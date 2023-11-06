function getMessageInputValueByName() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var nameInputValue = "message"; // replace with the name of your input
    var data = sheet.getDataRange().getValues();
    var messageInputValue = "";
    for (var i = 0; i < data.length; i++) {
      if (data[i][0] == nameInputValue) {
        messageInputValue = data[i][1];
        break;
      }
    }
    Logger.log("Message input value: " + messageInputValue);
  }
  