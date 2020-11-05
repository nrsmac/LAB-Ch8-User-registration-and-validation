var form = document.getElementsByTagName("form")[0];
form.getElementsByTagName("input").pop(); //remove submit button
var formElements = form.getElementsByTagName("input");

function checkForm() {
   // TODO: Perform input validation 
   alert("hello")
   for (elem of formElements) {
       console.log(elem);
       alert(elem.id);
   }

}

document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});