import { Toaster } from "@/components/shadcn/ui/toaster";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <Toaster />
        </>

    )
}
