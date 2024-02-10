import React from "react";
import MarqueeComponent from "../Components/Marquee";

function Experince() {

    return (
    <section className='experince flex text-white justify-center
        '>
        <div className="experince-main-container h-full w-full text-white md:p-16">
            <h2 class="text-[16px] text-center md:text-left md:text-xs text-gray uppercase underline underline-offset-4 mx-[10%] sm:mx-[0%] px-5" style={{opacity: 1}}>EXPERIENCE</h2>
            <div className="experince-heading flex flex-col pt-5 md:pt-20 items-center justify-center">
                <div class="h-[1px] w-full" style={{background: 'linear-gradient(to right, transparent, gray, transparent)'
                                            }}>
                                            </div>
                <div className="inner-line-text p-5"> 2+ years of experince in building epic stuffs</div>
                <div className="h-60 w-full">
                    <MarqueeComponent />
                </div>
                <div class="h-[1px] w-full" style={{
  background: 'linear-gradient(to right, transparent, gray, transparent)'
}}></div>
            </div>
        </div>
    </section>

    )
}

export default Experince;
