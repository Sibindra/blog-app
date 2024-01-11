export default function Wrapper({ children }: {
    children: React.ReactNode
}) {
    return (
        <div className=" p-10">
            {children}
        </div>
    )
}