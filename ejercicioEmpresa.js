class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrar() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}

class Empleado extends Persona {
    constructor(nombre, edad, sueldo_bruto) {
        super(nombre, edad);
        this.sueldo_bruto = sueldo_bruto;
    }

    mostrar() {
        super.mostrar();
        console.log(`Sueldo Bruto: ${this.sueldo_bruto}`);
    }

    calcular_salario_neto() {
        // Aquí puedes agregar la lógica para calcular el salario neto
        return this.sueldo_bruto * 0.8; // Ejemplo de cálculo de salario neto
    }
}

class Directivo extends Empleado {
    constructor(nombre, edad, sueldo_bruto, categoria) {
        super(nombre, edad, sueldo_bruto);
        this.categoria = categoria;
        this.subordinados = [];
    }

    mostrar() {
        super.mostrar();
        console.log(`Categoría: ${this.categoria}`);
    }

    agregarSubordinado(subordinado) {
        this.subordinados.push(subordinado);
    }

    listarSubordinados() {
        console.log(`Subordinados de ${this.nombre}:`);
        this.subordinados.forEach(subordinado => subordinado.mostrar());
    }
}

class Cliente extends Persona {
    constructor(nombre, edad, telefono_de_contacto) {
        super(nombre, edad);
        this.telefono_de_contacto = telefono_de_contacto;
    }

    mostrar() {
        super.mostrar();
        console.log(`Teléfono de Contacto: ${this.telefono_de_contacto}`);
    }
}

class Empresa {
    constructor(nombre) {
        this.nombre = nombre;
        this.empleados = [];
        this.clientes = [];
    }

    agregarEmpleado(empleado) {
        this.empleados.push(empleado);
    }

    listarEmpleados() {
        console.log(`Empleados de ${this.nombre}:`);
        this.empleados.forEach(empleado => empleado.mostrar());
    }

    agregarCliente(cliente) {
        this.clientes.push(cliente);
    }

    listarClientes() {
        console.log(`Clientes de ${this.nombre}:`);
        this.clientes.forEach(cliente => cliente.mostrar());
    }

    mostrar() {
        console.log(`Empresa: ${this.nombre}`);
        this.listarEmpleados();
        this.listarClientes();
    }
}

// Ejemplo de uso
let empresa = new Empresa("Mi Empresa");

let empleado1 = new Empleado("Juan", 30, 3000);
let directivo1 = new Directivo("Ana", 40, 5000, "Gerente");
let cliente1 = new Cliente("Carlos", 25, "123-456-789");

empresa.agregarEmpleado(empleado1);
empresa.agregarEmpleado(directivo1);
empresa.agregarCliente(cliente1);

directivo1.agregarSubordinado(empleado1);

empresa.mostrar();
directivo1.listarSubordinados();