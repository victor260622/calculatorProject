import generarPresupuesto from "./generarPresupuesto.js" 
    /***** CREAMOS UNA FUNCION QUE NOS CALCULE EL PRECIO CON LA DATA OBTENIDA *****/
const calcularEnvio = (mes, peso, altura, ancho, envioSelected) => {
        if(!envioSelected){
            alert("Selecciona una opcion de envio en los botones de colores")
            return
        }
        let formaDeEnvio = [
            { id:1, tipe: "Ship", cost: 300 },
            { id:2, tipe: "Aircraft", cost: 500 },
            { id:3, tipe: "Ground Shipping", cost: 100 },
        ];
        /***** CREAMOS UNA FUNCION QUE NOS RECORRA EL ARRAY Y NOS COMPARE LA DATA SELECCIONADA Y LOS OBJETOS *****/

        function selectShippment (array, selected){
            for (let i = 0; i < array.length; i++){
                if(array[i].id == selected){
                    return array[i].cost
                }
            }
        }
        
        /***** CALCULAMOS CON UNA FUNCION EL COSTO DE DESCUENTO APLICABLE *****/
        function calcularEnvioMes(descuento, costo){
            let costoDescuento = (1 - descuento)*costo
            return costoDescuento
        }
        
        /***** LO GUARDAMOS TODO EN VARIABLES *****/
        let formaEnvio = selectShippment(formaDeEnvio, envioSelected);
        let costoEnvio = (peso + altura + ancho + formaEnvio)* 6      
        
        let costoMes;
        let descuento;

        /***** USAMOS UN SWITCH PARA VERIFICAR LOS DIFERENTES CASOS Y APLICAR UN DESCUENTO POR CADA MES *****/
        switch (mes) {
            case 1:
                descuento = 0.4
                costoMes = calcularEnvioMes(descuento, costoEnvio)
                break;
            case 2:
                descuento = 0.3
                costoMes = calcularEnvioMes(descuento,costoEnvio)
                break;
            case 3:
                descuento = 0.2
                costoMes = calcularEnvioMes(descuento,costoEnvio)
                break;
            case 4:
                descuento = 0.1
                costoMes = calcularEnvioMes(descuento,costoEnvio)
                break;
            case 5:
                descuento = 0.1
                costoMes = calcularEnvioMes(descuento,costoEnvio)
                break;
            case 6:
                descuento = 0.2
                costoMes = calcularEnvioMes(descuento,costoEnvio)
                break;
            case 7:
                descuento = 0.2
                costoMes = calcularEnvioMes(descuento,costoEnvio)
                break;
            case 8:
                descuento = 0.3
                costoMes = calcularEnvioMes(descuento,costoEnvio)
                break;
            case 9:
                descuento = 0.1
                costoMes = calcularEnvioMes(descuento,costoEnvio)
                break;
            case 10:
                descuento = 0.1
                costoMes = calcularEnvioMes(descuento,costoEnvio)
                break;
            case 11:
                descuento = 0.8
                costoMes = calcularEnvioMes(descuento,costoEnvio)
                break;
            case 12:
                descuento = 0.1                
                costoMes = calcularEnvioMes(descuento,costoEnvio)
                
                break;
            default:
                break
        }
        /***** USAMOS LA FUNCION IMPORTADA PARA MOSTRAR EL COSTE FINAL Y LO PLASMAMOS EN EL HTML *****/
        generarPresupuesto(costoMes, descuento);
        

    }

export default calcularEnvio;
