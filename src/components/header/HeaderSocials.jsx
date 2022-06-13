import React from 'react'
import { BsLinkedin,  BsTwitter } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';


const HeaderSocials = () => {
    return (
        <div className='header__socials' >
            <a href="https://www.linkedin.com/in/tobiloba-adeeko-513aba175"><BsLinkedin/></a>
            <a href="https://github.com/oluwadaprof" ><BsGithub/></a>
            <a href="https://twitter.com/oluwadaprof?t=1SjO-aSTh_3DhgwuVo4JZA&s=08"><BsTwitter/></a>
        </div>
    )
}

export default HeaderSocials