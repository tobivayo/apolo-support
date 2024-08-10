export interface IFormField {
    key: string;
    label: string;
    type: string;
    size: FieldSize;
    value: any;
    validations: {
      required?: boolean;
      minlength?: number;
      maxlength?: number;
      min?: number;
      minDate?: Date;
      max?: number;
      pattern?: string;
    };
    asyncValidations: {
      uniqueId?: boolean;
    }
    isDisabled: boolean;
  }
  
  export interface IFormConfig {
    fields: IFormField[];
  }
  
  export enum FieldSize {
    SMALL = "small",
    LARGE = "large",
  }