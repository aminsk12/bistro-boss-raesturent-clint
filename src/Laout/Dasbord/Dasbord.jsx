import { NavLink, Outlet } from "react-router-dom";


const Dasbord = () => {
    return (
        <div className="flex">

            <div className=" w-64 h-screen bg-orange-400">
                <ui className="menu">
                    <li><NavLink to={"/dasboard/cart"}>My Cart</NavLink></li>

                </ui>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dasbord;