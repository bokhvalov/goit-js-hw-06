const form = document.querySelector(".login-form");

const message = "Please, fill the login form!";



form.addEventListener("submit", (event) => {
    let loginData = {};
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value !== "" && password.value !== "") {
    loginData = {
      email : email.value,
      password: password.value,
    };
    console.log(loginData);
    form.reset();
  } else {
    alert(message);
  }

});
