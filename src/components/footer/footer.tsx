import {FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare} from "react-icons/fa";
import React from "react";
import './footer.css'

export const Footer = () => {
    return (
        <div className={"footer-container"}>
            <a href="/about"><FaYoutubeSquare /></a>
            <a href="/about"><FaFacebookSquare /></a>
            <a href="/about"><FaFacebookSquare /></a>
            <a href="/about"><FaInstagramSquare/></a>
            <a href="/about"><FaYoutubeSquare /></a>
            <a href="/about"><FaFacebookSquare /></a>
            <a href="/about"><FaFacebookSquare /></a>
            <a href="/about"><FaInstagramSquare/></a>
        </div>
    )
}