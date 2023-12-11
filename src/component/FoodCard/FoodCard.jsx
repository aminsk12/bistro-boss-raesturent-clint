

const FoodCard = ({item}) => {
    const { name, image, price, recipe } = item;
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
                    <button className="btn btn-outline border-0 border-b-4 text-red-600 mt-4">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;