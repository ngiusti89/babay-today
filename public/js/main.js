$(document).ready(function () {
    
    var urlParm = getUrlParameter("baby-id");
    $.get("/api/getbaby/"+urlParm, function (data) {
        console.log("TCL: getBabyData -> data", data)
        if (data) {
            $("#babyNameAge").text(data.baby_name + " - AGE");
        }
    });


    $('body').on('click', '#sleepQuickLog', function () {
        console.log("sleep quick log clicked");
        var sleepTime = new Date().toLocaleString(undefined, {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
        console.log(sleepTime);
    });

    $('body').on('click', '#changeQuickLog', function () {
        console.log("change quick log clicked");
        var changeTime = new Date().toLocaleString(undefined, {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
        console.log(changeTime);
    });

    $('body').on('click', '#foodQuickLog', function () {
        console.log("food quick log clicked");
        var foodTime = new Date().toLocaleString(undefined, {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
        console.log(foodTime);
    });

    $(".form_datetime").datetimepicker({
        format: "dd MM yyyy - hh:ii",
        autoclose: true,
        todayBtn: true,
        pickerPosition: "bottom-left"
    });

    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };
});