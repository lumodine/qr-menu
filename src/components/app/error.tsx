"use client"

export type NotFoundProps = {
    title: string
}

export const NotFound = ({ title }: NotFoundProps) => {
    return (
        <div>
            <p className="text-secondary-foreground">
                {title}
            </p>
        </div>
    )
}
NotFound.displayName = "NotFound"
