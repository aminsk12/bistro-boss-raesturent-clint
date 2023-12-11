import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { FaCartPlus } from "react-icons/fa6";

const Navber = () => {
    const { user, logOut } = useAuth();

    return (
        <div className="navbar fixed z-10 text-white bg-opacity-30 bg-black max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu z-10 text-white bg-opacity-30 bg-black menu-sm dropdown-content mt-3  p-2 shadow  rounded-box w-52">
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
                        <NavLink
                            to="/order/salad"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-500 underline" : ""
                            }
                        >
                            Order Now
                        </NavLink>


                        <button className="  text-xl flex">
                    <FaCartPlus />
                        <div className="badge badge-secondary">+99</div>
                    </button>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">BISTRO BOSS </a>
            </div>
            <div className="navbar-center hidden lg:flex items-center">
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
                    <NavLink
                        to="/order/salad"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-green-500 underline" : ""
                        }
                    >
                        Order Now
                    </NavLink>



                    <button className="  text-xl flex">
                    <FaCartPlus />
                        <div className="badge badge-secondary">+99</div>
                    </button>
                </ul>
            </div>
            {/* avatar part  */}
            <div className="navbar-end pr-10">
                {
                    user?.email ? <div className="dropdown dropdown-end ">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} alt={user.displayName} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  p-2 shadow  rounded-box w-52 z-10 text-white bg-opacity-30 bg-black">
                            <li>
                                <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                            </li>
                            <li>
                                <button className="btn btn-sm  btn-ghost"
                                    onClick={logOut}
                                >Logout</button>

                            </li>
                        </ul>
                    </div>
                        :
                        <Link to='/login'>
                            <button className="btn btn-sm  btn-ghost">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navber;