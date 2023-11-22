

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center m-16 w-3/12 mx-auto">
            <p className="text-yellow-600">{subHeading}</p>
            <h3 className="text-3xl border-y-4 font-bold py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;