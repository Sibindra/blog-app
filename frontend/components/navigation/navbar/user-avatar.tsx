import Image from "next/image"
import Link from "next/link"


const UserAvatar =  () => {
    return (
        <Link href={'/'} className="cursor-pointer border aspect-square w-10 h-10 relative rounded-full overflow-hidden">
            <Image src={'https://avatars.githubusercontent.com/u/59206903?v=4'} alt={'notFound'} fill className="scale-100 hover:scale-105 transition-all "/>
        </Link>
    )
}
export default UserAvatar