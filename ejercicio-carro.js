// Definición de la clase carro
class carro {
    // Constructor
    constructor(color, marca, modelo) {
        this._color = color;
        this._marca = marca;
        this._modelo = modelo;
    }

    // Métodos (comportamientos)
    arrancar() {
        console.log("El carro ha arrancado.");
    }

    frenar() {
        console.log("El carro ha frenado.");
    }

    // Métodos para acceder y modificar los atributos (encapsulamiento)
    getColor() {
        return this._color;
    }

    setColor(color) {
        this._color = color;
    }

    getMarca() {
        return this._marca;
    }

    setMarca(marca) {
        this._marca = marca;
    }

    getModelo() {
        return this._modelo;
    }

    setModelo(modelo) {
        this._modelo = modelo;
    }
}

// Uso de la clase carro para crear objetos
const main = () => {
    // Crear un objeto de la clase carro
    const micarro = new carro("Rojo", "Toyota", "Corolla");

    // Usar métodos del objeto
    micarro.arrancar();
    console.log("El color del carro es: " + micarro.getColor());

    // Cambiar el estado del objeto
    micarro.setColor("Azul");
    console.log("El nuevo color del carro es: " + micarro.getColor());

    micarro.frenar();
}

// Llamar a la función main
main();
