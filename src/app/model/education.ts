export type Education = {
    id: number
    institute: string,
    title: string,
    startDate: string,
    finishDate: string,
    logo?: string
}

export type EducationForm = {
    institute: string,
    title: string,
    startDate: string,
    finishDate: string,
    logo?: File
}

