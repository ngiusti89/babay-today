$(document).ready(function () {

    // Log buttons
    // food
    $('#food').on('click', function () {
        var foodTime = new Date().toLocaleString(undefined, {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
        console.log(foodTime);

        // TODO: post food timestamp
        // $.post("/api/food", foodTime, function (data) {
        // $("")
        // });

    });

    // change
    $('#change').on('click', function () {
        var changeTime = new Date().toLocaleString(undefined, {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
        console.log(changeTime);

        // TODO: post change timestamp
        // $.post("/api/change", changeTime, function (data) {
        // $("")

        // });

    });

    // sleep
    $('#sleep').on('click', function () {
        var sleepTime = new Date().toLocaleString(undefined, {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
        console.log(sleepTime);

        // TODO: post sleep timestamp
        // $.post("/api/sleep", sleepTime, function (data) {
        // $("")
        // });

    });
});