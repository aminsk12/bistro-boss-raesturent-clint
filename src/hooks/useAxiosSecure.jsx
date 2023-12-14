import axios from "axios";

export const axiosSecure = axios.create({
    baseURL : 'https://bistro-boss-restaurant-server-seven.vercel.app/'
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;