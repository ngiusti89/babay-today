$(document).ready(function() {
    var url = window.location.search;
    var accid;
    var babyList = $("tbody");
    var babyContainer = $(".baby-container");
  
    if (url.indexOf("?acc_id=") !== -1) {
        accid = url.split("=")[1];
     //todo, grab session from cookies. 
    searchForUserAccount(accid);
      } else {
          //todo redirect to login page if session deets not in cookies
          window.location.href = "/";  
      }

    
      

});

function searchForUserAccount(id){
$.get("/api/getuser/"+id, function(data){
if (data){
    console.log("found data");
        getBabyData(id);
  
}
});
}

function  getBabyData(id){
//id should be for account. get all babies associated. 

    $.get("/api/getbabies/"+id, function(data) {
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
    newTr.append("<td>" + bbData.baby_name + "</td>");
    // if (bbData.Posts) {
    //   newTr.append("<td> " + bbData.Posts.length + "</td>");
    // } else {
    //   newTr.append("<td>0</td>");
    // }
    // newTr.append("<td><a href='/blog?author_id=" + bbData.id + "'>Go to Posts</a></td>");
    // newTr.append("<td><a href='/cms?author_id=" + bbData.id + "'>Create a Post</a></td>");
    // newTr.append("<td><a style='cursor:pointer;color:red' class='delete-author'>Delete Author</a></td>");
    return newTr;
  }

  function renderBabiesList(rows){
    // babyList.children().not(":last").remove();
    // babyContainer.children(".alert").remove();
   
    if (rows.length > 0) {
        console.log(rows);
        babyList.prepend(rows);
        // babyContainer.append(babyList);
      }
      else {
        renderEmpty();
      }
  }

  function renderEmpty(){
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.text("You must create a BABY (again).");
    babyContainer.append(alertDiv);
  }