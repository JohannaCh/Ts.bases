export interface Producto {
    desc: string,
    precio: number,
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}


const tableta: Producto = {
    desc: 'ipad Air',
    precio: 200
}

export function calculaISV( productos: Producto[]){
    let total = 0;

    //desestructuro el argumento
    productos.forEach(({precio}) =>{
        total += precio;
    })

    return total * 0.15;
}

const articulos = [telefono, tableta];

const isv:number = calculaISV(articulos);
console.log(isv);
