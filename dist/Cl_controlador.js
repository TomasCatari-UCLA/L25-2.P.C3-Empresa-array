import Cl_mEmpleado from "./Cl_mEmpleado.js";
export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    agregarEmpleado({ empleadoData, callback, }) {
        this.modelo.agregarEmpleado({
            empleado: new Cl_mEmpleado(empleadoData),
            callback: (error) => {
                callback(error);
            },
        });
    }
    empleadosRegistrados() {
        return this.modelo.lista();
    }
}
