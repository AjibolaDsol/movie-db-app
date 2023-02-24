import Image from 'next/image'

function Footer() {
    return (
        <footer className="max-w-full w-screen bg-darkblue">
            <nav className="flex flex-col md:flex-row justify-center py-10 md:py-20 px-5 md:px-0 text-white">
                <div className='mr-10 hidden md:block'>
                    <Image src={'/tmdb2.svg'} width={130} height={90} alt='Logo'/>
                </div>
                <div className='mr-10 mb-5'>
                    <h3 className='text-xl font-bold'>THE BASICS</h3>
                    <ul>
                        <li>About TMDB</li>
                        <li>Contact Us</li>
                        <li>Support Forums</li>
                        <li>API</li>
                        <li>System Status</li>
                    </ul>
                </div>
                <div className='mr-10 mb-5'>
                    <h3 className='text-xl font-bold'>GET INVOLVED</h3>
                    <ul>
                        <li>Contibution Bible</li>
                        <li>Add New Movie</li>
                        <li>Add New TV Show</li>
                    </ul>
                </div>
                <div className='mr-10 mb-5'>
                    <h3 className='text-xl font-bold'>COMMUNITY</h3>
                    <ul>
                        <li>Guidelines</li>
                        <li>Discussion</li>
                        <li>Leaderboard</li>
                        <li>Twitter</li>
                    </ul>
                </div>
                <div className='mr-10 mb-5'>
                    <h3 className='text-xl font-bold'>LEGAL</h3>
                    <ul>
                        <li>Terms of Use</li>
                        <li>API Terms of Use</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </nav>
        </footer>
    );
}

export default Footer;