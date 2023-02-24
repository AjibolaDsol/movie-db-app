import Accordion from "../../components/movie/Accordion";
import ShowCard from "../../components/movie/ShowCard";
import axios from "axios";
import ImageSkeleton from "../../components/ImageSkeleton";

function Param({ data, param }) {

    const skeleton = new Array(20)

    return (
        <div className="flex flex-col p-5 md:py-8 md:px-10 md:block">
            <div className="w-full mb-5">
                <h2 className="text-2xl font-semibold">Popular Movies</h2>
            </div>

            <div className="md:flex w-full">
                <Accordion/>


                <div className="p-0 md:pl-8 w-full flex flex-col md:flex-row md:justify-between flex-wrap mt-[20px] md:mt-[-30px]">
                        {
                           data ? (data?.results?.map((movieData, index)  => {
                                const poster = movieData.poster_path;
                                const name = movieData.title;
                                const rating = movieData.vote_average;
                                const date = movieData.release_date;
                                const overview = movieData.overview;

                                return <ShowCard key={index} poster={poster} name={name} rating={rating} date={date} overview={overview}/>
                            })) : skeleton.map((skeletons, index) => (<ImageSkeleton key={index}/>))
                        }

                        {/* <ImageSkeleton/> */}
                </div>
            </div>
            
            
            
        </div>
    );
}

export default Param;

export async function getServerSideProps({params}){

    // const { params } = context
    const {param} = params

    const res = await fetch(`https://api.themoviedb.org/3/movie/${param}?api_key=0e0f0f94c6ca826f5976b20ebdef76a6&language=en-US&page=1`)
    const data = await res.json()

    // console.log(data)

    return {
        props:{
            data,
            param,
        }
    }
}