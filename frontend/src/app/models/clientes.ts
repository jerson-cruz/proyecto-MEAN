export class Clientes {
  _id: string;
  nombre: string;
  apellido: string;
  documento: string;
  contrasena: string;

  constructor(
    _id: string = '',
    nombre: string = '',
    apellido: string = '',
    documento: string = '',
    contrasena: string = ''
  ) {
    this._id = _id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.documento = documento;
    this.contrasena = contrasena;
  }
}
