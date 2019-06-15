$(document).ready(function () {

    var urlParm = getUrlParameter("baby-id");
    $.get("/api/getbaby/" + urlParm, function (data) {
        console.log("TCL: getBabyData -> data", data)
        if (data) {
            $("#babyNameAge").text(data.baby_name + " - " + getBabyAge(data));
        }
    });

    function getBabyAge(data) {
        babyBirthday = data.baby_birthday;
        if (moment().diff(moment(babyBirthday), 'months') > 30) {
            return moment().diff(moment(babyBirthday), 'years') + ' years';
        } else {
            return moment().diff(moment(babyBirthday), 'months') + ' months';
        }
    }


    // old sleep quick log
    // $('body').on('click', '#sleepQuickLog', function () {
    //     console.log("sleep quick log clicked");
    //     var sleepTime = new Date().toLocaleString(undefined, {
    //         day: 'numeric',
    //         month: 'numeric',
    //         year: 'numeric',
    //         hour: '2-digit',
    //         minute: '2-digit',
    //     });
    //     console.log(sleepTime);
    // });

    $(".form_datetime").datetimepicker({
        format: "dd MM yyyy - hh:ii",
        autoclose: true,
        todayBtn: true,
        pickerPosition: "bottom-left"
    });


    $('body').on('click', '#quickSleep', function () {
        var sleepButton = document.getElementById("quickSleep");
        if (sleepButton.value == "Start Sleep") sleepButton.value = "Stop Sleep";
        else sleepButton.value = "Start Sleep";
        console.log("clicked");
    });

    // $('body').on('click', '#changeQuickLogWet', function () {
    //     event.preventDefault();
    //     postTheEvent("Diaper Change", 'Wet');
    // });
    // $('body').on('click', '#changeQuickLogDry', function () {
    //     event.preventDefault();
    //     postTheEvent("Diaper Change", 'Dry');
    // });
    // $('body').on('click', '#changeQuickLogDirty', function () {
    //     event.preventDefault();
    //     postTheEvent("Diaper Change", 'Dirty');
    // });

    $('body').on('click', '.quickChange', function () {
        event.preventDefault();
        postTheEvent("Diaper Change", $(this).text());
    });



    function createChangeButtons() {
        destroyChangeButtons();
        $('#changeOptions').append($("<div>").addClass("container").attr("id", "diaper-btn-container"));

        $('#diaper-btn-container').append($("<button>").addClass("btn btn-lg btn-secondary diaper-button").attr("id", "dry-button"));
        $('#dry-button').append($("<i>").addClass("far fa-sun-dust"));
        $('#dry-button').html('Dry')

        $('#diaper-btn-container').append($("<button>").addClass("btn btn-lg btn-secondary diaper-button").attr("id", "wet-button"));
        $('#wet-button').append($("<i>").addClass("fas fa-water"));
        $('#wet-button').html('Wet')

        $('#diaper-btn-container').append($("<button>").addClass("btn btn-lg btn-secondary diaper-button").attr("id", "dirty-button"));
        $('#dirty-button').append($("<i>").addClass("fas fa-water"));
        $('#dirty-button').html('Dirty')
    }
    function destroyChangeButtons() {
        $('#diaper-btn-container').empty();
    }

    $('body').on('click', '.diaper-button', function () {
        event.preventDefault();
        console.log($("this").attr("html"))
        // postTheEvent("Diaper Change", 'wet');
    });

    $('body').on('click', '#foodQuickLogBottle', function () {
        event.preventDefault();
        postTheEvent("Feeding", 'bottle');
    });

    function postTheEvent(eventName, eventDetail) {
        $.post('/api/quicklog', {
            eventName: eventName,
            babyId: 1 //hardcoding it for now
        }).then(function (data) {
            console.log("TCL: EVENT data: ", data)
            postEventDetails(data, eventName, eventDetail, 4, false);
        });
    }

    function postEventDetails(data, eventName, eventDetail, howMuch, timeBool) {

        //Second: lets add the event details
        $.post('/api/quicklog/feedStarted', {
            eventId: data.id,
            typeOfFeeding: eventDetail,
            howManyOz: howMuch,
            timeStarted: timeBool
        })
            .then(function (data) {
                console.log("TCL: nowPostEventDetails -> Event Detail DAta:", data)
                popupModal("event posted successfully", "Success!")
            })
    }



    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    function popupModal(message, typeOfModal) {
        $("#errorModal").empty();
        $("body").append($("<div>").addClass("modal fade").attr({ id: "errorModal", role: "dialog", }));
        $("#errorModal").append($("<div>").addClass("modal-dialog").attr({ id: "errDialog", role: "document" }));
        $("#errDialog").append($("<div>").addClass("modal-content").attr("id", "errModalContent"));
        $("#errModalContent").append($("<div>").addClass("modal-header alert-primary").attr("id", "errModalheader"));
        $("#errModalheader").append($("<h5>").addClass("modal-title").attr("id", "errModalTitle").html(typeOfModal));
        $("#errModalContent").append($("<div>").addClass("modal-body").attr("id", "errModalBody").html(message))
        $("#errModalContent").append($("<div>").addClass("modal-footer").attr("id", "errModalFooter"));
        $("#errModalFooter").append($("<button>").addClass("btn btn-secondary").attr({ id: "closeButton", type: "button" }).attr("data-dismiss", "modal").html("close"))
        $("#errorModal").modal("show");
    }

});