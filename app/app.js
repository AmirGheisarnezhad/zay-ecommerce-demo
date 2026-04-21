const form = document.getElementById("form");
const msg = document.getElementById("msg");
const fields = form ? form.querySelectorAll("input, textarea") : [];


function controlla() {
  for (let field of fields) {
    if (field.value.trim() === "") {
      msg.style.display = "block";
      msg.innerHTML = "Riempi tutti i campi";
      return;
    }

    if (field.name === "eMail") {
      let email = field.value.trim();
      let validateEmail = String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        );

      if (!validateEmail) {
        msg.style.display = "block";
        msg.innerHTML = "Formato email non corretto";
        return;
      }
    }
  }

  msg.style.display = "block";
  msg.innerHTML = "Form inviato correttamente";
  form.style.display = "none";
}

const users = {
  user: "admin@gmail.com",
  pass: "1234",
};


function login() {
  const emailField = document.getElementById("username");
  const passField = document.getElementById("pass");

  const email = emailField.value.trim();
  const password = passField.value.trim();

  if (email === "" || password === "") {
    msg.style.display = "block";
    msg.innerHTML = "Riempi tutti i campi";
    return;
  }

  let validateEmail = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );

  if (!validateEmail) {
    msg.style.display = "block";
    msg.innerHTML = "Formato email non corretto";
    return;
  }

  if (email === users.user && password === users.pass) {
    msg.style.display = "block";
    msg.innerHTML = "Benvenuto";
    form.style.display = "none";
  } else {
    msg.style.display = "block";
    msg.innerHTML = "Credenziali non valide";
  }
}
