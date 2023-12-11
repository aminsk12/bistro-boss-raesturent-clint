

const Cover = ({img, title}) => {
    return (
        <div>
            <div className="hero h-[700px]" style={{ backgroundImage: `url("${img}")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-full">
                        <h1 className="mb-5 text-5xl font-bold bg-black bg-opacity-50  px-40 uppercase py-20">{title}</h1>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;