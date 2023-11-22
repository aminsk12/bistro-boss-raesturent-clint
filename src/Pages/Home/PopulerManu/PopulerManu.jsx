import { useEffect, useState } from "react";
import SectionTitle from "../../../component/SesctionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopulerManu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const poplurItems = data.filter(item => item.category === 'popular')
                setMenu(poplurItems)
                console.log(poplurItems);
            })
    }, [])
    return (
        <div className="mb-16">
            <SectionTitle
                subHeading={"---Check it out---"}
                heading={'FROM OUR MENU'}
            >
            </SectionTitle>
            <div className=" grid md:grid-cols-2 gap-4">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopulerManu;