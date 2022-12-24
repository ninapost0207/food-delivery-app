import React from 'react';
import {Button} from './Button';

interface FirstPageProps {
    image: string,
    alt: string,
    header: string,
    text: string,
    link: string,
    buttonText: string,
    type?: 'submit' | 'reset' | 'button' | undefined,
}

export default function FirstPage ({image, alt, header, text, type, link, buttonText}: FirstPageProps) {
    return (
        <div className='wrapper'>
            <img src={image} alt={alt} className='picture__big'></img>
            <h3 className='header_22'>{header} </h3>
            <p className='text__12__normal'>{text} </p>
            <Button link={link} type={type} text={buttonText} onClick={() => console.log('work')}/>
            
        </div> 
      );
}