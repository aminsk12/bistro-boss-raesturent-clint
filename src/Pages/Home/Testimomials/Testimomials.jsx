import SectionTitle from "../../../component/SesctionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimomials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviwes.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="mb-10 text-center ">
            <SectionTitle
                subHeading={'---What Our Clients Say---'}
                heading={'TESTIMONIALS'}
            ></SectionTitle>
            <>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(reviews => <SwiperSlide
                            key={reviews._id}

                        >
                            <div className="m-24 flex flex-col items-center space-y-4">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={reviews.rating}
                                    readOnly
                                />
                                <p>{reviews.details}</p>
                                <h3 className="text-2xl text-orange-500">{reviews.name}</h3>
                            </div>

                        </SwiperSlide>
                        )
                    }
                </Swiper>
            </>
        </div>
    );
};

export default Testimomials;