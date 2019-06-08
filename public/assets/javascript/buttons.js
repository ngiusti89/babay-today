

$(document).ready(function () {

    // Log buttons
    // Food
    $('#food').on('click', function () {
        var foodTime = new Date();
        
        console.log(foodTime);
    });

    // change
    $('#change').on('click', function () {
        var changeTime = new Date();
        
        console.log(changeTime);
    });

    // Sleep
    $('#sleep').on('click', function () {
        var sleepTime = new Date();

        console.log(sleepTime);
    })
});