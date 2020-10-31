import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { Informacao } from '../informacao';
import { InformacaoService } from '../informacao.service';

@Component({
  selector: 'informacao-lista',
  templateUrl: './informacao-formulario.component.html',
  styleUrls: ['./informacao-formulario.component.css']
})
export class InformacaoFormularioComponent implements OnInit {

  informacaoc: Informacao;
  informacaof: Informacao;
  informacoesc: FormArray;
  informacoesf: FormArray;
  informacaocForm: FormGroup;
  informacaofForm: FormGroup;
  devolflag: boolean;



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    private informacaoService: InformacaoService
  ) { }

  ngOnInit() {

    console.log(this.route.snapshot.routeConfig.path )
    this.devolflag = this.route.snapshot.routeConfig.path  == "devolucao/:id";
    this.informacaoc = new Informacao();
    this.informacaof = new Informacao();

    /* Reactive Forms */
    this.informacaocForm = this.builder.group({
      id: [],
      peesoa: this.builder.control('', [Validators.required, Validators.maxLength(50)]),
      dtenvio: this.builder.control('', [Validators.required]),
      dtret: this.builder.control('', [Validators.required]),
      informacoesc: this.builder.array([this.createinformacoesc()]),
    }, {});

    this.informacaofForm = this.builder.group({
      id: [],
      peesoa: this.builder.control('', [Validators.required, Validators.maxLength(50)]),
      dtenvio: this.builder.control('', [Validators.required]),
      dtret: this.builder.control('', [Validators.required]),
      informacoesf: this.builder.array([this.createinformacoesf()]),
    }, {});

    // Se existir `ID` realiza busca para trazer os dados
    if (this.devolflag) {
          this.informacaoc.pessoa = 1;
          this.informacaoc.tipopessoa = 1;
          this.informacaoc.cor = "Azul";
          this.informacaoc.qtdpprevisto = 10;
          this.informacaoc.qtdpret = 9;
          this.informacaoc.qtdmprevisto = 10;
          this.informacaoc.qtdmret = 8;
          this.informacaoc.qtdgprevisto = 10;
          this.informacaoc.qtdgret = 10;

          // Atualiza o formulário com os valores retornados
          this.informacaocForm.patchValue(this.informacaoc);


    }



  }

  createinformacoesc(): FormGroup {
    return this.builder.group({
      id: [],
      item: this.builder.control('', [Validators.required, Validators.maxLength(30)]),
      medida: this.builder.control('', [Validators.required, Validators.maxLength(30)]),
      qtd: this.builder.control('', [Validators.required, Validators.maxLength(30)]),
      custo: this.builder.control('', [Validators.required, Validators.maxLength(30)]),
      devol: this.builder.control('', [Validators.required, Validators.maxLength(30)]),
    });
  }

  addinformacoesc(): void {
    this.informacoesc = this.informacaocForm.get('informacoesc') as FormArray;
    this.informacoesc.push(this.createinformacoesc());
  }

  removeinformacoesc(id: number): void {
    this.informacoesc = this.informacaocForm.get('informacoesc') as FormArray;
    if (this.informacoesc.length > 1) {
      this.informacoesc.removeAt(id);
    }
  }

  createinformacoesf(): FormGroup {
    return this.builder.group({
      id: [],
      item: this.builder.control('', [Validators.required, Validators.maxLength(30)]),
      medida: this.builder.control('', [Validators.required, Validators.maxLength(30)]),
      qtd: this.builder.control('', [Validators.required, Validators.maxLength(30)]),
      custo: this.builder.control('', [Validators.required, Validators.maxLength(30)]),
      devol: this.builder.control('', [Validators.required, Validators.maxLength(30)]),
    });
  }

  addinformacoesf(): void {
    this.informacoesf = this.informacaofForm.get('informacoesf') as FormArray;
    this.informacoesf.push(this.createinformacoesf());
  }

  removeinformacoesf(id: number): void {
    this.informacoesf = this.informacaofForm.get('informacoesf') as FormArray;
    if (this.informacoesf.length > 1) {
      this.informacoesf.removeAt(id);
    }
  }

  salvar(informacao: Informacao) {
    if (this.informacaocForm.invalid) {
      console.log("Erro no formulário");
    }
    else {
      this.informacaoService.salvar(informacao)
      .subscribe(response => {
        console.log("Curso salvo com sucesso");

        // retorna para a lista
        this.router.navigate(['/informacao']);
      },
      (error) => {
        console.log("Erro no back-end");
      });
    }
  }

  select(event: any) {
    // this.informacao.tipopessoa = event.target.value;
    // console.log(this.informacao)
  }

}
