import { HalResource } from "./hal"

export type Project = {
    name: string
    description: string
    realizationDate: string
    link?: string
}

export type HalProject = Project & HalResource