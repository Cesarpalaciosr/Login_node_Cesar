var registerForm = document.getElementById("data-forms");

registerForm.addEventListener("submit", send);

async function send(e) {
  e.preventDefault();
  var data = {};
  var form = new FormData(registerForm);
  for (var pair of form.entries()) {
    data[pair[0]] = pair[1];
  }
  console.log(data);
  json = JSON.stringify(data);

  var res = await fetch("/api/login", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST", // or 'PUT'
    // credentials: 'include',
    body: json,
  }).catch((error) => console.error("Error:", error));

  var response = await res.json();

  if (response.status == 200) {
    window.location.href = "./feed.html";
  } else {
    alert(response.detail);
    console.log("No se pudo loggear");
  }
}