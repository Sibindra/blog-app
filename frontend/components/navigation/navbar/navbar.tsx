import NavList from "./nav-list"
import UserAvatar from "./user-avatar"

const NavBar = () => {
  return (
    <header className=" flex justify-between py-5 px-5 md:px-16 border-b border-secondary items-center  bg-background dark:bg-background w-full">
      <UserAvatar/>
      <NavList />
    </header>
  )
}
export default NavBar