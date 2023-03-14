
//con <T> le indico que es de tipo generico
function queTipoSoy<T>(argumento: T){
    return argumento
}

let soyString = queTipoSoy('hola');

//asi le indico que quiero un tipo de dato especifico
let soyExplicito =  queTipoSoy<number>(100);