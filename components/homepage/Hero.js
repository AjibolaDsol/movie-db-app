

function Hero() {
    return (
        <section className='min-h-[300px] max-h-[360px] w-full bg-opacity-20  bg-hero-pattern bg-cover bg-center'>
        <div className='min-h-[300px] max-h-[360px] w-full flex items-center bg-gradient-to-r from-[rgba(3,37,65,0.8)] to-[rgba(3,37,65,0)]'>
            <div className='p-5 lg:px-10 lg:py-8 w-full'>
                <div className='text-white mb-5'>
                  <h2 className='text-5xl font-bold'>Welcome</h2>
                  <h3 className='text-3xl font-semibold'>Millions of movies, TV shows and people to discover. Explore now.</h3>
                </div>

                <div className='w-full relative'>
                  <form className='w-full'>
                        <input placeholder="Search for a movie, tv show, person......"  className='w-full h-12 text-lg border-none rounded-3xl outline-none py-2 px-5 text-[rgba(0,0,0,0.5)]'/>
                        <input type='submit' value='Search' className='absolute text-base font-bold text-white px-6 py-2 rounded-full bg-gradient-to-r from-lightgreen to-lightblue  h-12 right-[-1px] top-0'/>
                  </form>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Hero;