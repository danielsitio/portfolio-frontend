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
        key: "image",
        label: "Imagen",
        required: false,
        order: 5,
        type: InputType.FILE
    }
]
export const profileDescriptionQuestions: Question[] = [
    {
        key: "description",
        value: "",
        label: "Descripcion",
        required: true,
        order: 1,
        type: InputType.TEXT
    }
]