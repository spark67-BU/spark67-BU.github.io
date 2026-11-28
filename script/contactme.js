//I am pulling all of the relevant html items that  we plan  to take data from or modify

const form =  document.getElementById('TTInsuranceSignUpForm');

const firstName = document.getElementById('FirstName');
const lastName = document.getElementById('LastName');
const emailInput = document.getElementById('EmailInput');
const submitButton = document.getElementById('submitForm');
const submissionMessage = document.getElementById('message');

const erorMessageFirstName = document.getElementById('erorMessageFirstName');
const erorMessageLastName = document.getElementById('erorMessageLastName');
const erorMessageEmailInput = document.getElementById('erorMessageEmailInput');

const funny = document.getElementById('funny');
const imageOfFunny = document.getElementById('imageofFunny');

//Email regex
const regexEmail = /^[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.][a-zA-Z0-9]+$/;

//regex for name 
const regexName = /^[a-zA-Z]{2,}$/;

//firstName and lastName text input listeners to do real time name validation
firstName.addEventListener("input", () => {
    nameValidation(firstName.value, "firstname");

});
lastName.addEventListener("input", () => {
    nameValidation(lastName.value, "lastname");
});

//emailInput  with email regex
emailInput.addEventListener("input",() => {
    emailValidation(emailInput.value);
} );



//I found out through internet searching that we can do multiple event listeners. makes things a lot easier.
firstName.addEventListener("input",enableSubmitButton);
lastName.addEventListener("input",enableSubmitButton);
emailInput.addEventListener("input",enableSubmitButton);


//Something funny.

//Summary of user input.
submitButton.addEventListener("click",() =>{
    submissionMessage.innerHTML = "Thank you, " + firstName.value.trim() + " " + lastName.value.trim() + " for registering for a Trauma Team Health Package " + packageSelection.value.trim() + ". " 
    + "Your email " + emailInput.value.trim() + " is registered and will be used as a sign in id on our subscriber portal.";
    form.hidden = true;
    submissionMessage.hidden = false;
}); 





//both firstName and lastName have same exact name requirements, so they share nameValidation
function nameValidation(nameString, field) {
    const name = nameString.trim();
    if(!regexName.test(name)) {
        if(field === "firstname") {
            erorMessageFirstName.innerHTML = "Please enter a valid first name. Must have 2 or more characters."
        }
        else if(field === "lastname") {
            erorMessageLastName.innerHTML = "Please enter a valid last name. Must have 2 or more characters."

        }
    } else {
        //if name becomes valid again, remove error message
        if(field === "firstname") {
            erorMessageFirstName.innerHTML = ""
        }
        else if(field === "lastname") {
            erorMessageLastName.innerHTML = ""

        }
    }
}

function emailValidation(emailString) {
    const email = emailString.trim();

    if( !regexEmail.test(email)) {

        erorMessageEmailInput.innerHTML = "Please enter a valid email address."
    } else {
        erorMessageEmailInput.innerHTML = "";
    }

}




//checks if all required fields are filled out properly, then allows for submission.
function enableSubmitButton() {
        const enableSubmission = regexName.test(firstName.value.trim()) && regexName.test(lastName.value.trim()) && regexEmail.test(emailInput.value.trim()) ;

        submitButton.disabled = !enableSubmission;
}

