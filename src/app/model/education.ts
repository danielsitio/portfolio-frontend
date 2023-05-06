import { HalResource } from "./hal"

export type Education = {
    institute: string
    degree: string
}
export type HalEducation = Education & HalResource

