// [ REPASAR LOS TIPOS DE DECORADORES]

function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
    ) {
        return class extends constructor {
            newProperty = 'new property';
            hello = 'override';
        };
    }   

@classDecorator
class MiSuperClass {
public miPropiedad: string = 'ahsdhasd';
imprimir(){
    console.log('hola');
}
}

console.log(MiSuperClass);
