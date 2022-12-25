const generarPresupuesto = (costoMes, descuento) => {
    /***** OBTENEMOS LA INFORMACION NECESARIA DEL SSESSION STORAGE *****/
    let nombre = sessionStorage.getItem('Nombre')
    let apellido = sessionStorage.getItem('Apellido')
    let correo = sessionStorage.getItem('Correo')
    let direccion = sessionStorage.getItem('Direccion')

    /***** VALIDAMOS QUE TODO EXISTA *****/
    if(!nombre || !apellido || !correo || !direccion || !costoMes || !descuento){
        alert("Alguno de los campos estan vacios o son invalidos.")
        return
    }
    /***** PLASMAMOS EN EL HTML LA INFORMACION OBTENIDA EN CONJUTO AL COSTE FINAL *****/
    document.querySelector("#Costo").innerHTML = `
            <h2>Te enviaremos un presupuesto a tu correo con los siguientes datos</h2>
            <p>Nombre: ${nombre}</p>
            <p>Apellido: ${apellido}</p>

            <p>Correo: ${correo}</p>
            <p>Direccion: ${direccion}</p>

            El precio para tu envio es de: ${costoMes} $  con el ${descuento * 100}% de descuento
        `

}
export default generarPresupuesto