import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";


const FoodCard = ({ item }) => {
    const { user } = useAuth();
    const { name, image, price, recipe, _id } = item;
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handelAddToCart = () => {
        if (user && user.email) {
            //console.log(food, user.email, user.displayName);
            // send cart ti the databes

            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `${name} add to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch()
                    }
                })

        }
        else {
            Swal.fire({
                title: "You are not Logind",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            });
        }
    }
    return (
        <div>
            <div className="card card-compact mb-10  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 relative">
                    <img src={image} />
                </figure>
                <p className="bg-black text-white font-bold rounded-lg absolute right-0 mr-8 mt-8 px-2">$ {price}</p>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <button
                            onClick={ handelAddToCart}
                            className="btn btn-outline border-0 border-b-4 text-red-600 mt-4">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;