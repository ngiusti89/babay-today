$(document).ready(function () {

    // Buttons to log events
    // food
    // $('#food').click(function () {

    //     // TODO: post food timestamp
    //     // $.post("/api/food", foodTime, function (data) {
    //     // $("")
    //     // });

    // });

    // change
    // $('#change').click(function () {

    //     // TODO: post change timestamp
    //     // $.post("/api/change", changeTime, function (data) {
    //     // $("")

    //     // });
    // });

    // sleep
    // $('#sleep').click(function () {

    //     // TODO: post sleep timestamp
    //     // $.post("/api/sleep", sleepTime, function (data) {
    //     // $("")
    //     // });
    // });

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

});