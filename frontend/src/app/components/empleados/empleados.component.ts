import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { clientes } from 'src/app/models/clientes';
import { clientesservice } from '../../services/clientes.service';

declare var M: any;

@Component({
  selector: 'app-clientess',
  templateUrl: './clientess.component.html',
  styleUrls: ['./clientess.component.css'],
  providers: [clientesservice],
})
export class ClientessComponent implements OnInit {
  constructor(public clientesService: clientesservice) {}

  ngOnInit(): void {}

  agregarclientes(form?: NgForm) {
    this.clientesService.Postclientes(form?.value).subscribe(
      (res) => {
        this.resetForm(form);
        M.toast({ html: 'Guardado satisfactoriamente' });
      },
      (err) => {
        M.toast({ html: 'Error al guardar' });
      }
    );
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.clientesService.selectedclientes = new clientes();
    }
  }
}
