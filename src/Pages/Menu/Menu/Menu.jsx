import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import img from "../../../assets/menu/banner3.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../component/SesctionTitle/SectionTitle";
import MenuCatagory from "../../Home/MenuCatagory/MenuCatagory";

const Menu = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>BISTRO BOSS | MENU</title>
            </Helmet>
            {/*main cover*/}
            <Cover
                img={img}
                title={'our manu'}
            ></Cover>

            <SectionTitle
                subHeading={"---Don't miss---"}
                heading={"TODAY'S OFFER"}
            ></SectionTitle>

            <MenuCatagory items={offered}></MenuCatagory>

            <MenuCatagory
                items={dessert}
                title={ 'dessert'}
                img={dessertImg}
            ></MenuCatagory>

            <MenuCatagory
                items={pizza}
                title={ 'pizza'}
                img={pizzaImg}
            ></MenuCatagory>

            <MenuCatagory
                items={salad}
                title={ 'salad'}
                img={saladImg}
            ></MenuCatagory>

            <MenuCatagory
                items={soup}
                title={ 'soup'}
                img={soupImg}
                
            ></MenuCatagory>
            
        </div>
    );
};

export default Menu;