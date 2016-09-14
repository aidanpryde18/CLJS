//Problem: hints are shown even when form is valid
//Solution: hide and show them at appropriate times
var $password = $("#password");
var $confirm = $("#confirm_password");

function isPasswordValid() {
    return $password.val().length > 8;
}

function arePasswordsMatching() {
    $password.val() === $confirm.val();
}

function canSubmit() {
    return isPasswordValid() && arePasswordsMatching();
}
function passwordEvent() {
    //Find out if password is valid
    if (isPasswordValid()) {
        //Hide hint if valid
        $password.next().hide();
        //Else show hint
    } else {
        $password.next().show();
    }
}

function confirmPasswordEvent() {
    //Find out if password and confirmation match
    if (arePasswordsMatching()) {
        //Hide hint if match
        $confirm.next().hide();
        //Else show hint
    } else {
        $confirm.next().show();
    }
}

function enableSubmitEvent() {
    $("#submit").prop("disabled", !canSubmit())
}
//Hide hints
$("form span").hide();
//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent());

//When event happens on confirmation input
$confirm.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent());

enableSubmitEvent();