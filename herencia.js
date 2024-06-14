// Definición de la clase base Vehículo
class Vehiculo {
    constructor(color, marca, modelo) {
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
    }

    arrancar() {
        console.log("El vehículo ha arrancado.");
    }
}

// Definición de la clase derivada Coche que hereda de Vehículo
class Coche extends Vehiculo {
    constructor(color, marca, modelo, numPuertas) {
        super(color, marca, modelo); // Llama al constructor de la clase base Vehículo
        this.numPuertas = numPuertas;
    }

    // Método específico de Coche
    abrirPuertas() {
        console.log(`Se han abierto las ${this.numPuertas} puertas del coche.`);
    }
}

// Creación de objetos utilizando herencia
const miCoche = new Coche("Rojo", "Toyota", "Corolla", 4);
console.log(miCoche.color); // Acceso a atributos heredados de la clase base
miCoche.arrancar(); // Llamada a método heredado de la clase base
miCoche.abrirPuertas(); // Llamada a método específico de la subclase Coche
