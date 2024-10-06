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
    images: ProductImage
    price: number
}

export type ProductImage = {
    list: string
    detail: string
}

export type Settings = {
    name: string
    logo: string
}
