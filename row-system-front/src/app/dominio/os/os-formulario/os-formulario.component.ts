import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { EnfestoEnum, Os, StatusEnum } from '../os';
import { OsService } from '../os.service';
import { Material } from '../../material/material';
import { Servico } from '../../servico/servico';
import Validation from '../../core/util/validation';
import { ColecaoService } from '../../colecao/colecao.service';
import { Colecao } from '../../colecao/colecao';
import { ObjectUnsubscribedError, Observable } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'os-lista',
  templateUrl: './os-formulario.component.html',
  styleUrls: ['./os-formulario.component.css']
})
export class OsFormularioComponent implements OnInit {

  oss: Os[];
  os: Os;
  colecao: Colecao;
  titulo: string;

  osForm: FormGroup;
  material: Material;
  materiaisForm: FormGroup;
  materiais: FormArray;
  servico: Servico;
  servicosForm: FormGroup;
  servicos: FormArray;
  devolflag: boolean;
  syncFlag: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    private osService: OsService,
    private colecaoService: ColecaoService
  ) {
  }

  ngOnInit() {


    this.os = new Os();
    this.material = new Material();
    this.servico = new Servico();

    this.os.id = this.route.snapshot.params['id'];

    this.titulo = (this.os.id) ? 'Editar':'Cadastrar';



    // this.devolflag = this.route.snapshot.routeConfig.path == "devolver/:id";

    /* Reactive Forms */
    this.osForm = this.builder.group({
      id: [null],
      // colecao: [null],
      tpmodelo: ['',[Validators.required]],
      nomemodelo: ['',[Validators.required]],
      matrizref: ['',[Validators.required]],
      enfesto: ['',[Validators.required]],
      dataInicial: ['',[Validators.required]],
      dataFinal: ['',[Validators.required]],
      status: ['',[Validators.required]],
      tecido: ['',[Validators.required]],
      laguratecido: ['',[Validators.required]],
      composicaotecido: ['',[Validators.required]]

    }, {});

    // this.materiaisForm = this.builder.group({
    //   materiais: this.builder.array([this.createmat()]),
    // }, {});

    // this.servicosForm = this.builder.group({
    //   servicos: this.builder.array([this.createservico()]),
    // }, {});

    // Se existir `ID` realiza busca para trazer os dados

    if(this.os.id){
      this.osService.findById(this.os.id)
      .subscribe(os => {
        this.osForm.patchValue(os)
      });
    }
    if(this.route.snapshot.url[0].path == 'visualizar'){
      //Desabilitar o formulario
      this.osForm.disable();

      //Alterar o titulo da pagina
      this.titulo = 'Visualizar';
    }

    // this.colecaoService.findById(this.colecao.id).subscribe(colecao => this.colecao = colecao)

    // if (this.route.snapshot.routeConfig.path != "novo") {

      
    //   // Atualiza o formulário com os valores retornados
    //   this.osForm.patchValue(this.os);
    //   this.servicosForm.patchValue(this.servico);
    //   this.materiaisForm.patchValue(this.material);

    // }

    // this.syncFlag = true;

  }

  // createmat(): FormGroup {
  //   return this.builder.group({
  //     id: [],
  //     item: this.builder.control('', [Validators.required, Validators.maxLength(30)]),
  //     medida: this.builder.control('', [Validators.required, Validators.maxLength(30)]),
  //     qtd: this.builder.control('', [Validators.required, Validators.maxLength(30)]),
  //     custo: this.builder.control('', [Validators.required, Validators.maxLength(30)]),
  //   });
  // }

  // addmat(): void {
  //   this.materiais = this.materiaisForm.get('materiais') as FormArray;
  //   this.materiais.push(this.createmat());
  // }

  // removemat(id: number): void {
  //   this.materiais = this.materiaisForm.get('materiais') as FormArray;
  //   if (this.materiais.length > 1) {
  //     this.materiais.removeAt(id);
  //   }
  // }

  // createservico(): FormGroup {
  //   return this.builder.group({
  //     id: [],
  //     servico: this.builder.control('', [Validators.required, Validators.maxLength(30)]),
  //     custo: this.builder.control('', [Validators.required, Validators.maxLength(30)]),
  //   });
  // }
  
  onSave(os: Os){
    console.log('os');
    
    if(this.osForm.invalid){
      //Valida todos os campos do formulario
      Validation.allFormFields(this.osForm);
    }else {
      this.osService.save(os)
      .subscribe(() => {
        console.log("Os salva!!!");

        //Redireciona para a lista de garagem
        this.router.navigate(['/os']);
      });
    }
  } 

  // addservico(): void {
  //   this.servicos = this.servicosForm.get('servicos') as FormArray;
  //   this.servicos.push(this.createservico());
  // }

  // removeservico(id: number): void {
  //   this.servicos = this.servicosForm.get('servicos') as FormArray;
  //   if (this.servicos.length > 1) {

  //     this.servicos.removeAt(id);
  //   }
  // }

  // salvar(os: Os) {
  //   if (this.osForm.invalid) {
  //     console.log("Erro no formulário");
  //   }
  //   else {
  //     this.osService.salvar(os)
  //       .subscribe(response => {
  //         console.log("Curso salvo com sucesso");


  //         // retorna para a lista
  //         this.router.navigate(['/alerardois', response.id]);
  //       },
  //         (error) => {
  //           console.log("Erro no back-end");
  //         });
  //   }
  // }

}
