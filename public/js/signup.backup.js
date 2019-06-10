$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password) {
    $.post("/api/signup", {
      email: email,
      password: password
    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, handle it by throwing up a bootstrap alert
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }

  // main();

  // function main(){
  //   buildNavBar();
  //   $("body").append($("<div>").addClass("container").attr("id","main-container"));
  //   buildHtml();
  // }

  // function buildNavBar(){
  //   $("body").append($("<div>").addClass("contianer").attr("id","image-container"));
  //   $("#image-container").append($("<img>").addClass("").attr({"id":"baby-photo", src: "../../images/adorable-baby-beautiful-265987.jpg", alt:"baby photo"}));

  //   $("body").append($("<div>").addClass("p-3 mb-2 bg-info text-white").attr("id","nav-bar"));
  //   $("#nav-bar").append($("<h3>").html("Baby Today"));
  //   $("#nav-bar").append($("<button>").addClass("btn btn-light").attr("id","baby-menu"));
  //   $("#baby-menu").append($("<i>").addClass("fa fa-th-list").attr("style","font-size: 22px"));
  //   $("#nav-bar").append($("<button>").addClass("btn btn-secondary").attr("id","settings"));
  //   $("#settings").append($("<i>").addClass("fas fa-cog").attr("style","font-size: 22px"));
  //   $("#nav-bar").append($("<button>").addClass("btn btn-secondary").attr("id","logout"));
  //   $("#logout").append($("<i>").addClass("fas fa-sign-out-alt").attr("style","font-size: 22px"));
    
  // }

  // function buildHtml(){
  //   $("#main-container").append($("<div>").addClass("container").attr("id","signup-container"));
  //   $("#signup-container").append($("<div>").addClass("row").attr("id","form-body-row"));
  //   $("#form-body-row").append($("<div>").addClass("col-md-6 col-md-offset-3").attr("id","form-body-column"));
  //   $("#form-body-column").append($("<h2>").html("Sign Up Form"));
  //   $("#form-body-column").append($("<form>").addClass("signup").attr("id","signup-form"));
    
  //   $("#signup-form").append($("<div>").addClass("form-group").attr("id","signup-form-group-email"));
  //   $("#signup-form-group-email").append($("<label>").html("Email Address").attr({"id":"userInputEmailLabel", for: "input-email"}));
  //   $("#signup-form-group-email").append($("<input>").addClass("form-control").attr({"id":"email-input", type: "email", placeholder: "user@babyblogger.com"}));
    
  //   $("#signup-form").append($("<div>").addClass("form-group").attr("id","signup-form-group-password"));
  //   $("#signup-form-group-password").append($("<label>").addClass("Password").attr({"id":"userInputPasswordLabel", for: "input-password"}));
  //   $("#signup-form-group-password").append($("<input>").addClass("form-control").attr({"id":"password-input", type: "password", placeholder: "Password"}));
    
  //   $("#signup-form").append($("<div>").addClass("alert alert-danger").attr({"id":"alert", role: "alert", style: "display: none"}));
  //   $("#alert").append($("<span>").addClass("glyphicon glyphicon-exclamation-sign").attr("aria-hidden","true"));
  //   $("#alert").append($("<span>").addClass("sr-only").attr("id","error-span"));
  //   $("#alert").append($("<span>").addClass("msg"));

  //   $("#signup-form").append($("<button>").addClass("btn btn-success btn-lg btn-block").attr({"id":"signup-button", type: "submit"}));

  //   $("#form-body-column").append($("<p>").html("Or Sign-In here").attr({"id":"sign-in-link", href:"/login"}));

  // }

});
