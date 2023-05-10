import { HalResource } from "./hal"

export type Project = {
    id: number
    name: string
    description: string
    realizationDate: string
    link?: string
}
export type ProjectForm = {
    name: string
    description: string
    realizationDate: string
    link?: string
    image?: File
}

export type HalProject = Project & HalResource