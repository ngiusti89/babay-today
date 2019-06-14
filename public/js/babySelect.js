

$(document).ready(function () {

  var babyList = $(".babyRows");
  var babyContainer = $(".baby-container");

  getBabyData();
  function getBabyData() {
    //id should be for account. get all babies associated. 

    $.get("/api/getbabies", function (data) {
      console.log("TCL: getBabyData -> data", data)
      if (data) {
        console.log("found a baby");
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
          rowsToAdd.push(createBabyRowSelector(data[i]));
        }
        console.log(rowsToAdd)
        renderBabiesList(rowsToAdd);

      }
    });
  }

  function createBabyRowSelector(bbData) {
    console.log(bbData.baby_name)
    var newTr = $("<tr>");
    newTr.data("babe", bbData.id);
    var babyNameTD = $("<td>");
    babyNameTD.text(bbData.baby_name);
    babyNameTD.appendTo(newTr)
    var babyAgeTD = $("<td>");
    babyAgeTD.text(moment(bbData.baby_birthday).format("YYYY/MM/YY"));
    babyAgeTD.appendTo(newTr)
    var babyAgeLU = $("<td>");
    babyAgeLU.text(moment(bbData.updatedAt).format("YYYY/MM/YY"));
    babyAgeLU.appendTo(newTr)
    var babySelector = $("<td>");
    babySelector.addClass("babySelector")
    babySelector.data("id", bbData.id)
    var babyText = $('<a href="/main?baby-id=' + bbData.id + '">View Baby</a>');
    babyText.addClass("babyLink");
    babyText.appendTo(babySelector);
    babySelector.appendTo(newTr);   
    return newTr;
  }

  function renderBabiesList(rows) {
    // babyList.children().not(":last").remove();
    // babyContainer.children(".alert").remove();

    if (rows.length > 0) {
      console.log(rows + babyList);
      babyList.append(rows);
    
    }
    else {
      renderEmpty();
    }
  }

  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.text("You must create a BABY (again).");
    babyContainer.append(alertDiv);
  }





  

});
