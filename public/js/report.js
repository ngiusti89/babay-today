$(document).ready(function () {

    var urlParm = getUrlParameter("baby-id");
    console.log(urlParm);
    $.get("/api/getbabyevents/" + urlParm, function (data) {
        console.log("TCL: getBabyData -> data", data)
        if (data) {
            $(".babyRows").text(data);
        }
    });


    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };



});