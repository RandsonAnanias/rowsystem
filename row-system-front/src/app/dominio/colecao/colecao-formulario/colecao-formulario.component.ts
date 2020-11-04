import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Validation from '../../core/util/validation';


import { Colecao } from '../colecao';
import { ColecaoService } from '../colecao.service';

@Component({
  selector: 'colecao-lista',
  templateUrl: './colecao-formulario.component.html',
  styleUrls: ['./colecao-formulario.component.css']
})
export class ColecaoFormularioComponent implements OnInit {

  colecao: Colecao;
  colecaoForm: FormGroup;
  titulo: string;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    private colecaoService: ColecaoService
  ) { }

  ngOnInit() {

    this.colecao = new Colecao();

    this.colecao.id = this.route.snapshot.params['id'];

    this.titulo = (this.colecao.id) ? 'Editar' : 'Cadastrar';

    this.colecaoForm = this.builder.group({
      id: [null],
      nome: ['', [Validators.required]],
      datacriacao: ['', [Validators.required]],
    }, {});

    if (this.colecao.id) {
      this.colecaoService.findById(this.colecao.id)
        .subscribe(colecao => this.colecaoForm.patchValue(colecao));
    }
    if (this.route.snapshot.url[0].path == 'visualizar') {
      this.colecaoForm.disable();
      this.titulo = 'Visualizar';
    }
  }

  onSave(colecao: Colecao) {

    console.log(colecao);

    if (this.colecaoForm.invalid) {
      Validation.allFormFields(this.colecaoForm);
    } else {

      this.colecaoService.save(colecao)
        .subscribe(() => {

          console.log("Colecao Salvo");

          this.router.navigate(['/colecao']);

        });
    }
  }
}

