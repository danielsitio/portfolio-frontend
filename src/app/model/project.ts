import { HalResource } from "./hal"
import { Image } from "./image"

export type Project = {
    id: number
    name: string
    description: string
    realizationDate: string
    link?: string
    portrait: Image
}
export type ProjectForm = {
    name: string
    description: string
    realizationDate: string
    link?: string
    portrait?: File
}

export type HalProject = Project & HalResource