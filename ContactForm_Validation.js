function checkReset(){
  document.getElementById("contactForm").reset();
  document.getElementById("myname").focus();
  fresh();


}

function validateForm(){
   fresh();

   var fullname=document.forms["contactForm"]["name"].value.trim();
   var email=document.forms["contactForm"]["email"].value.trim();
   var message=document.forms["contactForm"]["message"].value.trim();
   var subject=document.forms["contactForm"]["subject"].value.trim();
   var emailPattern = /\S+@\S+\.\S+/;
   var isValid;
   var testRes=emailPattern.test(email);
   var arrInfo = [fullname,email,testRes,subject,message];

   for(var i=0;i<arrInfo.length;i++){
    if(arrInfo[i] == ""){
        isValid = false;
        break;
    }else if(arrInfo[i] == false){
        isValid = false;
        break;
    }else{
        isValid = true;
    }
   }

   if(arrInfo[0] == ""){
       document.getElementById("nameError").innerHTML = "Name must not be blank";
    }
   if(arrInfo[1] == ""){
       document.getElementById('emailError').innerHTML = "Email must not be blank";
   }else if(arrInfo[2] == false){
       document.getElementById('emailFormatError').innerHTML = "Pls enter the valid email";
   }
   if(arrInfo[3] == ""){
       document.getElementById('subjectError').innerHTML = "Subject must not be blank";
   }
   if(arrInfo[4] == ""){
       document.getElementById('messageError').innerHTML = "Message must not be blank";
   }
   return isValid;
}

function fresh(){
  document.getElementById("nameError").innerHTML = "";
  document.getElementById('emailError').innerHTML = "";
  document.getElementById('emailFormatError').innerHTML = "";
  document.getElementById('subjectError').innerHTML = "";
  document.getElementById('messageError').innerHTML= "";
}
