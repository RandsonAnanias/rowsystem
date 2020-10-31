import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { Contatops } from '../contatops';
import { ContatopsService } from '../contatops.service';

@Component({
  selector: 'contatops-lista',
  templateUrl: './contatops-formulario.component.html',
  styleUrls: ['./contatops-formulario.component.css']
})
export class ContatopsFormularioComponent implements OnInit {

  contatops: Contatops;
  contatopsForm: FormGroup;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    private contatopsService: ContatopsService
  ) { }

  ngOnInit() {

    this.contatops = new Contatops();

    /* Reactive Forms */
    this.contatopsForm = this.builder.group({
      id: [],
      nome: this.builder.control('', [Validators.required, Validators.maxLength(50)]),
      criacao: this.builder.control('', [Validators.required]),
    }, {});

    // Se existir `ID` realiza busca para trazer os dados
    if (this.contatops.id != null) {
      this.contatopsService.buscarPeloId(this.contatops.id)
        .subscribe(retorno => {

          // Atualiza o formulário com os valores retornados
          this.contatopsForm.patchValue(retorno);

        });
    }

  }

  salvar(contatops: Contatops) {
    if (this.contatopsForm.invalid) {
      console.log("Erro no formulário");
    }
    else {
      this.contatopsService.salvar(contatops)
      .subscribe(response => {
        console.log("Curso salvo com sucesso");

        // retorna para a lista
        this.router.navigate(['/contatops']);
      },
      (error) => {
        console.log("Erro no back-end");
      });
    }
  }

  select(event: any) {
    // this.contatops.tipopessoa = event.target.value;
    // console.log(this.contatops)
  }

}
