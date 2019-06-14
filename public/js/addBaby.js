$(document).ready(function () {

    $(document).on('click', '.addBabyBtn', function () {
        event.preventDefault();
        if (validateForm()) {
            var babyName = $('#babyName').val().trim();
            var babyGender = $('.babyGender').val();
            var babyBirthday = $('#babyBday').val().trim();
            $.post('/api/addbaby', {
                babyName: babyName,
                babyGender: babyGender,
                babyBirthday: babyBirthday
            }).then(function (data) {
                console.log(data);
                window.location.href = "/babypicker";
            })
        }
    });

    function validateForm() {
        var isValid = moment($('#babyBday').val().trim(), ['YYYY/MM/DD', 'MM/DD/YYYY', 'M/D/YY', 'D/M/YY'], true).isValid();
        if (!isValid) {
            popupErrorModal("Incorrect date format. date should be YYYY-DD-MM format")
        }else if($('#babyName').val().trim() === ""){
            popupErrorModal("Must enter a name")
            isValid = false;
        }
        return isValid;
    }

    function popupErrorModal(message) {
        $("#errorModal").empty();
        $("body").append($("<div>").addClass("modal fade").attr({ id: "errorModal", role: "dialog", }));
        $("#errorModal").append($("<div>").addClass("modal-dialog").attr({ id: "errDialog", role: "document" }));
        $("#errDialog").append($("<div>").addClass("modal-content").attr("id", "errModalContent"));
        $("#errModalContent").append($("<div>").addClass("modal-header").attr("id", "errModalheader"));
        $("#errModalheader").append($("<h5>").addClass("modal-title").attr("id", "errModalTitle").html("Error!"));
        $("#errModalContent").append($("<div>").addClass("modal-body").attr("id", "errModalBody").html(message))
        $("#errModalContent").append($("<div>").addClass("modal-footer").attr("id", "errModalFooter"));
        $("#errModalFooter").append($("<button>").addClass("btn btn-secondary").attr({ id: "closeButton", type: "button" }).attr("data-dismiss", "modal").html("close"))
        $("#errorModal").modal("show");
    }


});