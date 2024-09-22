import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clientes } from '../models/clientes'; // Asegúrate de que el modelo esté correctamente nombrado

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  selectedClientes: Clientes;
  clientes: Clientes[];
  readonly URL_API = 'http://localhost:3001/api/clientes';

  constructor(private http: HttpClient) {
    this.selectedClientes = new Clientes();
    this.clientes = [];
  }

  getClientes() {
    return this.http.get(this.URL_API);
  }

  postClientes(cliente: Clientes) {
    return this.http.post(this.URL_API, cliente);
  }

  putClientes(cliente: Clientes) {
    return this.http.put(`${this.URL_API}/${cliente._id}`, cliente);
  }

  deleteClientes(_id: string) {
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
}
