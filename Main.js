const main = document.getElementById("main");
const cvImage = document.getElementById("cvImage");
const personName = document.getElementById("personName");
const nombre = document.getElementById("nombre");
const direccion = document.getElementById("direccion");
const numero = document.getElementById("numero");
const correo = document.getElementById("correo");
const nacimiento = document.getElementById("nacimiento");
const genero = document.getElementById("genero");
const nacionalidad = document.getElementById("nacionalidad");
const toggleBtn = document.getElementById("toggleBtn");
const card = document.getElementById("card");

async function getData() {
  const request = await fetch("https://randomuser.me/api/?results=1");
  const response = await request.json();
  cvImage.src = response.results[0].picture.large;
  const name =
    response.results[0].name.first + " " + response.results[0].name.last;
  personName.innerHTML = name;
  nombre.innerHTML = name;
  direccion.innerHTML = response.results[0].location.street.name +" " + response.results[0].location.street.number;
  numero.innerHTML = response.results[0].phone;
  correo.innerHTML = response.results[0].email;
  nacimiento.innerHTML = response.results[0].dob.date;
  genero.innerHTML = response.results[0].gender;
  nacionalidad.innerHTML = response.results[0].nat;
}

window.addEventListener("DOMContentLoaded", getData());

toggleBtn.addEventListener("click", function () {
  card.classList.toggle("show-card");
});
