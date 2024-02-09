import insta from '../images/instagram.svg'
import linkedin from '../images/linkedin.svg'
import github from '../images/github.svg'
import twitterx from '../images/twitterx.svg'
import leetcode from '../images/leetcode.svg'
import Seprator from '../Components/Seprator'

function ContactMe() {

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
        <section className="contact-me-section flex justify-center flex-col items-center bg-black text-white w-full h-1/2 py-8">
            <div className='py-2 w-full'><Seprator /></div>
            
            <div className='flex flex-row p-5 items-baseline justify-around w-full'>
                <div className='social-symbols'>
                    <h3 className='text-3xl font-semibold'>Let's Connect</h3>
                    <div className='social-media-links p-5'>
                        <ul className="flex space-x-2">
                            {sociaMediaList}
                        </ul>
                    </div>
                </div>

                <div className="getintouch-text font-semibold text-6xl">
                    <h2>GET IN</h2>
                    <h2 className="text-8xl">TOUCH</h2>
                </div>
            </div> 
            <div className='py-2 w-full'><Seprator /></div>
        </section>
    )
}

export default ContactMe