const logout = document.getElementById("logout");
const serverUrl = "/api/logout/";
const options = {
    method: "GET"
}

logout.addEventListener("click", send);

async function send(e) {
    e.preventDefault();
/*
await fetch(serverUrl, options)
.then(respuesta => respuesta.json() )
.then(respuesta => console.log(respuesta.name))
.catch((error) => {
    console.error("Error:", error);
    alert(error.detail);
  });
  */

  const response = await  fetch(serverUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  })
  if (response.status === 200) {
    window.location.href = "./login.html";
  } else {
    alert(response.detail);
    console.log("No se pudo desloggear");
  }
  console.log(response);
}