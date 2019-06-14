$(document).ready(function () {

    $(document).on('click', '.addBabyBtn', function(){
        event.preventDefault();
        var babyName = $('#babyName').val().trim();
        var babyGender = $('.babyGender').val();
        var babyBirthday = $('#babyBday').val().trim();
        $.post('/api/addbaby', {
            babyName : babyName,
            babyGender: babyGender,
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