import { useState } from "react";
import { useEffect } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([])
    const [loding, setLoding] = useState(true)

    useEffect(() => {
        fetch('https://bistro-boss-restaurant-server-seven.vercel.app/menu')
            .then(res => res.json())
            .then(data => {
                setMenu(data)
                setLoding(false)
                
            })
    }, [])
    return [menu, loding]
};

export default useMenu;