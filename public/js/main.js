$(document).ready(function () {

    var urlParm = getUrlParameter("baby-id");
    //append reports button with baby id attached
    var eleLi = $("#reportLi");
    
    var babyRep = $('<a href="/report?baby-id=' +urlParm + '">View Reports</a>');
    babyRep.addClass("babyRep");
    babyRep.appendTo(eleLi);
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

    $('body').on('click', '#quickSleep', function () {
        event.preventDefault();
        console.log('baby id:' + urlParm)
        postTheEvent('Sleep', '');
    });

    $('body').on('click', '.quickChange', function () {
        event.preventDefault();
        postTheEvent("Diaper Change", $(this).text());
    });

    $('body').on('click', '#foodQuickLogBottle', function () {
        event.preventDefault();
        postTheEvent("Feeding", 'bottle');
    });

    function postTheEvent(eventName, eventDetail) {
        $.post('/api/quicklog', {
            eventName: eventName,
            babyId: urlParm
        }).then(function (data) {
            if(eventName==='Sleep'){}
            console.log("TCL: EVENT data: ", data)
            postEventDetails(data, eventName, eventDetail , 4, (eventName==='Sleep'));
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
                popupModal(eventName + " event posted successfully", "Success!")
            })
    }

    // app.get('/api/quicklog/sleepingbaby', function(request, response){
    //     db.post
    // })

//       // Get route for retrieving a single post
//   app.get("/api/posts/:id", function(req, res) {
//     // Here we add an "include" property to our options in our findOne query
//     // We set the value to an array of the models we want to include in a left outer join
//     // In this case, just db.Author
//     db.Post.findOne({
//       where: {
//         id: req.params.id
//       },
//       include: [db.Author]
//     }).then(function(dbPost) {
//       res.json(dbPost);
//     });
//   });

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


    // Setting Up Last-Five Chart
    var babyList = $(".babyRows");
    var babyContainer = $(".baby-container");

    getBabyData();
    function getBabyData() {
        //id should be for account. get all babies associated. 

        $.get("/api/getevents/" + urlParm, function (data) {
            console.log("TCL: getBabyData -> data", data)
            if (data) {
                console.log("found a baby");
                var rowsToAdd = [];
                for (var i = 0; i < data.length; i++) {
                    rowsToAdd.push(createBabyRowSelector(data[i]));
                }
                console.log(rowsToAdd)
                renderBabiesList(rowsToAdd);

            }
        });
    }

    function getBabyAge(bbData) {
        babyBirthday = bbData.baby_birthday;
        if (moment().diff(moment(babyBirthday), 'months') > 30) {
            return moment().diff(moment(babyBirthday), 'years') + ' years';
        } else {
            return moment().diff(moment(babyBirthday), 'months') + ' months';
        }

    }


    function createBabyRowSelector(bbData) {
        getBabyAge(bbData);
        console.log(bbData.event_type_name)
        var newTr = $("<tr>");
        newTr.data("babe", bbData.id);
        var babyNameTD = $("<td>");
        babyNameTD.text(bbData.event_type_name);
        babyNameTD.appendTo(newTr)
        var babyAgeTD = $("<td>");
        babyAgeTD.text(getBabyAge(bbData));
        babyAgeTD.appendTo(newTr)
        var babyAgeLU = $("<td>");
        babyAgeLU.text(moment(bbData.updatedAt).format("h:m a"));
        babyAgeLU.appendTo(newTr)
        var babySelector = $("<td>");
        babySelector.addClass("babySelector")
        babySelector.data("id", bbData.id)
        var babyText = $('<a href="/main?baby-id=' + bbData.id + '">View Baby</a>');
        babyText.addClass("babyLink");
        babyText.appendTo(babySelector);
        babySelector.appendTo(newTr);
        return newTr;
    }

    function renderBabiesList(rows) {
        // babyList.children().not(":last").remove();
        // babyContainer.children(".alert").remove();

        if (rows.length > 0) {
            console.log(rows + babyList);
            babyList.append(rows);

        }
        else {
            renderEmpty();
        }
    }

    function renderEmpty() {
        var alertDiv = $("<div>");
        alertDiv.addClass("alert alert-danger");
        alertDiv.text("You must create a BABY (again).");
        babyContainer.append(alertDiv);
    }







});