import React from "react";
import MarqueeComponent from "../Components/Marquee";
import award1 from '../images/award-1.svg'
import award2 from '../images/award-2.svg'
import award3 from '../images/award-3.svg'
import award4 from '../images/award-4.svg'

function Experince() {

    const row1 = [
        {id:1,src:award1},
        {id:2,src:award2},
        {id:3,src:award3},
        {id:4,src:award4}
      ]
    
    return (
    <section id="experience" className='experince flex text-white justify-center
        '>
        <div className="experince-main-container h-full w-full text-white md:p-16">
            <h2 class="text-[16px] text-center md:text-left md:text-xs text-gray uppercase underline underline-offset-4 mx-[10%] sm:mx-[0%] px-5" style={{opacity: 1}}>EXPERIENCE</h2>
            <div className="experince-heading flex flex-col pt-5 md:pt-20 items-center justify-center">
                <div class="h-[1px] w-full" style={{background: 'linear-gradient(to right, transparent, gray, transparent)'
                                            }}>
                                            </div>
                <div className="inner-line-text p-5"> 2+ years of experience in building epic stuffs</div>
                <div className="experince-awards-wrappers h-full w-full">
                    <div className="awards-wrapper flex flex-col items-center justify-center m-auto h-1/2 w-1/2 md:hidden">
                        {row1.map((award) => (
                            <img key={award.id} src={award.src} alt={`Award ${award.id}`} />
                        ))}
                    </div>
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
