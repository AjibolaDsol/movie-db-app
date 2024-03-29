import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import Hero from '../components/homepage/Hero'
import Card from '../components/Card'

export default function Home({ moviesData }) {

  // moviesData?.map(((movieData) => { return console.log(movieData)}
  //   // <Card data={movieData}/>
  // ))



  return (
    <div className="text-3xl">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        {/* <Header/> */}
      <main className='w-full'>
        <Hero/>
        
       
      <Card/>
      </main>
      
    </div>
  )
}

// export async function getStaticProps() {
//   const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=0e0f0f94c6ca826f5976b20ebdef76a6&language=en-US&page=1')
//   const data = await res.json()

//   console.log(data)

//   return {
//     props: {
//       moviesData: data,
//     },
//   }
// }