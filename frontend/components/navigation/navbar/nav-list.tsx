'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "@/components/shadcn/ui/dropdown-menu"
import { Button } from "@/components/shadcn/ui/button"
import { Menu } from "lucide-react"
import { useTheme } from "next-themes"

const NavList = () => {
    const { setTheme , theme } = useTheme()


    const toggleTheme = () =>{
        if(theme === 'dark'){
            setTheme('light')
        }else{
            setTheme('dark')
        }
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={'outline'} size={'icon'} className=" focus-visible:ring-transparent border-red-500 border">
                    <Menu size={15} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 transition-all" align="end" forceMount>

                <DropdownMenuItem onClick={toggleTheme} className=" flex gap-1 items-center`">
                    Change Theme: {theme === 'dark' ? 'Dark' : 'Light' } 

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