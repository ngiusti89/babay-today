$(document).ready(function () {

    $(document).on('click', '.addBabyBtn', function(){
        event.preventDefault();
        var babyName = $('#babyName').val().trim();
        console.log("TCL: babyName", babyName)
        var babyGender = $('.babyGender').val();
        console.log("TCL: babyGender", babyGender)
        var babyBirthday = $('#babyBday').val().trim();
        console.log("TCL: babybirthday", babyBirthday)
        $.post('/api/addbaby', {
            babyName : babyName,
            babyBirthday : babyBirthday
        }).then(function(data){
            console.log(data);
            window.location.href = "/babypicker";
        })
        
    });

    // $(document).on("submit", ".addBabyBtn", validateBaby);
    // $(".addBabyBtn").on("click",validateBaby);
    // var babyGender = $('.babyGender option:selected').text();

    
    // console.log("TCL: babyGender", babyGender)
    
    // var babyName = $("#babyName");


function validateBaby(event){
    console.log('attempting to validate');
    event.preventDefault();

   
    if (!babyName.val().trim().trim()) {
        alert("A baby must have a name");
        return;
      }
}














});