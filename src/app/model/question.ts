export type Question = {
    value?: string
    key: string;
    label: string;
    required: boolean;
    maxLenght?: number
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

