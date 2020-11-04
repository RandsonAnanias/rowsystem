import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  @Input() label: string;
  @Input() required: boolean;
      
  @ContentChild(FormControlName) input: FormControlName;

  constructor() { }

  ngOnInit() {
  }

  // Verifica se o componete é obrigatório
  isRequired() {    
    return (this.required) ? true : false;
  }  
  
  // Verifica se esta preenchido corretamente
  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  // Verifica se existe erro
  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }
  
  // Alterna entre as classes CSS
  optionClass() {
    return {
      'has-error': this.hasError(),
      'has-success': this.hasSuccess()
    };
  }

}
