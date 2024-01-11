import NavList from "@/components/navigation/nav-list"
import UserAvatar from "@/components/navigation/user-avatar"

const NavBar = () => {
  return (
    <header className=" flex justify-between py-5 px-5 md:px-16 border-b border-secondary items-center fixed bg-white w-full z-10">
      <UserAvatar/>
      <NavList />
    </header>
  )
}
export default NavBar