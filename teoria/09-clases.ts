class Heroe {
    //visible solo dentro de esta clase
    private alterEgo: string;
    //fuera de la clase alguien puede ver la propiedad
    public edad:number;
    //se puede acceder al valor de la propiedad sin crear una instancia de la clase
    static nombreReal: string;
}

// const ironman = new Heroe();

// ------------------------------------------------------------------------------------------//

//[ CONSTRUCTOR DE UNA CLASE ]

class Heroe2 {
    

    constructor( 
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ){}
}

// ------------------------------------------------------------------------------------------- //

//[ EXTENDER UNA CLASE ]

class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string,
        
        ){}
    }
    
    class Heroe3 extends PersonaNormal{
        
        //super es llamar al constructor de la clase que se extiende
        constructor( 
            public alterEgo: string,
            public edad: number,
            public nombreReal: string
            ){
                super(nombreReal, 'NY, USA');
            }
        }
        
const ironman = new Heroe3('Ironman', 45, 'Tony');

console.log(ironman);