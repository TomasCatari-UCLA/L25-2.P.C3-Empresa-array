export interface iEmpleado {
  nombre: string;
  cedula: string;
  cargo: string;
  edad: number;
}
export default class Cl_mEmpleado {
  private _nombre: string = "";
  private _cedula: string = "";
  private _cargo: string = "";
  private _edad: number=0;
  constructor({
    nombre,
    cedula,
    cargo,
    edad

  }: {
    nombre: string;
    cedula: string;
    cargo: string;
    edad:number;
  }) {
    this.nombre = nombre;
    this.cedula = cedula;
    this.cargo = cargo;
    this.edad= edad;
  }
  set nombre(nombre: string) {
    this._nombre = nombre.trim().toUpperCase();
  }
  get nombre(): string {
    return this._nombre;
  }
  set cedula(cedula: string) {
    this._cedula = cedula.trim();
  }
  get cedula(): string {
    return this._cedula;
  }
  set cargo(cargo: string) {
    this._cargo = cargo.trim().toLowerCase();
  }
  get cargo(): string {
    return this._cargo;
  }
  set edad(edad:number){
    this._edad= +edad;
  }
  get edad():number{
    return this._edad;
  }
  error(): string | false {
    // Validar nombre
    if (this._nombre.length === 0) return "El nombre no puede estar vacío.";
    // Validar cedula
    if (
      this._cedula.length !==6 || // 123456 
      isNaN(+this._cedula)) {
      return "la cedula es inválida.";
    }
    //validar cargo
    if(this._cargo.length===0) return"El cargo no puede estar vacío";
    
    //validar edad
    if(this._edad === null ||               
  isNaN(+this._edad) ||             
  this._edad <= 30)
  {return "la edad es invalida"};
    return false;
  }
  existeCedula(cedula: string | null): boolean {
    if (cedula === null) return false;
    if (this.cedula === cedula) return true;
  return false;}
  toJSON(): iEmpleado {
    return {
      nombre: this._nombre,
      cedula: this._cedula,
      cargo: this._cargo,
      edad: this._edad,
    };
  }
}
