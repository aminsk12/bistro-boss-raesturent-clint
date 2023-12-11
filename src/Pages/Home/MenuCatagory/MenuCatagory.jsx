import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCatagory = ({ items, title, img }) => {
    return (
        <div className="pt-8 ">
            {title && <Cover
                img={img}
                title={title}

            ></Cover>}
            <div className=" grid md:grid-cols-2 my-20 gap-4">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <button className="btn btn-outline border-0 border-b-4 text-center flex text-red-600 m-4 mx-auto">Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCatagory;