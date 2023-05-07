export type Profile = {
    name: string
    lastName: string
    title: string
    description: string
    bannerImage?: Image
    image?: Image
}
type Image = {
    url: string
}