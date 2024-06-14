// Definición de la clase Motor
class Motor {
    constructor(tipo, cilindrada) {
        this.tipo = tipo;
        this.cilindrada = cilindrada;
    }

    // Método para iniciar el motor
    iniciar() {
        console.log(`Motor ${this.tipo} (${this.cilindrada} cc) encendido.`);
    }

    // Método para detener el motor
    detener() {
        console.log(`Motor ${this.tipo} apagado.`);
    }
}

// Definición de la clase carro con asociación a Motor
class carro {
    constructor(color, marca, modelo, numPuertas, motor) {
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.numPuertas = numPuertas;
        this.motor = motor; // Asociación con la clase Motor
    }

    // Método para mostrar detalles del carro, incluyendo detalles del motor
    mostrarDetalles() {
        console.log(`carro ${this.marca} ${this.modelo}, Color: ${this.color}, Número de puertas: ${this.numPuertas}`);
        console.log(`Motor: ${this.motor.tipo} (${this.motor.cilindrada} cc)`);
    }

    // Método para arrancar el carro usando el motor asociado
    arrancar() {
        this.motor.iniciar();
        console.log(`El carro ${this.marca} ${this.modelo} ha arrancado.`);
    }

    // Método para detener el carro usando el motor asociado
    detener() {
        this.motor.detener();
        console.log(`El carro ${this.marca} ${this.modelo} se ha detenido.`);
    }
}

// Creación de una instancia de Motor
const motorcarro = new Motor("Gasolina", 2000);

// Creación de una instancia de carro asociando el motor creado
const micarro = new carro("Rojo", "Toyota", "Corolla", 4, motorcarro);

// Uso de los métodos para interactuar con el carro y su motor
micarro.mostrarDetalles(); // Salida: carro Toyota Corolla, Color: Rojo, Número de puertas: 4
                           //        Motor: Gasolina (2000 cc)
micarro.arrancar();        // Salida: Motor Gasolina (2000 cc) encendido.
                           //        El carro Toyota Corolla ha arrancado.
micarro.detener();         // Salida: Motor Gasolina apagado.
                           //        El carro Toyota Corolla se ha detenido.
