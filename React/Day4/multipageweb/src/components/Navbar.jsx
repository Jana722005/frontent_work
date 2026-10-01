import { NavLink } from "react-router-dom"
const Navbar = () => {
  return (<>
  <div className="bg-blue-500 text-white flex p-6 justify-around items-center">
    <div className="border-2 p-2 w-20 text-center font-bold rounded-2xl">Logo</div>
    <div className="flex gap-15 text-white font-bold">
        <NavLink to = "/" className = {({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to = "/about" className = {({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
        <NavLink to = "/contact" className = {({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
        <NavLink to = "/courses" className = {({ isActive }) => isActive ? 'active' : ''}>Courses</NavLink>
        <NavLink to = "/gallery" className = {({ isActive }) => isActive ? 'active' : ''}>Gallery</NavLink>
        <NavLink to = "/services" className = {({ isActive }) => isActive ? 'active' : ''}>Services</NavLink>
        <NavLink to = "/help" className = {({ isActive }) => isActive ? 'active' : ''}>Help</NavLink>
    </div>
  </div>
  </>)
}

export default Navbar