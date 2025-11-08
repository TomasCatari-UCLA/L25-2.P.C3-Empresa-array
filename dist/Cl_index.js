/*Empresa
Contexto: Una empresa, require de una micro-app para llevar el control de una lista de sus empleados
con edad mayor a 30

- La cedula debe tenes 6 digitos.
-Debe ser mayor a 30 años.
-En Empleado habrá un error si la cédula se repite.
-Menores de 30 año no procesas.
- Debe existir cada uno de los datos de los empleados.
*/
import Cl_controlador from "./Cl_controlador.js";
import Cl_mEmpresa from "./Cl_mEmpresa.js";
import Cl_vEmpresa from "./Cl_vEmpresa.js";
export default class Cl_index {
    constructor() {
        this.modelo = new Cl_mEmpresa();
        this.vista = new Cl_vEmpresa();
        let controlador = new Cl_controlador(this.modelo, this.vista);
        this.vista.controlador = controlador;
        this.vista.refresh();
    }
}
