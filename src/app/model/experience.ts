import { Institute } from "./institute"

export type Experience = {
    id: number
    position: string
    description: string
    startDate: string
    finishDate: string
    workplace: Institute
}

export type ExperienceForm = {

    position: string
    description: string
    startDate: string
    finishDate: string
    institute: string
    logo?: File
}