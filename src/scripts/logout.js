const logoutB = document.getElementById("logoutB");
const serverUrl = "/api/logout/";
const options = {
    method: "POST"
}

logoutB.addEventListener("click", send);

async function send(e) {
    e.preventDefault();

var res = await fetch(serverUrl, options)
    
if (response.status == 200) {
      window.location.href = "./login.html";
    } else {
      alert(response.detail);
      console.log("idk");
    }
}