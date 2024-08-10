import { FieldSize, IFormConfig } from "../../../shared/types/IFormConfig.model";

export const CONTACT_FORM: IFormConfig = {
    fields: [
      {
        key: "name",
        label: "Nombre",
        type: "text",
        value: "",
        size: FieldSize.SMALL,
        validations: {
          required: true,
          minlength: 2,
          maxlength: 50,
        },
        asyncValidations: {},
        isDisabled: false,
      },
      {
        key: "email",
        label: "Email",
        type: "email",
        value: "",
        size: FieldSize.SMALL,
        validations: {
          required: true,
          pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
        },
        asyncValidations: {},
        isDisabled: false,
      },
      {
        key: "message",
        label: "Mensaje",
        type: "textarea",
        value: "",
        size: FieldSize.LARGE,
        validations: {
          required: true,
          minlength: 10,
          maxlength: 500,
        },
        asyncValidations: {},
        isDisabled: false,
      },
    ],
  };
  