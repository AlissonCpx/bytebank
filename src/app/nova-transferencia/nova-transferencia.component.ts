import { Transferencia } from './../models/transferencia.model';
import { TransferenciasService } from './../services/transferencias.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nota-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciasService, private router: Router) {}

  transferir() {
    console.log('Solicitado aprov');
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };
    this.aoTransferir.emit(valorEmitir);

    this.service.adicionar(valorEmitir).subscribe((resultado) => {
      console.log(resultado);
      this.router.navigateByUrl('extrato');

    }, (error) => console.error(error));
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
