//funciones

//asignamos el tipo para evitar que sea 'any' || tambien podemos asignarle un tipo al return o ts lo hace automatico
function sumar(a: number, b:number): number {
    return a +b
}

//arrow function 
const sumarFlecha = (a: number, b:number):number =>{
    return a+b 
}


//los parametros deben respetar un orden
//[primero van los valores obligatorios || segundos los opcionales || tercero los que tienen un valor default asignado]
function multiplicar( numero:number, otroNumero?:number, base:number = 2 ):number {
    return numero * base;
}

//si quisiera modificar el valor default en este caso SI o SI deberia enviar el valor opcional 
// *[ CONST RESULTADO = MULTIPLICAR(5, 0, 10)]*