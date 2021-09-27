import VueFormGenerator from "vue-form-generator";

class UsersModel {
  CreateUsersModel() {
    return {
      model: {},
      title: "Crear usuario",
      result: { state: false },
      schema: {
        fields: [
          {
            type: "input",
            inputType: "text",
            label: "Nombre Completo",
            model: "name",
            placeholder: "Escriba el nombre completo",
            featured: true,
            required: true,
          },
          {
            type: "input",
            inputType: "email",
            label: "correo electronico",
            model: "email",
            placeholder: "Escriba el correo electronico",
            validator: VueFormGenerator.validators.email,
          },
          {
            type: "select",
            inputType: "text",
            label: "Rol",
            model: "rol",
            placeholder: "Rol del usuario en la plataforma",
            featured: true,
            required: true,
            values: ["ESTUDIANTE", "DOCENTE", "ADMINISTRADOR"],
            default: "ESTUDIANTE",
            help: `rol que tendra el usuario en la plataforma`,
          },
          {
            type: "submit",
            buttonText: "Crear Usuario",
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
  }
  UpdateUsersModel() {
    return {
      model: {},
      title: 'Editar Usuarios',
      result: { state: false },
      schema: {
        fields: [
          {
            type: "input",
            inputType: "text",
            label: "Nombre Completo",
            model: "name",
            placeholder: "Escriba el nombre completo",
            featured: true,
            required: true,
          },
          {
            type: "input",
            inputType: "email",
            label: "correo electronico",
            model: "email",
            placeholder: "Escriba el correo electronico",
            validator: VueFormGenerator.validators.email,
          },
          {
            type: "select",
            inputType: "text",
            label: "Rol",
            model: "rol",
            placeholder: "Rol del usuario en la plataforma",
            featured: true,
            required: true,
            values: ["ESTUDIANTE", "DOCENTE", "ADMINISTRADOR"],
            default: "ESTUDIANTE",
            help: `rol que tendra el usuario en la plataforma`,
          },
          {
            type: "submit",
            buttonText: "Actualizar Usuario",
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
  }
  DetailUsersModel()
  {
  return {
    title: 'Detalle de usuario',
    model: {},
    text: {
      name: "Nombres:",
      rol: "Rol:",
      email: "Email:",
    },
  }
  }
  ListUsersModel(){
    return {
    h1: 'Ver usuarios',
    search: { label: 'Buscar por email', button: 'Buscar' },
    add: { button: 'Agregar', route: '/users/add' },
    users: [],
    title: "",
    headers: [
      { text: "Nombre", value: "name", align: "start", sortable: false },
      { text: "email", value: "email", sortable: false },
      { text: "Rol", value: "rol", sortable: false },
      { text: "Actions", value: "actions", sortable: false },
    ],
  }
}
}
export default new UsersModel();