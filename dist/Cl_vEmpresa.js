import Cl_vGeneral, { tHTMLElement } from "./tools/Cl_vGeneral.js";
export default class Cl_vEmpresa extends Cl_vGeneral {
    constructor() {
        super({ formName: "empresa" });
        this.btAgregarEmpleado = this.crearHTMLButtonElement("btAgregarEmpleado", {
            onclick: () => this.agregarEmpleado(),
        });
        this.divEmpleadoRegistrado = this.crearHTMLElement("divEmpleadoRegistrado", {
            type: tHTMLElement.CONTAINER,
            refresh: () => this.mostrarEmpleadosRegistrados(),
        });
    }
    mostrarEmpleadosRegistrados() {
        var _a;
        this.divEmpleadoRegistrado.innerHTML = "";
        let empresa = (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.empleadosRegistrados();
        if (!empresa)
            return;
        empresa.forEach((empleado) => {
            this.divEmpleadoRegistrado.innerHTML += `<tr>
            <td>${empleado.nombre}</td>
            <td>${empleado.cedula}</td>
            <td>${empleado.cargo}</td>
            <td>${empleado.edad} años</td>
        </tr>`;
        });
    }
    agregarEmpleado() {
        let nombre = prompt("Ingrese el nombre del empleado:");
        if (!nombre)
            return;
        let cedula = prompt("Ingrese cedula del empleado:");
        if (!cedula)
            return;
        let cargo = prompt("Ingrese el cargo que ejerce:");
        if (!cargo)
            return;
        let edad = prompt("Ingrese la edad del empleado");
        if (!edad)
            return;
        this.controlador.agregarEmpleado({
            empleadoData: {
                nombre: nombre,
                cedula: cedula,
                cargo: cargo,
                edad: +edad,
            },
            callback: (error) => {
                if (error)
                    alert(error);
                this.refresh();
            },
        });
    }
}
