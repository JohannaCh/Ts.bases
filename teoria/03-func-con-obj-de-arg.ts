//si no quiero retornar nada puedo especificar :void en el return

interface PersonajeLOR {
    nombre:string,
    hp:number,
    mostrarHp: () => void;
}

function curar(personaje:PersonajeLOR, curarX:number):void{
    personaje.hp += curarX;
}

const nuevoPersonaje: PersonajeLOR = {
    nombre:'Strider',
    hp: 50,
    mostrarHp(){
        //[this hace referencia a la propiedad de este mismo objeto]
        console.log('Puntos de vida:', this.hp);
    }
}

curar(nuevoPersonaje, 50);