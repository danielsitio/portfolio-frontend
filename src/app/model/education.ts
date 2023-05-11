import { Institute } from "./institute"

export type Education = {
    id: number
    title: string,
    startDate: string,
    finishDate: string,
    school: Institute
}

export type EducationForm = {
    school: string,
    title: string,
    startDate: string,
    finishDate: string,
    logo?: File
}

