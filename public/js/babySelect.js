$(document).ready(function() {
    var url = window.location.search;
    var accid;
    if (url.indexOf("?acc_id=") !== -1) {
        accid = url.split("=")[1];
      alert(accid);
      }

});