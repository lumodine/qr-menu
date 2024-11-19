type TenantLayoutProps = {
    children: Readonly<React.ReactNode>
}

export default function TenantLayout({
    children
}: TenantLayoutProps) {
    return (
        <>
            {children}
        </>
    )
}
