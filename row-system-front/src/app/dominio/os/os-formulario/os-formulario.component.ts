import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { Os } from '../os';
import { OsService } from '../os.service';
import { Material } from '../../material/material';
import { Servico } from '../../servico/servico';

@Component({
  selector: 'os-lista',
  templateUrl: './os-formulario.component.html',
  styleUrls: ['./os-formulario.component.css']
})
export class OsFormularioComponent implements OnInit {

  os: Os;
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
    private osService: OsService
  ) { }

  ngOnInit() {

    this.os = new Os();
    this.material = new Material();
    this.servico = new Servico();

    this.devolflag = this.route.snapshot.routeConfig.path == "devolver/:id";

    /* Reactive Forms */
    this.osForm = this.builder.group({
      id: [],
      colecao: '',
      tpmodelo: this.builder.control('', [Validators.required, Validators.maxLength(30)]),
      nomemodelo: this.builder.control('', [Validators.required, Validators.maxLength(30)]),
      matrizref: this.builder.control('', [Validators.required, Validators.maxLength(30)]),
      enfesto: this.builder.control('', [Validators.required, Validators.maxLength(30)]),
      tecido: this.builder.control('', [Validators.required, Validators.maxLength(30)]),
      laguratecido: this.builder.control('', [Validators.required, Validators.maxLength(30)]),
      composicaotecido: this.builder.control('', [Validators.required, Validators.maxLength(30)])
    }, {});

    this.materiaisForm = this.builder.group({
      materiais: this.builder.array([this.createmat()]),
    }, {});

    this.servicosForm = this.builder.group({
      servicos: this.builder.array([this.createservico()]),
    }, {});

    // Se existir `ID` realiza busca para trazer os dados
    if (this.route.snapshot.routeConfig.path != "incluir/:id") {

      this.os.enfesto = 1 ;
      this.os.tpmodelo = 'calça';
      this.os.matrizref = '145';
      this.os.nomemodelo ='Calça Verão';
      this.os.tecido =  'Alfaiataria';
      this.os.laguratecido = '15cm';
      this.os.composicaotecido ='100% poliester';
      this.os.status ='Em andadmento';
      this.material.item ='zíper encaixe';
      this.material.medida = 'cm';
      this.material.qtd = 12;
      this.material.custo = 12,60;



      // Atualiza o formulário com os valores retornados
      this.osForm.patchValue(this.os);
      this.servicosForm.patchValue(this.servico);
      this.materiaisForm.patchValue(this.material);

    }

    this.syncFlag = true;

  }

  createmat(): FormGroup {
    return this.builder.group({
      id: [],
      item: this.builder.control('', [Validators.required, Validators.maxLength(30)]),
      medida: this.builder.control('', [Validators.required, Validators.maxLength(30)]),
      qtd: this.builder.control('', [Validators.required, Validators.maxLength(30)]),
      custo: this.builder.control('', [Validators.required, Validators.maxLength(30)]),
    });
  }

  addmat(): void {
    this.materiais = this.materiaisForm.get('materiais') as FormArray;
    this.materiais.push(this.createmat());
  }

  removemat(id: number): void {
    this.materiais = this.materiaisForm.get('materiais') as FormArray;
    if (this.materiais.length > 1) {
      this.materiais.removeAt(id);
    }
  }

  createservico(): FormGroup {
    return this.builder.group({
      id: [],
      servico: this.builder.control('', [Validators.required, Validators.maxLength(30)]),
      custo: this.builder.control('', [Validators.required, Validators.maxLength(30)]),
    });
  }

  addservico(): void {
    this.servicos = this.servicosForm.get('servicos') as FormArray;
    this.servicos.push(this.createservico());
  }

  removeservico(id: number): void {
    this.servicos = this.servicosForm.get('servicos') as FormArray;
    if (this.servicos.length > 1) {

      this.servicos.removeAt(id);
    }
  }

  salvar(os: Os) {
    if (this.osForm.invalid) {
      console.log("Erro no formulário");
    }
    else {
      this.osService.salvar(os)
        .subscribe(response => {
          console.log("Curso salvo com sucesso");


          // retorna para a lista
          this.router.navigate(['/alerardois', response.id]);
        },
          (error) => {
            console.log("Erro no back-end");
          });
    }
  }

}
