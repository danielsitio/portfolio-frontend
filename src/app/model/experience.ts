export type Experience = {
    id: number
    position: string
    description: string
    startDate: string
    finishDate: string
    logo?: string
}

export type ExperienceForm = {
    position: string
    description: string
    startDate: string
    finishDate: string
    logo?: File
}