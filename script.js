//alert("Hola este es mi Javascript");
//let nombre = "javier";
//console.log(nombre);

//condicionales

let contenidotitulo=  "nombre";
let titulo= document.querySelector(".logo .fuente" );
titulo.innerHTML= contenidotitulo;

let textotitulo= titulo.innertext;
console.log(textotitulo);

/*if (textotitulo== "nombre")
{titulo.innerHTML= "otro"

}*/

<script src="script.js">
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});


</script> 