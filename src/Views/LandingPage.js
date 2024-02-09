import Hero from "../Components/Hero/Hero";
import ScrollDownIndicator from "../Components/ScrollDown/ScrollDown";

function Home(params) {

    return(
        <section className='home-section flex flex-col items-center justify-center
                w-full h-screen  p-10'>
            <div className="landing-page flex flex-col justify-center h-full">
                <Hero />
                <ScrollDownIndicator />
            </div>
        </section>
    )
}

export default Home;