import { InputType, Question } from "src/app/model/question";

export const newProjectQuestions: Question[] = [
    {
        key: "name",
        value: "",
        label: "Nombre",
        required: true,
        order: 1,
        type: InputType.TEXT
    },
    {
        key: "description",
        value: "",
        label: "Descripcion",
        required: true,
        order: 2,
        type: InputType.TEXT
    },
    {
        key: "realizationDate",
        value: "",
        label: "Fecha de realizacion",
        required: true,
        order: 3,
        type: InputType.DATE
    },
    {
        key: "link",
        label: "Link",
        required: false,
        order: 4,
        type: InputType.TEXT
    },
    {
        key: "portrait",
        label: "Imagen",
        required: false,
        order: 5,
        type: InputType.FILE
    }
]

export const basicProfileQuestions: Question[] = [
    {
        key: "name",
        value: "",
        label: "Nombre",
        required: true,
        order: 1,
        type: InputType.TEXT
    },
    {
        key: "lastName",
        value: "",
        label: "Apellido",
        required: true,
        order: 2,
        type: InputType.TEXT
    },
    {
        key: "title",
        value: "",
        label: "Título",
        required: true,
        order: 3,
        type: InputType.TEXT
    }
]
export const profileDescriptionQuestions: Question[] = [
    {
        key: "description",
        value: "",
        label: "Descripcion",
        required: true,
        order: 1,
        type: InputType.LARGE_TEXT
    }
]
export const newEducationQuestions: Question[] = [
    {
        key: "school",
        value: "",
        label: "Escuela",
        required: true,
        order: 1,
        type: InputType.TEXT
    },
    {
        key: "title",
        value: "",
        label: "Titulo",
        required: true,
        order: 2,
        type: InputType.TEXT
    },
    {
        key: "startDate",
        label: "Fecha de inicio",
        required: true,
        order: 3,
        type: InputType.DATE
    },
    {
        key: "finishDate",
        label: "Fecha de finalizacion",
        required: true,
        order: 4,
        type: InputType.DATE
    },
    {
        key: "logo",
        label: "Logo",
        required: false,
        order: 5,
        type: InputType.FILE
    }

]
export const skillQuestions: Question[] = [
    {
        key: "name",
        label: "Nombre",
        value: "",
        order: 1,
        required: true,
        type: InputType.TEXT
    },
    {
        key: "level",
        label: "Nivel",
        order: 2,
        required: true,
        type: InputType.NUMBER
    }
]
export const experienceQuestions: Question[] = [
    {
        key: "institute",
        value: "",
        label: "Empresa",
        required: true,
        order: 1,
        type: InputType.TEXT
    },
    {
        key: "position",
        value: "",
        label: "Puesto",
        required: true,
        order: 2,
        type: InputType.TEXT
    },
    {
        key: "description",
        value: "",
        label: "Descripcion de las tareas",
        required: true,
        order: 3,
        type: InputType.LARGE_TEXT
    },
    {
        key: "startDate",
        label: "Fecha de inicio",
        required: true,
        order: 4,
        type: InputType.DATE
    },
    {
        key: "finishDate",
        label: "Fecha de finalizacion",
        required: true,
        order: 5,
        type: InputType.DATE
    },
    {
        key: "logo",
        label: "Logo",
        required: false,
        order: 6,
        type: InputType.FILE
    }
]