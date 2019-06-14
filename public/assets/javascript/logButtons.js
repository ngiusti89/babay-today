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
        quickLog.innerHTML = "Quick Log";
        quickLog.setAttribute("class", "btn btn-lg")
        foodOptions.appendChild(quickLog);
        quickLog.appendChild(foodDiv);


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
        quickLog.innerHTML = "Quick Log";
        quickLog.setAttribute("class", "btn btn-lg")
        changeOptions.appendChild(quickLog);
        quickLog.appendChild(changeDiv);

        // TODO: post change timestamp
        // $.post("/api/change", changeTime, function (data) {
        // $("")

        // });

    });

    // sleep
    $('#sleep').on('click', function () {


        var sleepDiv = document.createElement('div');

        var quickLog = document.createElement('button');
        quickLog.innerHTML = "Quick Log";
        quickLog.setAttribute("class", "btn btn-lg")
        quickLog.setAttribute("id", "sleepQuickLog");
        sleepOptions.appendChild(quickLog);
        quickLog.appendChild(sleepDiv);

        // TODO: post sleep timestamp
        // $.post("/api/sleep", sleepTime, function (data) {
        // $("")
        // });

    });

    $('#sleepQuickLog').on('click', function () {
        var sleepTime = new Date().toLocaleString(undefined, {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
        console.log(sleepTime);
    });

});