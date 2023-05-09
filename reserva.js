const newReser = document.getElementsByClassName("newreserv")
const smoky = document.getElementsByClassName("smoky")
const smoky2 = document.getElementsByClassName("smoky2")
const form  = document.getElementById("form")
const form1  = document.getElementById("form1")
const spanMesa = document.getElementsByClassName("span_mesa")
const spanArea = document.getElementsByClassName("span_area")


function newReserv() {

  if(document.getElementById("mesa1").checked){
    alert("Mesa 1 esta selecionada")
  }
  if(document.getElementById("mesa2").checked){
    alert("Mesa 2 esta selecionada")
  }
  if(document.getElementById("mesa3").checked){
    alert("Mesa 3 esta selecionada")
  }
  if(document.getElementById("mesa4").checked){
    alert("Mesa 4 esta selecionada")
  }
  console.log(newReserv)
}

form.addEventListener("click",newReserv, (e) =>{
  e.preventDefault();
  newReserv();
 
})

function newReserv1() {

  if(document.getElementById("requerido").checked){
    alert("Area de fumadores selecionada")
  }
  if(document.getElementById("requerido2").checked){
    alert("Area de no fumadores selecionada")
  }
  console.log(newReserv1)
}

form1.addEventListener("click", newReserv1, (e) =>{
  e.preventDefault();
  newReserv1()
})
