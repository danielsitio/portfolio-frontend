import { Image } from "./image"

export type Profile = {
    name: string
    lastName: string
    title: string
    description: string
    banner?: Image
    picture?: Image
}
