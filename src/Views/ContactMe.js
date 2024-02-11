import insta from '../images/instagram.svg'
import linkedin from '../images/linkedin.svg'
import github from '../images/github.svg'
import twitterx from '../images/twitterx.svg'
import leetcode from '../images/leetcode.svg'
import Seprator from '../Components/Seprator'
import email from '../images/email.svg'

function ContactMe() {

    const emailAddress = "mailto:iamakashrai84@gmail.com"

    const socialMediaLinks = [
        { id:1, name: 'Linkedin', icon: linkedin, url: 'https://www.linkedin.com/in/iakashrai/' },
        { id:2, name: 'Instagram', icon: insta, url: 'https://www.instagram.com/iaakashrai/' },
        { id:3, name: 'Github', icon: github, url: 'https://github.com/iakashrai' },
        { id:4, name: 'Leetcode', icon: leetcode, url: 'https://leetcode.com/akashrai02/' },
        { id:5, name: 'twitterx', icon: twitterx, url:'https://twitter.com/iakashrai2'}
      ];

    const sociaMediaList = socialMediaLinks.map(link => 
        (
            <li key={link.name}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
                <img
                src={link.icon}
                alt={`${link.name} Icon`}
                className="w-6 h-6"
                />
            </a>
            </li>
    ));

    return(
        <section id="contact" className="contact-me-section bg-black text-white w-full h-1/2 flex flex-wrap p-5 md:py-8">
            <div className="flex flex-col w-full h-full md:justify-around">
                <div className='footer-text-wrapper flex md:flex-row justify-around p-4 md:p-10'>
                    <div className='flex flex-col flex-wrap md:justify-around'>
                        <h2 className='text-xl sm:text-2xl md:text-6xl text-red-400 p-1'>
                            Coding Solutions
                        </h2>
                        <h2 className='text-lg sm:text-xl md:text-4xl text-red-400 p-1'>
                            for your
                        </h2>
                        <h2 className='text-xl sm:text-2xl md:text-6xl text-red-400 p-1'>
                            Complex Problems
                        </h2>
                    </div>
                    <div className='text-wrapper flex flex-col gap-5'>
                        <div className='flex flex-col'>
                            <h2 className='text-xl sm:text-2xl md:text-4xl text-white'>
                                Let's
                            </h2>
                            <h2 className='text-xl sm:text-2xl md:text-4xl text-white'>
                                Collabrate
                            </h2>
                        </div>
                        <div className='email-wrapper flex flex-row items-center justify-around rounded border-[0.5px] border-white text-sm md:space-x-3'>
                            <div className='bg-white hidden md:block md:p-1 '><img src={email} /></div>
                            <div className='email-addr-wrapper p-1'>
                                <a href={emailAddress} className="text-white">iamakashrai84@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <Seprator />
                <div className='footer flex flex-row justify-around py-4'>
                    <h2 className='font-semibold text-sm md:text-lg'>Akash Rai</h2>
                    <ul className="flex flex-row space-x-2">
                        {sociaMediaList}
                    </ul>
                    <h2 className='footer-year text-sm md:text-lg text-white '>
                        @2024
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default ContactMe

{/* <h3 className='font-semibold p-16 text-6xl'>Let's Connect</h3>

            <div className='email-wrapper flex flex-row justify-around'>
                <h2 className='text-3xl'>Write to me</h2>
            </div>

            <div className='py-2 w-full'><Seprator /></div>
            <div className='social-media-links p-5'>
                <ul className="flex space-x-2">
                    {sociaMediaList}
                </ul>
            </div> */}