export default class Cl_mEmpresa {
    constructor() {
        this.empleados = [];
    }
    agregarEmpleado({ empleado, callback, }) {
        // Validar que el empleado no tenga errores
        let error = empleado.error();
        if (error) {
            callback(error);
            return;
        }
        // Validar que no se repita la cedula
        for (const e of this.empleados) {
            if (e.existeCedula(empleado.cedula)) {
                callback(`El empleado ${empleado.nombre} tiene cédula repetida con el empleado ${e.nombre}.`);
                return;
            }
        }
        ;
        //si todo esta bien agregar empleado
        //te explico
        this.empleados.push(empleado);
        callback(false);
    }
    lista() {
        let lista = [];
        this.empleados.forEach((empleado) => {
            lista.push(empleado.toJSON());
        });
        return lista;
    }
}
