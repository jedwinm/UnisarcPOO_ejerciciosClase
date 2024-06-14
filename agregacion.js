// Definición de la clase Rueda
class Rueda {
    constructor(tipo, diametro) {
        this.tipo = tipo;
        this.diametro = diametro;
    }

    // Método para mostrar detalles de la rueda
    mostrarDetalles() {
        console.log(`Rueda tipo ${this.tipo}, Diámetro: ${this.diametro} pulgadas`);
    }
}

// Definición de la clase carro con agregación a Rueda
class carro {
    constructor(color, marca, modelo, numPuertas, ruedas) {
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.numPuertas = numPuertas;
        this.ruedas = ruedas; // Agregación con la clase Rueda
    }

    // Método para mostrar detalles del carro, incluyendo detalles de las ruedas
    mostrarDetalles() {
        console.log(`carro ${this.marca} ${this.modelo}, Color: ${this.color}, Número de puertas: ${this.numPuertas}`);
        console.log(`Detalles de las ruedas:`);
        this.ruedas.forEach((rueda, index) => {
            console.log(`Rueda ${index + 1}: ${rueda.tipo}, Diámetro: ${rueda.diametro} pulgadas`);
        });
    }
}

// Creación de instancias de Rueda
const ruedaDelanteraIzquierda = new Rueda("Verano", 18);
const ruedaDelanteraDerecha = new Rueda("Verano", 18);
const ruedaTraseraIzquierda = new Rueda("Invierno", 17);
const ruedaTraseraDerecha = new Rueda("Invierno", 17);

// Creación de una instancia de carro con agregación de ruedas
const micarro = new carro("Negro", "Toyota", "Corolla", 4, [ruedaDelanteraIzquierda, ruedaDelanteraDerecha, ruedaTraseraIzquierda, ruedaTraseraDerecha]);

// Uso del método para mostrar detalles del carro y sus ruedas
micarro.mostrarDetalles();
