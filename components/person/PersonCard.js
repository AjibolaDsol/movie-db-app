import Image from "next/image";
import Link from "next/link";

function PersonCard({ name, image, shows, id}) {

    // console.log(shows?.results)

    return (
        <div className="w-[183px] md:w-[235px] mt-[30px] shadow-md">
            <div className="w-[183px] h-[185px] md:w-[235px] md:min-w-[235px] md:min-h-[235px] md:h-[235px] relative">
                <Link href={`/person/${id}`}>
                    <Image layout="fill" placeholder="blur" blurDataURL={'/image-placeholder.PNG'} src={`https://image.tmdb.org/t/p/w470_and_h470_face${image}`} className="hover:cursor-pointer"/>
                </Link>
            </div>

            <div className="w-full py-2 px-[10px]">
            <Link href={`/person/${id}`}>
                <p className="w-full text-base md:text-lg font-semibold truncate hover:cursor-pointer">{name}</p>
            </Link>
                <p className=" font-normal text-[rgba(0,0,0,0.6)] text-sm truncate"></p>
            </div>
        </div>
    );
}

export default PersonCard;