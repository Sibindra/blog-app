import Footer from "@/components/navigation/footer/footer"
import NavBar from "@/components/navigation/navbar/navbar"

export default function MainLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <>
            <NavBar />
            <>
                {children}
            </>
            <Footer />
        </>
    )
}