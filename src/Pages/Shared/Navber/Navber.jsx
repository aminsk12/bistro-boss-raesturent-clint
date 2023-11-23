import { NavLink } from "react-router-dom";

const Navber = () => {

    const navOptions = <div >
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-500 underline" : ""
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/menu"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-500 underline" : ""
            }
        >
            Menu
        </NavLink>
    </div>
    return (
        <div className="navbar fixed z-10 text-white bg-opacity-30 bg-black max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-500 underline" : ""
                            }
                        >
                            Home
                        </NavLink>


                        <NavLink
                            to="/menu"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-500 underline" : ""
                            }
                        >
                            Menu
                        </NavLink>

                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">BISTRO BOSS </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-10 font-bold px-1">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-green-500 underline" : ""
                        }
                    >
                        Home
                    </NavLink>


                    <NavLink
                        to="/menu"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-green-500 underline" : ""
                        }
                    >
                        Menu
                    </NavLink>

                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navber;