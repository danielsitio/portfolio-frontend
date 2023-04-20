export type Project = {
    id: number
    name: string
    description: string
}
export type ProjectInput = Omit<Project, "id">