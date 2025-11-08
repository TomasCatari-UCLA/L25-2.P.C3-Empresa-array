import Cl_mEmpleado, { iEmpleado } from "./Cl_mEmpleado.js";

export default class Cl_mEmpresa {
  private empleados: Cl_mEmpleado[] = [];
  agregarEmpleado({
    empleado,
    callback,
  }: {
    empleado: Cl_mEmpleado;
    callback: (error: string | false) => void;
  }): void {
    // Validar que el empleado no tenga errores
    let error = empleado.error();
    if (error) {
      callback(error);
      return;
    }
    // Validar que no se repita la cedula
   for (const e of this.empleados) {
      if (
        e.existeCedula(empleado.cedula) 
      ) {
        callback(
          `El empleado ${empleado.nombre} tiene cédula repetida con el empleado ${e.nombre}.`
        );
        return;
      }
    };
    //si todo esta bien agregar empleado
    //te explico
 this.empleados.push(empleado);
    callback(false);
  
  }
  lista(): iEmpleado[] {
    let lista: iEmpleado[] = [];
    this.empleados.forEach((empleado) => {
      lista.push(empleado.toJSON());
    });
    return lista;
  }
  }
   
    

