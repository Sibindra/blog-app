import { Avatar, AvatarFallback, AvatarImage } from "@/components/shadcn/ui/avatar"
import Link from "next/link"

const UserAvatar = () => {
    return (
        <Avatar className=" cursor-pointer">
            <Link href={'/'}>
                <AvatarImage src="https://avatars.githubusercontent.com/u/59206903?v=4" />
                <AvatarFallback>S</AvatarFallback>
            </Link>
        </Avatar>
    )
}
export default UserAvatar