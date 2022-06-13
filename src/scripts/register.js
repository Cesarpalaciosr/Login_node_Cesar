var registerForm = document.getElementById("data-forms");
var API_url = "http://localhost:3000/persona";


registerForm.addEventListener("submit", send);

async function send(e) {
  e.preventDefault();
  var data = {};
  var form = new FormData(registerForm);
  for (var pair of form.entries()) {
    data[pair[0]] = pair[1];
  }
  data.push( {  role:'1'})
//  var json = data.push({role:1})
  console.log(data);
  //console.log(json);

  var res = await fetch(API_url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    method: "POST", // or 'PUT'
    
    body:JSON.stringify(data),
  }).catch((error) => console.error("Error:", error));
  
  var response = await res.json();

  if (response.status == 200) {
	console.log(window.location)
    window.location = "http://localhost:3000/views/login.html";
  } else {
    console.log("No se pudo Registrar los datos");
  }
}
