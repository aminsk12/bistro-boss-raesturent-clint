import Addvise from "../Addvise/Addvise";
import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";
import Feauter from "../Feautered/Feauter";
import PopulerManu from "../PopulerManu/PopulerManu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
            <Addvise></Addvise>
            <PopulerManu></PopulerManu>
            <Feauter></Feauter>
        </div>
    );
};

export default Home;