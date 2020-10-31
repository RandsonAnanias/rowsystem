import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { Pessoa } from '../pessoa';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'pessoa-lista',
  templateUrl: './pessoa-formulario.component.html',
  styleUrls: ['./pessoa-formulario.component.css']
})
export class PessoaFormularioComponent implements OnInit {

  pessoa: Pessoa;
  pessoaForm: FormGroup;
  visuflag: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    private pessoaService: PessoaService
  ) { }

  ngOnInit() {

    this.pessoa = new Pessoa();

    this.pessoa.id = this.route.snapshot.params['id'];
    this.visuflag = this.route.snapshot.routeConfig.path  == "visualizar/:id";


    /* Reactive Forms */
    this.pessoaForm = this.builder.group({
      id: [],
      nome: this.builder.control('', [Validators.required, Validators.maxLength(50)]),
      tipopessoa: this.builder.control('', [Validators.required]),
      telefone: this.builder.control('', [Validators.required]),
      cpfpj: this.builder.control('', [Validators.required, Validators.maxLength(50)]),
      email: this.builder.control('', [Validators.required]),
      cep: this.builder.control('', [Validators.required]),
      endereco: this.builder.control('', [Validators.required]),
    }, {});

    // Se existir `ID` realiza busca para trazer os dados
    if (this.pessoa.id != null) {
      this.pessoaService.buscarPeloId(this.pessoa.id)
        .subscribe(retorno => {

          // Atualiza o formulário com os valores retornados
          this.pessoaForm.patchValue(retorno);

        });
    }

  }

  salvar(pessoa: Pessoa) {
    if (this.pessoaForm.invalid ) {
      console.log("Erro no formulário");
    }
    else {
      this.pessoaService.salvar(pessoa)
      .subscribe(response => {
        console.log("Curso salvo com sucesso");

        // retorna para a lista
        this.router.navigate(['/pessoa']);
      },
      (error) => {
        console.log("Erro no back-end");
      });
    }
  }

}
