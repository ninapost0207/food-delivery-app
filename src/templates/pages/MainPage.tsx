import React from 'react';
import { Link } from "react-router-dom";

import image from '../../assets/images/logo.png';

export function MainPage () {    
    

    return (        
        <div className='background__linear background__main'>
            <Link to='/searchdish'> 
                <img src={image} alt='desserts!' className='logo'></img> 
            </Link>                                    
        </div>    
    )
}