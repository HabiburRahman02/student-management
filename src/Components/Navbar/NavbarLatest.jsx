import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/spiLogo.png'
const NavbarLatest = () => {
    const links = <>
        <NavLink className={({ isActive }) => `mr-8 text-base font-medium ${isActive && ' border-b-[2px]'}`} to='/'>Home</NavLink>
        <NavLink className={({ isActive }) => `mr-8 text-base font-medium ${isActive && ' border-b-[2px]'}`} to='/students'>Students</NavLink>
        <NavLink className={({ isActive }) => `mr-8 text-base font-medium ${isActive && ' border-b-[2px]'}`} to='/teachers'>Teachers</NavLink>
    </>
    return (
        <div className="bg-[rgb(37,168,214)] text-white py-3">
            <div className="navbar max-w-[1400px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="bg-[rgb(37,168,214)] text-white menu menu-sm dropdown-content rounded-box z-[1] mt-3 space-y-3 w-60 p-4 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to='/' className="flex items-center gap-2">
                        <h4 className="text-3xl font-semibold hidden md:block" to='/'> S P I</h4>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-3">

                    <Link to='/login'>
                        <button className="bg-white py-3 px-8 text-black hover:text-white font-bold hover:bg-[rgb(10,132,176)] transition-colors">
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavbarLatest;