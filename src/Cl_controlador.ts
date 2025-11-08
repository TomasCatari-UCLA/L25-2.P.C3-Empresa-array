import Cl_mEmpleado, { iEmpleado } from "./Cl_mEmpleado.js";
import Cl_mEmpresa from "./Cl_mEmpresa.js";
import Cl_vEmpresa from "./Cl_vEmpresa.js";

export default class Cl_controlador {
  public modelo: Cl_mEmpresa;
  public vista: Cl_vEmpresa;
  constructor(modelo: Cl_mEmpresa, vista: Cl_vEmpresa) {
    this.modelo = modelo;
    this.vista = vista;
  }
  agregarEmpleado({
    empleadoData,
    callback,
  }: {
    empleadoData: iEmpleado;
    callback: Function;
  }): void {
    this.modelo.agregarEmpleado({
      empleado: new Cl_mEmpleado(empleadoData),
      callback: (error: string | false) => {
        callback(error);
      },
    });
  }
  empleadosRegistrados(): iEmpleado[] {
    return this.modelo.lista();
  }
}
