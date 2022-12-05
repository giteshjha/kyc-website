import {FaFacebookSquare, FaYoutubeSquare} from "react-icons/fa";
import React from "react";
import './footer.css'

export const Footer = () => {
    return (
        <div className={"footer-container"}>
            {/*<a href="/"><FaYoutubeSquare /></a>*/}
            <a href="https://www.youtube.com/c/kycacademy" target="_blank" rel="noopener noreferrer">
                <FaYoutubeSquare />
            </a>
            <a href="https://www.facebook.com/kamalyuvaclubindia" target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare />
            </a>
            {/*<a href="/about"><FaFacebookSquare /></a>*/}
            {/*<a href="/about"><FaInstagramSquare/></a>*/}
            {/*<a href="/about"><FaYoutubeSquare /></a>*/}
            {/*<a href="/about"><FaFacebookSquare /></a>*/}
            {/*<a href="/about"><FaFacebookSquare /></a>*/}
            {/*<a href="/about"><FaInstagramSquare/></a>*/}
        </div>
    )
}