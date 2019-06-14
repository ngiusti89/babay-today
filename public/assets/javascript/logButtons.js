$(document).ready(function () {

    // Buttons to log events
    // food
    $('#food').on('click', function () {
        // gets current time
        var foodTime = new Date().toLocaleString(undefined, {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
        console.log(foodTime);

        // creates div for logging options (quick log vs manual)
        var foodDiv = document.createElement('div');

        var quickLog = document.createElement('button');
        var btnTxt = document.createTextNode("Quick log");
        quickLog.setAttribute("class", "btn btn-lg")
        quickLog.appendChild(btnTxt);
        foodOptions.appendChild(quickLog);

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

        var changeDiv = document.createElement('div');

        var quickLog = document.createElement('button');
        var btnTxt = document.createTextNode("Quick log");
        quickLog.setAttribute("class", "btn btn-lg")
        quickLog.appendChild(btnTxt);
        changeOptions.appendChild(quickLog);

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

        var sleepDiv = document.createElement('div');

        var quickLog = document.createElement('button');
        var btnTxt = document.createTextNode("Quick log");
        quickLog.setAttribute("class", "btn btn-lg")
        quickLog.appendChild(btnTxt);
        sleepOptions.appendChild(quickLog);

        // TODO: post sleep timestamp
        // $.post("/api/sleep", sleepTime, function (data) {
        // $("")
        // });

    });
});