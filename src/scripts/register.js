var registerForm = document.getElementById("data-forms");
var inputUsername = document.getElementById("input-username");
var inputPassword = document.getElementById("input-password");

registerForm.addEventListener("submit", send);

async function send(e) {
  e.preventDefault();

  const data = {
    username: inputUsername.value,
    password: inputPassword.value,
  };

  var res = await fetch("/api/register", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST", // or 'PUT'

    body: JSON.stringify(data),
  }).catch((error) => {
    console.error("Error:", error);
    alert(error.detail);
  });

  const response = await res.json();

  if (response.status === 200) {
    window.location.href = "./views/login.html";
  } else {
    alert(response.detail);
    console.log("No se pudo Registrar los datos");
  }
}