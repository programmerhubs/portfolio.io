import React from "react";
import { FiTwitter, FiGithub, FiLinkedin, FiInstagram} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.linkedin.com/in/rohit-kumar-5bb44bb7" className="home__social-icon" target="_blank" rel="noreferrer">
                <FiLinkedin />
            </a>
            {/* <a href="https://github.com/clubofdevelopers" className="home__social-icon" target="_blank" rel="noreferrer">
                <FiGithub />
            </a> */}
            <a href="https://www.instagram.com/rohit_sh_etw/#" className="home__social-icon" target="_blank" rel="noreferrer">
                <FiInstagram />
            </a>
        </div> 
    ); 
}

export default Social;