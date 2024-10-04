export type Category = {
    id: number
    title: string
    description: string
    image: string
    products: Product[]
}

export type Product = {
    id: number
    title: string
    description: string
    image: string
    price: number
}

export type Settings = {
    name: string
    logo: string
}
