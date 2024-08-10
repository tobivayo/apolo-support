import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IFormConfig, IFormField } from '../types/IFormConfig.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private _fb: FormBuilder) { }

  public createForm(formConfig: IFormConfig): FormGroup {
    let group: any = {};

    formConfig.fields.forEach(field => {
      let validators = this.getValidators(field);
      const state = {
        value: field.value,
        disabled: field.isDisabled
      };
      group[field.key] = [state, validators];
    });

    return this._fb.group(group);
  }

  private getValidators(field: IFormField) {
    let validators = [];

    if (field.validations) {
      if (field.validations.required) {
        validators.push(Validators.required);
      }
      if (field.validations.minlength) {
        validators.push(Validators.minLength(field.validations.minlength));
      }
      if (field.validations.maxlength) {
        validators.push(Validators.maxLength(field.validations.maxlength));
      }
      if (field.validations.min) {
        validators.push(Validators.min(field.validations.min));
      }
      if (field.validations.max) {
        validators.push(Validators.max(field.validations.max));
      }
      if (field.validations.pattern) {
        validators.push(Validators.pattern(field.validations.pattern));
      }
    }

    return validators;
  }
}
