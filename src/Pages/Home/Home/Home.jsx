import { Helmet } from "react-helmet";
import Addvise from "../Addvise/Addvise";
import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";
import Feauter from "../Feautered/Feauter";
import PopulerManu from "../PopulerManu/PopulerManu";
import Testimomials from "../Testimomials/Testimomials";


const Home = () => {
    return (
        <div>
            <Helmet>
            <title>BISTRO BOSS | HOME</title>
            </Helmet>
            <Banner></Banner>
            <Catagory></Catagory>
            <Addvise></Addvise>
            <PopulerManu></PopulerManu>
            <Feauter></Feauter>
            <Testimomials></Testimomials>
        </div>
    );
};

export default Home;