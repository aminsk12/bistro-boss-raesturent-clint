import { createBrowserRouter } from "react-router-dom";
import Main from "../Laout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SineUp from "../Pages/SineUp/SineUp";
import PrivateRouts from "./PrivateRouts";
import Dasbord from "../Laout/Dasbord/Dasbord";
import Cart from "../Pages/Dasboard/Cart/Cart";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'menu',
        element: <PrivateRouts>
          <Menu></Menu>
        </PrivateRouts>
      },
      {
        path: 'order/:category',
        element: <Order></Order>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'sineup',
        element: <SineUp></SineUp>
      }
    ]
  },
  {
    path: "dasbord",
    element: <Dasbord></Dasbord>,
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>
      }
    ]
  }
]);

export default router;