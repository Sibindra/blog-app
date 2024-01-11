import NavBar from "@/components/navigation/navbar"
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
        </div>
    )
}