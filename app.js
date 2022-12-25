
import calcularEnvio from "./js/calcularEnvio.js";


/***** CREAMOS UN FORMULARIO *****/
let formulario = document.createElement("form");
formulario.innerHTML = `        
    <div id="informacion">
        <input type="text" name="" id="nombre" placeholder="Nombre">
        <input type="text" name="" id="apellido" placeholder="Apellido">
    </div>
    <div id="direcciones">
        <input type="email" placeholder="Correo" id="correo">
        <input type="text" placeholder="Direccion" id="direccion" >
    </div>
    <div>
        <input type="number" name="" id="peso" placeholder="Peso" min="0" >
        <input type="number" name="" id="altura" placeholder="Altura" min="0" >
        <input type="number" name="" id="ancho" placeholder="Ancho" min="0" >
    </div>
    <button  id="calcular"> Calcular </button>
    <p id="Costo" style="font-weight: 700; font-size: 24px;"></p>

`;
document.body.appendChild(formulario);



const $form = document.querySelector("form")
$form.addEventListener('submit', calculate);

/***** CREAMOS Y AGREGAMOS LA LOGICA PARA LOS BOTONES DE TIPOS DE ENVIO
 * 
 *  NOTA: SE DEBE AGREGAR LA FUNCIONABILIDAD PARA QUE EL BOTON QUE ESTE ACTIVO SEA EL UNICO CON LA CLASE "ACTIVE"
 * 
 * 
 *  *****/

let elementos = document.querySelectorAll(".tipos")
let envio;

elementos.forEach(item => {
    let id = item.id;
    item.addEventListener('click', () => {      
        if(id >= 1 <= 3){
            item.classList.add('active')
            envio = id
        }
    })
    
})

/***** EVITAMOS QUE EL BOTON DEL FORMULARIO LANCE SU EVENTO PRE DEFINIDO Y GREGAMOS NUESTRO PROPIO EVENTO  *****/
function calculate (event){
    event.preventDefault();


    /***** OBTENEMOS LA INFORMACION NECESARIA DE LOS INPUTS *****/
    const d = new Date();
    let month = d.getMonth() + 1;
    let pesoDelPaquete = document.getElementById("peso").value;
    let alturaDelPaquete = document.getElementById("altura").value;
    let anchoDelPaquete = document.getElementById("ancho").value;  
    let envioSeleccionado = envio;

    
    /***** OBTENEMOS LA INFORMACION DE LOS INPUTS Y LO GUARDAMOS EN LE SESSIONSTORAGE *****/
    sessionStorage.setItem('Nombre', document.getElementById("nombre").value)
    sessionStorage.setItem('Apellido', document.getElementById("apellido").value)
    sessionStorage.setItem('Correo', document.getElementById("correo").value)
    sessionStorage.setItem('Direccion', document.getElementById("direccion").value)

    /***** PASAMOS LA INFORMACION NECESARIA A TIPO NUMERO Y EJECUTAMOS LA FUNCION IMPORTADA *****/
    try{
        envioSeleccionado= parseFloat(envioSeleccionado, 10)
        pesoDelPaquete = parseFloat(pesoDelPaquete, 10)
        alturaDelPaquete = parseFloat(alturaDelPaquete, 10)
        anchoDelPaquete = parseFloat(anchoDelPaquete, 10)
        calcularEnvio(month, pesoDelPaquete, alturaDelPaquete, anchoDelPaquete, envioSeleccionado);

    } catch(e){
        console.log(error)
    }
 

    
}
