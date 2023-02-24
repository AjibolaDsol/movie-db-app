import PersonCard from "../../components/person/PersonCard";

function index({ data }) {
    return (
        <div className="w-full md:p-0 p-1">
            <div className="py-5 w-full">
                <div className="md:px-10 w-full">
                    <h2 className="w-full text-md md:text-2xl font-bold pb-[10px] md:pb-0">Popular People</h2>


                    <div className="flex flex-wrap justify-between w-full">

                        {
                            data?.results?.map((person, index) => (<PersonCard key={index} name={person.name} image={person.profile_path} shows={person.known_for} id={person.id}/>))
                            
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default index;

export async function getServerSideProps(ctx){

    const res = await fetch(`https://api.themoviedb.org/3/person/popular?api_key=0e0f0f94c6ca826f5976b20ebdef76a6&language=en-US&page=1`)
    const data = await res.json()

    // console.log(data)

    return {
        props:{
            data,
        }
    }
}