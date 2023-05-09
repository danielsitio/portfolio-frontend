export type Profile = {
    name: string
    lastName: string
    title: string
    description: string
    bannerImage?: Image
    picture?: Image
}
type Image = {
    url: string
}