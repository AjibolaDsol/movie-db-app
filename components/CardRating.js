

function Rating({rating}) {

    const rateInPercentage = rating * 10

    return (
        <div className=" w-[38px] h-[38px] bg-[#081c22] rounded-full hidden md:block">
            <div className="w-full h-full flex justify-center items-center">
                <span className="text-sm text-white font-bold">{rateInPercentage}</span>
            </div>
        </div>
    );
}

export default Rating;