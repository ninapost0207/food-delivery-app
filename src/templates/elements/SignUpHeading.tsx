import React from 'react';
import { Link } from "react-router-dom";

interface SignUpHeadingProps {
    link: string,
    header: string,
    text: string
}

export function SignUpHeading ({link, header, text}: SignUpHeadingProps) {
    return (
        <div >
            <Link to={link} >
                <button className='button__light-orange orange header_25'> &lt;                 
                </button>
            </Link>
                <h2 className='header_25'>{header}</h2>
                <p className='text__12__normal'>{text}</p>            
        </div> 
      );
}