var form = document.forms["form"];
var fullName = document.getElementById("fullName");
var email = document.getElementById("email");
var password =  document.getElementById("password");
var confirmPassword = document.getElementById("confirmPassword");
	
var errors = [];

function checkForm() {
   // TODO: Perform input validation 

	errors = [];
	formErrors.style.display = "none";

	if (fullName.value.length < 1) {
		errors.push("Missing full name.");
		fullName.style.border = "2px red solid";
	} else {
		fullName.style.border = "1px solid #aaa"
	}

	if(email.value.length < 1 || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/.test(email.value)) {
		errors.push("Invalid or missing email address.");
               email.style.border = "2px red solid";
        } else {
               email.style.border = "1px solid #aaa"
        }

	if (password.value < 10 || password.value > 20) {
		errors.push("Password must be between 10 and 20 characters.");
		password.style.border = "2px red solid";
		confirmPassword.style.border = "2px red solid";
	} else {
		password.style.border = "1px solid #aaa";
	}

	if (!/[a-z]+/.test(password.value)){
		errors.push("Password must contain at least one lowercase character.");
		password.style.border = "2px red solid";
		confirmPassword.style.border = "2px red solid";
	} else {
		password.style.border = "1px solid #aaa";
	}


	if (!/[A-Z]+/.test(password.value)){
		errors.push("Password must contain at least one uppercase character.");
		password.style.border = "2px red solid";
		confirmPassword.style.border = "2px red solid";
	} else {
		password.style.border = "1px solid #aaa";
	}


	if (!/\d+/.test(password.value)){
		errors.push("Password must contain at least one digit.");
		password.style.border = "2px red solid";
		confirmPassword.style.border = "2px red solid";
	} else {
		password.style.border = "1px solid #aaa";
	}

	if (password.value != confirmPassword.value){
		errors.push("Password and confirmation password don't match.");
		confirmPassword.style.border = "2px red solid";
	} else {
		confirmPassword.style.border = "1px solid #aaa";
	}

	if (errors.length > 0) {
		showErrors();
	}

}	

function showErrors() {
	formErrors.innerHTML = "";
	var formString = `<ul>`
	for (error of errors) {
		
		formString += `<li>${error}</li>` 
	}
	formString += `</ul>`;
	formErrors.innerHTML = formString;
	formErrors.style.display = "block";

}

document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();

});
