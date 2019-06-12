$(document).ready(function () {

    $(document).on("submit", ".addBabyBtn", validateBaby);
    $(".addBabyBtn").on("click",validateBaby);
    var babyName = $("#babyName");

function validateBaby(event){
    console.log('attempting to validate');
    event.preventDefault();

   
    if (!babyName.val().trim().trim()) {
        alert("A baby must have a name");
        return;
      }
}














});