// Definición de la clase carro con encapsulamiento
class carro {
    // Atributos privados
    #color;
    #marca;
    #modelo;
    #numPuertas;

    // Constructor para inicializar los atributos
    constructor(color, marca, modelo, numPuertas) {
        this.#color = color;
        this.#marca = marca;
        this.#modelo = modelo;
        this.#numPuertas = numPuertas;
    }

    // Método público para obtener el color del carro
    getColor() {
        return this.#color;
    }

    // Método público para obtener la marca del carro
    getMarca() {
        return this.#marca;
    }

    // Método público para obtener el modelo del carro
    getModelo() {
        return this.#modelo;
    }

    // Método público para obtener el número de puertas del carro
    getNumPuertas() {
        return this.#numPuertas;
    }

    // Método público para establecer el color del carro
    setColor(color) {
        this.#color = color;
    }

    // Método público para establecer la marca del carro
    setMarca(marca) {
        this.#marca = marca;
    }

    // Método público para establecer el modelo del carro
    setModelo(modelo) {
        this.#modelo = modelo;
    }

    // Método público para establecer el número de puertas del carro
    setNumPuertas(numPuertas) {
        this.#numPuertas = numPuertas;
    }

    // Método público para mostrar los detalles del carro
    mostrarDetalles() {
        console.log(`carro ${this.#marca} ${this.#modelo}, Color: ${this.#color}, Número de puertas: ${this.#numPuertas}`);
    }

    // Método público para arrancar el carro
    arrancar() {
        console.log(`El carro ${this.#marca} ${this.#modelo} ha arrancado.`);
    }

    // Método público para detener el carro
    detener() {
        console.log(`El carro ${this.#marca} ${this.#modelo} se ha detenido.`);
    }
}

// Creación de instancia de carro y uso de métodos públicos
const micarro = new carro("Rojo", "Toyota", "Corolla", 4);

// Uso de los métodos públicos para interactuar con el carro
micarro.mostrarDetalles(); // Salida: carro Toyota Corolla, Color: Rojo, Número de puertas: 4
micarro.arrancar(); // Salida: El carro Toyota Corolla ha arrancado.
micarro.detener(); // Salida: El carro Toyota Corolla se ha detenido.

// Modificar el color del carro usando el método setter
micarro.setColor("Azul");
micarro.mostrarDetalles(); // Salida: carro Toyota Corolla, Color: Azul, Número de puertas: 4
