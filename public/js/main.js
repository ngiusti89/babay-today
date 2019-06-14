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
        event.preventDefault();
        console.log("food quick log clicked");
        //first: lets add the event
        $.post('/api/quicklog', {
            eventName: "Feeding",
            babyId: 1 //hardcoding it for now
        })
            .then(function (data) {
                console.log("TCL: EVENT data: ", data)
                nowPostEventDetails(data, 'bottle', 4);
            });

        var foodTime = new Date().toLocaleString(undefined, {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
        console.log(foodTime);
    });

    function nowPostEventDetails(data, typeOfFood, howMuch) {
        //Second: lets add the event details
        $.post('/api/quicklog/feedStarted',{

            eventId: data.id,
            typeOfFeeding: typeOfFood,
            howManyOz: howMuch,
            timeStarted: false
        })
        .then(function (data){
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