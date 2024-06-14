class Carro {
    // El constructor es un método especial que se llama cuando se crea una nueva instancia de la clase
    constructor(marca, modelo) {
        this.marca = marca; // Propiedad marca
        this.modelo = modelo; // Propiedad modelo
        this.velocidadActual = 0; // Propiedad velocidadActual
    }

    // Método para arrancar el carro
    arrancar() {
        console.log(`${this.marca} ${this.modelo} ha arrancado.`);
    }

    // Método para detener el carro
    detener() {
        this.velocidadActual = 0;
        console.log(`${this.marca} ${this.modelo} se ha detenido.`);
    }

    // Método para acelerar el carro
    acelerar(velocidad) {
        this.velocidadActual += velocidad;
        console.log(`${this.marca} ${this.modelo} ha acelerado a ${this.velocidadActual} km/h.`);
    }

    // Método para frenar el carro
    frenar(velocidad) {
        this.velocidadActual -= velocidad;
        if (this.velocidadActual < 0) this.velocidadActual = 0;
        console.log(`${this.marca} ${this.modelo} ha frenado a ${this.velocidadActual} km/h.`);
    }
}

// Crear una instancia de la clase Carro
let miCarro = new Carro('Toyota', 'Corolla');

// Usar los métodos de la clase Carro
miCarro.arrancar(); // Salida: Toyota Corolla ha arrancado.
miCarro.acelerar(50); // Salida: Toyota Corolla ha acelerado a 50 km/h.
miCarro.frenar(20); // Salida: Toyota Corolla ha frenado a 30 km/h.
miCarro.detener(); // Salida: Toyota Corolla se ha detenido.