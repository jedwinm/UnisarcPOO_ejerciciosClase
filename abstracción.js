// Definición de la clase FiguraGeometrica como clase abstracta
class FiguraGeometrica {
    constructor(color) {
        this.color = color;
    }

    // Método abstracto que debe ser implementado por las subclases
    calcularArea() {
        throw new Error("Método abstracto 'calcularArea' debe ser implementado");
    }
}

// Subclase Rectangulo que extiende de FiguraGeometrica
class Rectangulo extends FiguraGeometrica {
    constructor(color, base, altura) {
        super(color);
        this.base = base;
        this.altura = altura;
    }

    // Implementación del método calcularArea para Rectangulo
    calcularArea() {
        return this.base * this.altura;
    }
}

// Subclase Circulo que extiende de FiguraGeometrica
class Circulo extends FiguraGeometrica {
    constructor(color, radio) {
        super(color);
        this.radio = radio;
    }

    // Implementación del método calcularArea para Circulo
    calcularArea() {
        return Math.PI * this.radio * this.radio;
    }
}

// Función principal para probar las clases y la abstracción
const main = () => {
    // Crear instancias de las subclases
    const rectangulo = new Rectangulo("Rojo", 5, 10);
    const circulo = new Circulo("Azul", 7);

    // Calcular y mostrar el área de cada figura geométrica
    console.log(`Área del rectángulo ${rectangulo.color}: ${rectangulo.calcularArea()}`);
    console.log(`Área del círculo ${circulo.color}: ${circulo.calcularArea()}`);
}

// Llamar a la función principal para ejecutar el programa
main();
