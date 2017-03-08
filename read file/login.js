//login form
//var attempt = 5; // Variable to count number of attempts.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
  
var file = "email.txt";
var uMatch = false;
var pMatch = false;
  
document.getElementById('file').onchange = function(){

  var file = this.files[0];

  var reader = new FileReader();
  reader.onload = function(progressEvent){
    var lines = this.result.split('\n');
    for(var line = 0; line < lines.length; line++){
      if (username === lines[line]){
        uMatch = true;
        if (password === lines[line+1]){
          pMatch = true;
        }
      }
    }
  };
  reader.readAsText(file);
};
  
if ( uMatch === true && pMatch === true){
alert ("Login successfully");
window.location = "page.html"; // Redirecting to other page.
return false;
}
else{
attempt --; // Decrementing by one.
alert("You have "+attempt+" login attempt(s) left.");
// Disabling fields after 5 attempts.
if( attempt === 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
