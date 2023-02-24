import Image from "next/image";
import MovieRating from "./MovieRating";

function MovieHero() {
    return (
        <div className="bg-gradient-to-r from-[rgba(3,37,65,0.8)] to-[rgba(3,37,65,0)] w-full h-[570px]"
        style={{
            // backgroundImage: `url(${img})`,
            backgroundImage: `url('https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/v2995GwNVZc5JYK0WPxgzi0AgkB.jpg')`,
            backgroundSize: "cover"
          }}>
            <div className="w-full h-full px-10 py-[30px]">
                <section className="w-full h-full flex">
                    <div className="w-[300px] min-w-[300px] h-auto overflow-hidden ">
                        <div className="relative w-[300px] min-w-[300px] h-[450px]">
                            <Image layout="fill" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/eufJ36oQCauDc427ewaEvQrhZ6i.jpg`} className="rounded-t-lg"/>
                        </div>

                            <div className="w-full h-[60px] max-h-[60px] bg-darkblue rounded-b-lg">
                        </div>

                    </div>


                    <div className="pl-10 w-full">
                            <div className="w-full mb-6">
                                <h2 className="text-4xl text-white font-semibold">Puss In Boots</h2>
                                <div className="w-full text-white">
                                    <span className="px-1 text-[rgba(255,255,255,0.6)] rounded-[2px] mr-[7px] border border-[rgba(255,255,255,0.6)]">PG</span>
                                    <span>10/28/2011(US)</span>
                                    <span className="pl-5">Action, Animation, Adventure, Comedy, Family</span>
                                    <span className="pl-5">1h 30m</span>
                                </div>
                            </div>

                            <ul className="mb-5 w-full h-[68px] ">
                                <li className="inline-flex items-center justify-center mr-5">
                                    <MovieRating/>
                                    <div className="font-bold ml-[6px] text-white">
                                        User <br/>
                                        Score
                                    </div>
                                </li>
                            </ul>

                            <div className="w-full text-white">
                                <h3 className="text-lg font-normal italic opacity-70 mb-2 w-full">Live for danger. Fight for justice. Pray for mercy.</h3>
                                <h3 className="mb-2 mt-[10px] text-xl font-semibold">Overview</h3>
                                <div className="w-full">
                                    <p className="text-base">
                                        Long before he even met Shrek, the notorious fighter, lover and outlaw Puss in Boots becomes a hero when he sets off on an adventure with the tough and street smart Kitty Softpaws and the mastermind Humpty Dumpty to save his town. This is the true story of The Cat, The Myth, The Legend... The Boots.
                                    </p>
                                </div>

                                <ol className="mt-5 flex flex-start flex-wrap list-none list-inside w-full">
                                    <li className="text-left basis-1/3 w-[33%] pr-5 h-auto">
                                        <p className="text-base overflow-hidden text-ellipsis font-bold">Tom Wheeler</p>
                                        <p className="text-sm overflow-hidden text-ellipsis">Screenplay, Story</p>
                                    </li>

                                    <li className="text-left basis-1/3 w-[33%] pr-5 h-auto">
                                        <p className="text-base overflow-hidden text-ellipsis font-bold">Tom Wheeler</p>
                                        <p className="text-sm overflow-hidden text-ellipsis">Screenplay, Story</p>
                                    </li>

                                    <li className="text-left basis-1/3 w-[33%] pr-5 h-auto">
                                        <p className="text-base overflow-hidden text-ellipsis font-bold">Tom Wheeler</p>
                                        <p className="text-sm overflow-hidden text-ellipsis">Screenplay, Story</p>
                                    </li>

                                    <li className="text-left basis-1/3 w-[33%] pr-5 pt-5 h-auto">
                                        <p className="text-base overflow-hidden text-ellipsis font-bold">Tom Wheeler</p>
                                        <p className="text-sm overflow-hidden text-ellipsis">Screenplay, Story</p>
                                    </li>

                                    <li className="text-left basis-1/3 w-[33%] pr-5 pt-5 h-auto">
                                        <p className="text-base overflow-hidden text-ellipsis font-bold">Tom Wheeler</p>
                                        <p className="text-sm overflow-hidden text-ellipsis">Screenplay, Story</p>
                                    </li>

                                    <li className="text-left basis-1/3 w-[33%] pr-5 pt-5 h-auto">
                                        <p className="text-base overflow-hidden text-ellipsis font-bold">Tom Wheeler</p>
                                        <p className="text-sm overflow-hidden text-ellipsis">Screenplay, Story</p>
                                    </li>
                                    <li className="text-left basis-1/3 w-[33%] pr-5 pt-5 h-auto">
                                        <p className="text-base overflow-hidden text-ellipsis font-bold">Tom Wheeler</p>
                                        <p className="text-sm overflow-hidden text-ellipsis">Screenplay, Story</p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                </section>
            </div>
            
        </div>
    );
}

export default MovieHero;