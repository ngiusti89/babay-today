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
        foodDiv.textContent = "food options";
        foodOptions.appendChild(foodDiv);

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
        changeDiv.textContent = "change options";
        changeOptions.appendChild(changeDiv);

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
        sleepDiv.textContent = "food options";
        sleepOptions.appendChild(sleepDiv);

        // TODO: post sleep timestamp
        // $.post("/api/sleep", sleepTime, function (data) {
        // $("")
        // });

    });
});