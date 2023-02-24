import { FaRegImage } from "react-icons/fa";


function ImageSkeleton() {
    return (
        <div className="w-[150px] min-w-[150px] my-8 rounded-md">
            <div className="w-full h-[225px] flex justify-center items-center bg-[#E7E7E7] animate-pulse">
                <FaRegImage className="text-[#CFCFCF] h-[70px] w-[140px]"/>
            </div>
            
            <div className="w-full px-[10px] pt-[26px] pb-3 flex items-start flex-col relative">
                <div className="absolute top-[-27px] left-[10px]">
                <div className=" w-[38px] h-[38px] bg-[#081c22] rounded-full animate-pulse">
                    <div className="w-full h-full flex justify-center items-center">
                        <span className="text-sm text-white font-bold">NR</span>
                    </div>
            </div>
                    {/* <Rating rating={rating}/> */}
                </div>
            </div>

    </div>
    );
}

export default ImageSkeleton;