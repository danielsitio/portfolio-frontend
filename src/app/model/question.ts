export type Question = {
    value?: string
    key: string;
    label: string;
    required: boolean;
    minLenght?: number
    maxLenght?: number
    minNumber?: number
    maxNumber?: number
    order: number;
    type: InputType;
    controlType?: string;
    options?: { key: string, value: string }[];
}

export enum InputType {
    DATE = "date",
    TEXT = "text",
    LARGE_TEXT = "textarea",
    FILE = "file",
    NUMBER = "number"
}

