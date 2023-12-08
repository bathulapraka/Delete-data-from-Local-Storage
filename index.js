var userform =document.getElementById('userform')
var display=document.getElementById('display')

//add even listener to clickig function
userform.addEventListener('submit',function(event){
    //event.preventDefault();


    //grabing the user details
    var username=document.getElementById('username').value;
    console.log(username);
    var email=document.getElementById('email').value;
    console.log(email);
    var phonenumber=document.getElementById('phonenumber').value;
     console.log(phonenumber);
});