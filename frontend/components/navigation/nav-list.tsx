import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "@/components/shadcn/ui/dropdown-menu"
import { Button } from "@/components/shadcn/ui/button"
import { Menu } from "lucide-react"

const NavList = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={'outline'} size={'icon'} className=" focus-visible:ring-transparent">
                    <Menu size={15} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 transition-all" align="end" forceMount>
                <DropdownMenuItem>
                    Change Theme: Dark
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        Portfolio
                        <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Blogs
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    Contact Me
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default NavList