// arrays
//[defino el tipo de dato que contiene mi array (puede contener varios)]
let habilidades: (string | boolean)[] = ['bash', ];


//interface: como luce un objeto
interface Personaje{
    nombre:string;
    hp:number;
    habilidades:string[];

    //con ? defino si una propiedad es opcional
    puebloNatal?: string
}

//objeto
const personaje: Personaje = {
    nombre: 'Strider',
    hp: 10,
    habilidades: ['Bash', 'Counter', 'Healing'],
}