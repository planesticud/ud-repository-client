
const editFiles = {
  model: {},
  title: 'EDIT USERS',
  result: { state: false},
  schema: {
    fields: [
      {
        type: "input",
        inputType: "text",
        label: "Titulo",
        model: "general",
        placeholder: "Titulo del recurso",
        featured: true,
        required: true,
      },
      {
        type: "input",
        inputType: "text",
        label: "Descripción",
        model: "lifecycle",
        placeholder: "Descripción del recurso",
        featured: true,
        required: true,
      },
      {
        type: "input",
        inputType: "text",
        label: "Correo electronico",
        model: "email",
        placeholder: "Correo electronico",
        featured: true,
        required: true,
      },
      {
        type: "input",
        inputType: "text",
        label: "Url recurso",
        model: "anotation",
        placeholder: "direccion web",
        featured: true,
        required: true,
      },
      {
        type: "submit",
        buttonText: "Actualizar Recurso",
        onSubmit: (model) => this.submit(model),
      },
    ],
  },
  formOptions: {
    validateAfterLoad: false,
    validateAfterChanged: true,
    validateAsync: true,
  },
}
export default {
editFiles
}