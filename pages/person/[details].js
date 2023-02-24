import Image from "next/image";
import PersonHeader from "../../components/person/PersonHeader";
import { FaAngleRight, FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa"
import KnownForCard from "../../components/person/KnownForCard";


function Details({ data, credits }) {
    return (
        <div className="w-full">
            <PersonHeader/>

            <div className="px-10 py-[30px] flex">

                <div className="w-[300px] min-w-[300px]">
                    <div className="min-w-[300px] w-[300px] h-[450px]  relative">
                        <Image layout="fill"  placeholder="blur" blurDataURL={'/image-placeholder.PNG'} src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${data.profile_path}`} className="rounded-md"/>
                    </div>

                    <div className="w-full mt-[30px]">
                        <div className="w-full text-3xl flex">
                            <FaFacebookSquare className="mb-[30px] "/>
                            <FaTwitter className="mb-[30px] ml-[10px]"/>
                            <FaInstagram className="mb-[30px] ml-[10px]"/>
                        </div>

                        <h3 className="font-semibold text-xl mb-2">Personal Info</h3>

                        <section className="w-full">
                            <div className="mb-5 text-base">
                                <strong className="font-semibold block">Known For</strong>
                                {data.known_for_department}
                            </div>

                            <div className="mb-5 text-base ">
                                <strong className="font-semibold block">Known Credits</strong>
                            </div>

                            <div className="mb-5 text-base">
                                <strong className="font-semibold block">Gender</strong>
                                {data.gender == 2 ? "Male" : "Female"}
                            </div>

                            <div className="mb-5 text-base">
                                <strong className="font-semibold block">Birthday</strong>
                                {data.birthday}
                            </div>

                            <div className="mb-5 text-base">
                                <strong className="font-semibold block">Place of Birth</strong>
                                {data.place_of_birth}
                            </div>

                            <div className="mb-5 text-base">
                                <strong className="font-semibold block">Also Known as</strong>
                                {data?.also_known_as?.map((names, index) => <div key={index}>{names} </div>)}
                            </div>
                        </section>
                    </div>
                </div>

                <div className=" pl-[30px] w-[calc(100vw-80px-300px)] max-w-[920px]">
                    <section className="w-full">
                        <h2 className="font-bold text-4xl w-full">{data.name}</h2>
                    </section>

                    <section className="w-full mt-[30px]">
                        <h3 className="font-semibold text-xl mb-2">Biography</h3>
                    </section>

                    <section className="max-h-[222px] overflow-hidden">
                        {/* <p className="text-base pb-[22px]">
                            Samuel Henry John Worthington (born 2 August 1976) is a British-Australian actor. He is best known for playing Jake Sully in Avatar, Marcus Wright in Terminator Salvation, and Perseus in Clash of the Titans and its sequel Wrath of the Titans. He later took more dramatic roles, appearing in The Debt (2010), Everest (2015), Hacksaw Ridge (2016), The Shack (2017), Manhunt: Unabomber (2017), and Fractured (2019).
                        </p> */}
{/* 
                        <p className="text-base pb-[22px]">
                            On television, he appeared in his native Australia as Howard in Love My Way and as Phillip Schuler in the television drama mini-series Deadline Gallipoli, for which he was also an executive producer. He voiced the protagonist, Captain Alex Mason, in the video game Call of Duty: Black Ops (2010), as well as its sequels Call of Duty: Black Ops II (2012), and Call of Duty: Black Ops 4 (2018). In 2022, he starred in the true crime miniseries Under the Banner of Heaven.
                        </p>

                        <p className="text-base pb-[22px]">
                            In 2004, Worthington received Australia's highest film award for his lead role in Somersault.
                        </p> */}

                        <p className="text-base pb-[22px]">
                            {data.biography}
                        </p> 
                           
                    </section>
                    <div className="flex w-full justify-end h-[22px]">
                        <a className="font-semibold text-lightblue flex items-center hover:text-lightgreen" href="#">
                            Read More
                            
                            <FaAngleRight/>
                        </a>
                    </div>

                    <section className="mt-[30px] w-full">
                        <h3 className="font-semibold text-xl mb-2">
                            Known For
                        </h3>

                            <div className="w-full">
                                <ul>
                                    <KnownForCard/>
                                </ul>
                            </div>

                    </section>


                </div>
            </div>
        </div>
    );
}

export default Details;

export async function getServerSideProps({params}){

    const {details} = params

    const res = await fetch(`https://api.themoviedb.org/3/person/${details}?api_key=0e0f0f94c6ca826f5976b20ebdef76a6&language=en-US`)
    const data = await res.json()

    const response = await fetch(`https://api.themoviedb.org/3/person/65731/combined_credits?api_key=0e0f0f94c6ca826f5976b20ebdef76a6&language=en-US`)
    const credits = await response.json()

    console.log(params)


    return {
        props:{
            data,
        }
    }
}