document.getElementById('loginForm').addEventListener('submit',function(event){
  event.preventDefault();

  const emailinput=document.getElementById('email').value;
  const passwordinput=document.getElementById('password').value;

  const VALID_EMAIL="admin@gmail.com";
  const VALID_PASSWORD="Admin@123";

  if(emailinput===VALID_EMAIL && passwordinput===VALID_PASSWORD){
    alert("Login Successful");
    window.location.href='admin.html';
  }else{
    alert("Invalid email or password");
  }
});