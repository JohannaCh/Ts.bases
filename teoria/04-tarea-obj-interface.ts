interface direccion{
    calle:string,
    pais:string,
    ciudad:string
}

interface superHeroe {
    nombre: string,
    edad: number,
    direccion: direccion,
    mostrarDireccion: ()=>string;
}

const superHeroe = {
    nombre:'Spiderman',
    edad: 30,
    direccion:{
        calle:'Main St',
        pais:'USA',
        ciudad:'NY'
    },
    mostrarDireccion(){
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();

console.log(direccion);