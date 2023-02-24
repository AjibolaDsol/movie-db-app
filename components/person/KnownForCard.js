import Image from "next/image";

function KnownForCard() {
    return (
        <li className="w-[130px] max-w-[195px] h-[195px] ml-3">
            <div className="w-full h-full relative rounded-lg">
                <Image layout="fill" className="rounded-lg" src="https://image.tmdb.org/t/p/w780/1NqwE6LP9IEdOZ57NCT51ftHtWT.jpg"/>
            </div>

            <div className="w-full">
                <p className="text-center pt-1 text-sm hover:text-lightblue">Avatar</p>
            </div>
        </li>
    );
}

export default KnownForCard;