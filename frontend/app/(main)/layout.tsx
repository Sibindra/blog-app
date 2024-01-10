import NavBar from "@/components/navigation/navbar"

export default function MainLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <div>
            <NavBar />
            {children}
        </div>
    )
}