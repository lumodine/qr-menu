export type Category = {
    id: number
    title: string
    description: string | null
    image: string
    products: Product[]
}

export type Product = {
    id: number
    categoryId: number
    title: string
    description: string | null
    image: string
    defaultUnit: Unit
}

export type Unit = {
    currency: Currency
    price: number
}

export type Settings = {
    name: string
    logo: string
    background: string
}

export type Currency = {
    id: number
    name: string
    shortName: string
    symbol: string
}
