import { FormGroup, FormControl, FormArray } from "@angular/forms";

export default class Validation {

    // Valida todos os campos
    static allFormFields(formGroup: FormGroup){
        Object.keys(formGroup.controls).forEach(field => {
            console.log(field);
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                Validation.allFormFields(control);
            } else if (control instanceof FormArray) {
                control.controls.forEach((formGroup: FormGroup) => {
                    Validation.allFormFields(formGroup);
                });        
            }
        });
    }
}