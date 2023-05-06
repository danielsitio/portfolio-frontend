export type Question = {
    value?: string
    key: string;
    label: string;
    required: boolean;
    order: number;
    type: InputType;
    controlType?: string;
    options?: { key: string, value: string }[];
}

export enum InputType {
    DATE = "date",
    TEXT = "text",
    FILE = "file"
}

