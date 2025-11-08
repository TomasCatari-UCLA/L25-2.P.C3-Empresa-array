export default class Cl_mEmpleado {
    constructor({ nombre, cedula, cargo, edad }) {
        this._nombre = "";
        this._cedula = "";
        this._cargo = "";
        this._edad = 0;
        this.nombre = nombre;
        this.cedula = cedula;
        this.cargo = cargo;
        this.edad = edad;
    }
    set nombre(nombre) {
        this._nombre = nombre.trim().toUpperCase();
    }
    get nombre() {
        return this._nombre;
    }
    set cedula(cedula) {
        this._cedula = cedula.trim();
    }
    get cedula() {
        return this._cedula;
    }
    set cargo(cargo) {
        this._cargo = cargo.trim().toLowerCase();
    }
    get cargo() {
        return this._cargo;
    }
    set edad(edad) {
        this._edad = +edad;
    }
    get edad() {
        return this._edad;
    }
    error() {
        // Validar nombre
        if (this._nombre.length === 0)
            return "El nombre no puede estar vacío.";
        // Validar cedula
        if (this._cedula.length !== 6 || // 123456 
            isNaN(+this._cedula)) {
            return "la cedula es inválida.";
        }
        //validar cargo
        if (this._cargo.length === 0)
            return "El cargo no puede estar vacío";
        //validar edad
        if (this._edad === null ||
            isNaN(+this._edad) ||
            this._edad <= 30) {
            return "la edad es invalida";
        }
        ;
        return false;
    }
    existeCedula(cedula) {
        if (cedula === null)
            return false;
        if (this.cedula === cedula)
            return true;
        return false;
    }
    toJSON() {
        return {
            nombre: this._nombre,
            cedula: this._cedula,
            cargo: this._cargo,
            edad: this._edad,
        };
    }
}
