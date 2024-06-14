// Definición de la clase Vehiculo (superclase)
class Vehiculo {
    constructor(color, marca, modelo) {
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
    }

    // Método genérico para arrancar
    arrancar() {
        console.log(`El vehículo ${this.marca} ${this.modelo} ha arrancado.`);
    }

    // Método genérico para detener
    detener() {
        console.log(`El vehículo ${this.marca} ${this.modelo} se ha detenido.`);
    }
}

// Definición de la clase carro (subclase de Vehiculo)
class carro extends Vehiculo {
    constructor(color, marca, modelo, numPuertas) {
        super(color, marca, modelo); // Llama al constructor de la superclase Vehiculo
        this.numPuertas = numPuertas;
    }

    // Método específico para carro que muestra los detalles incluyendo el número de puertas
    detalles() {
        console.log(`carro ${this.marca} ${this.modelo}, Color: ${this.color}, Número de puertas: ${this.numPuertas}`);
    }

    // Sobrescritura del método arrancar para un mensaje específico de carro
    arrancar() {
        console.log(`El carro ${this.marca} ${this.modelo} ha arrancado con ${this.numPuertas} puertas.`);
    }
}

// Función principal para probar el polimorfismo
const main = () => {
    // Crear instancias de diferentes tipos de vehículos
    const vehiculoGenerico = new Vehiculo("Blanco", "Genérico", "Genérico");
    const micarro = new carro("Rojo", "Toyota", "Corolla", 4);

    // Llamar al método arrancar() de Vehiculo
    vehiculoGenerico.arrancar(); // Salida: El vehículo Genérico Genérico ha arrancado.

    // Llamar al método arrancar() de carro (sobreescrito)
    micarro.arrancar(); // Salida: El carro Toyota Corolla ha arrancado con 4 puertas.
}

// Llamar a la función principal para ejecutar el código
main();

