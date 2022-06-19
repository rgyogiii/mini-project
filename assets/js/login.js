userSignIn = (e) =>{
  const validUsername = 'admin@mayari.com';
  const validPassword = 'admin123';
  e.preventDefault();
  const email = document.getElementsByName('emailInput')[0];
  const password = document.getElementsByName('passwordInput')[0];
  
  if ((email.value == validUsername) && (password.value == validPassword)) {
    alert('You Succesfully Login');
    window.location.href = "index.html";
  } else {
    errorMsgId.style.display = "block";
      }
  }
  





