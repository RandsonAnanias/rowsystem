import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


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
  valueflag: boolean;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    private colecaoService: ColecaoService
  ) { }

  ngOnInit() {

    this.colecao = new Colecao();

    this.valueflag = this.route.snapshot.routeConfig.path  != "incluir";
    /* Reactive Forms */
    this.colecaoForm = this.builder.group({
      id: [],
      nome: ['', [Validators.required, Validators.maxLength(50)]],
      criacao: ['', [Validators.required]],
    }, {});

    // Se existir `ID` realiza busca para trazer os dados
    if (this.valueflag) {

      this.colecao.nome = "Verão";
      this.colecao.criacao =  new Date() ;

          // Atualiza o formulário com os valores retornados
          this.colecaoForm.patchValue(this.colecao);


    }

  }

  salvar(colecao: Colecao) {
    if (this.colecaoForm.invalid) {
      console.log("Erro no formulário");
    }
    else {
      this.colecaoService.salvar(colecao)
      .subscribe(response => {
        console.log("Curso salvo com sucesso");

        // retorna para a lista
        this.router.navigate(['/colecao']);
      },
      (error) => {
        console.log("Erro no back-end");
      });
    }
  }

  select(event: any) {
    // this.colecao.tipopessoa = event.target.value;
    // console.log(this.colecao)
  }

}
