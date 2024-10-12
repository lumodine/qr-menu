export type LoadingProps = {
    title?: string
}

export const Loading = ({ title }: LoadingProps) => {
    return (
        <div className="p-4">
            {title || "Yükleniyor..."}
        </div>
    )
}
Loading.displayName = "Loading"
