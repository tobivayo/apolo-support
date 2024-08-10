import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GenericFieldComponent } from '../../../../shared/components/fields/generic-field/generic-field.component';
import { ButtonPrimaryComponent } from '../../../../shared/components/buttons/button-primary/button-primary.component';
import { ButtonSecondaryComponent } from '../../../../shared/components/buttons/button-secondary/button-secondary.component';
import { FormsModule } from '@angular/forms';
import { IFormConfig } from '../../../../shared/types/IFormConfig.model';
import { FormService } from '../../../../shared/services/form.service';
import { CONTACT_FORM } from '../../mocks/contact-form.mock';
import { ButtonCancelComponent } from "../../../../shared/components/buttons/button-cancel/button-cancel.component";
import { EndpointsService } from '../../services/endpoints.service';
import { IContactRequest } from '../../../../shared/types/IContactRequest.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, GenericFieldComponent, ButtonPrimaryComponent, ButtonSecondaryComponent, ReactiveFormsModule, FormsModule, ButtonCancelComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  public formConfig: IFormConfig;
  public form: FormGroup;
  
  constructor(private _formService: FormService, private _endpoints: EndpointsService) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.formConfig = CONTACT_FORM;
    
    this.form = this._formService.createForm(this.formConfig);
  }

  public getFormControl(key: string): FormControl {
    return this.form.get(key) as FormControl;
  }

  public clearForm() {
    this.form.get('name')?.setValue('')
    this.form.get('email')?.setValue('')
    this.form.get('message')?.setValue('')
    this.form.markAsPristine();
    this.form.markAsUntouched();
  }

  public submitForm() {
    const data: IContactRequest = {
      name: this.form.get('name')?.value,
      email: this.form.get('email')?.value,
      message: this.form.get('message')?.value
    }

    console.log("Submit form", data);

    this._endpoints.sendForm(data).subscribe({
      next: (data) => {
        console.log("Se envio con exito", data)
        this.clearForm();
      },
      error: (error) => {
        console.log("Fallo el envio")
      }
    })
  }
}
