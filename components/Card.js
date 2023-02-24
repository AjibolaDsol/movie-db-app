import Image from "next/image";
import Rating from "./CardRating";


function Card() {
    return (
        <div className="w-[150px] my-10 mx-10">
            <div className="w-full">
                <Image src="https://image.tmdb.org/t/p/w780/1NqwE6LP9IEdOZ57NCT51ftHtWT.jpg" height={225} width={150} className="rounded-xl"/>
            </div>
                
        <div className="w-full px-[10px] pt-[26px] pb-3 flex items-start flex-col relative">
            <div className="absolute top-[-27px] left-[10px]">
                <Rating/>
            </div>
            <h2 className="text-base font-bold hover:text-lightblue">Puss in Boots: The Last Wish</h2>
            <p className="text-base text-[rgba(0,0,0,0.6)]">Nov 23, 2022</p>
        </div>

        </div>
    );
}

export default Card;