import Footer from "@/components/navigation/footer/footer"
import NavBar from "@/components/navigation/navbar/navbar"
import Wrapper from "@/components/wrappers/wrapper"

export default function MainLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <div>
            <NavBar />
            <Wrapper>
                {children}
            </Wrapper>
            <Footer />
        </div>
    )
}