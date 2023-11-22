import SectionTitle from "../../../component/SesctionTitle/SectionTitle";
import img from '../../../assets/home/featured.jpg'
import './Feauter.css';

const Feauter = () => {
    return (
        <div className="feauter text-white  my-20 bg-fixed">
            <div className="bg-black bg-opacity-50 py-20 px-16">
                <SectionTitle
                    subHeading={'---Check it out---'}
                    heading={'FROM OUR MENU'}
                ></SectionTitle>
                <div className=" md:flex justify-center items-center ">
                    <div className="">
                        <img src={img} alt="" />
                    </div>
                    <div className="md:ml-10">
                        <p>Aug 20, 2029</p>
                        <p>WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-outline border-0 border-b-4 text-red-600 mt-4">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feauter;