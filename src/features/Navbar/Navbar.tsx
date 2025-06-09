import { NavLink } from "react-router";
import { useState } from "react";
import Hamburger from "../../components/Hamburger";
import './navbar.css'
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    function handleToggle() {
        setIsOpen(prev => !prev);
    }

    return <nav className=" p-12 sm:p-5 sm:bg-stone-950 text-white sticky sm:top-0  overflow-hidden">
        {/* Mobile Navbar */}
        <Hamburger isOpen={isOpen} setIsOpen={handleToggle} />
        <ul className={"mobile-nav p-5 h-dvh justify-center  text-2xl bg-stone-950 w-full sm:hidden flex flex-col " + (isOpen ? ' active' : ' translate-x-[120%] ')}>
            <li className=" mobile-links hover:text-neon-green  py-5 text-center rounded-md">
                <NavLink className={({ isActive }) => (isActive ? 'text-neon-green' : '')} to="/" end>
                    Home
                </NavLink>
            </li>
            <li className=" mobile-links hover:text-neon-green  py-5 text-center rounded-md">
                <NavLink className={({ isActive }) => (isActive ? 'text-neon-green' : '')} to="/about">
                    About
                </NavLink>
            </li>
            <li className=" mobile-links hover:text-neon-green   py-5 text-center rounded-md">
                <NavLink className={({ isActive }) => (isActive ? 'text-neon-green' : '')} to="/projects">
                    Projects
                </NavLink>
            </li>
            <li className=" mobile-links hover:text-neon-green  py-5 text-center rounded-md">
                <NavLink className={({ isActive }) => (isActive ? 'text-neon-green' : '')} to="/blogs">
                    Blogs
                </NavLink>
            </li>
            <li className=" mobile-links hover:text-neon-green  py-5 text-center rounded-md">
                <NavLink className={({ isActive }) => (isActive ? 'text-neon-green' : '')} to="/contact">
                    Contact
                </NavLink>
            </li>
        </ul>


        {/* Desktop Navbar */}
        <ul className=" hidden  sm:flex  sm:text-lg sm:items-center sm:justify-center">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'text-neon-green' : '')} end>
                <li className="hover:text-neon-green px-5 py-2 rounded-md    ">
                    Home
                </li>
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-neon-green' : '')}>
                <li className="hover:text-neon-green px-5 py-2 rounded-md    ">
                    About
                </li>
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? 'text-neon-green' : '')}>
                <li className="hover:text-neon-green px-5 py-2 rounded-md ">
                    Projects
                </li>
            </NavLink>
            <NavLink to="/blogs" className={({ isActive }) => (isActive ? 'text-neon-green' : '')}>
                <li className="hover:text-neon-green px-5 py-2 rounded-md ">
                    Blogs
                </li>
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-neon-green' : '')}>
                <li className="hover:text-neon-green px-5 py-2 rounded-md ">
                    Contact
                </li>
            </NavLink>
        </ul>
    </nav>

}

export default Navbar;