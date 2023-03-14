interface Detalles {
    autor: string;
    anio: number;
}

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion:string;
    detalles: Detalles
}

const reproductor: Reproductor = {
    volumen:30,
    segundo:20,
    cancion: 'Mess',
    detalles:{
        autor:'Ed Sheerar',
        anio:2019
     }
}

const {volumen, segundo, cancion, detalles} = reproductor;
const {autor} = detalles;
