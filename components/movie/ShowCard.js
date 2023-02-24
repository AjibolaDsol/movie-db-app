import Image from "next/image";
import Rating from "../CardRating";
import { FaRegImage } from 'react-icons/fa'

function ShowCard({name, poster, date, rating, overview}) {
    return (
        <div className="w-full md:w-[150px] md:min-w-[150px] my-3 md:my-8 shadow-sm md:shadow-md rounded-sm md:rounded-md flex md:block">
            <div className="h-[141px] w-[94px] min-w-[94px] md:min-w-[150px] md:w-full md:h-[225px] relative">
                <Image src={`https://image.tmdb.org/t/p/w780${poster}`} layout="fill" alt={name} placeholder="blur" blurDataURL={'/image-placeholder.PNG'} className="rounded-sm md:rounded-t-xl hover:cursor-pointer"/>
            </div>
            
            <div className="w-full p-[14px] md:px-[10px] md:pt-[26px] md:pb-3 flex justify-center md:items-start flex-col  relative">
                <div className="absolute top-[-27px] left-[10px] md:block hidden">
                    <Rating rating={rating}/>
                </div>

                <div className="w-full">
                    <h2 className="text-base font-semibold md:font-bold hover:text-lightblue overflow-hidden hover:cursor-pointer">{name}</h2>
                    <p className="text-sm md:text-base md:text-[rgba(0,0,0,0.6)] text-[#999]">{date}</p>
                </div>

                <div className="w-full mt-5 md:hidden h-auto ">
                    <p className="text-sm overflow-hidden max-h-[42px]">{overview}</p>
                </div>
                
            </div>

    </div>
    );
}

export default ShowCard;
