export const routes = {
    home: {
        href: "/"
    },
    categoryDetail: {
        href: (id: number) => `/c/?i=${id}`
    }
}
