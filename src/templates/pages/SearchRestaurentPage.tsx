import React from 'react';
import FirstPage from '../elements/FirstPage';
import image from '../../assets/images/1.3.png';

export function SearchRestaurantPage () {
    return ( 
         
        <FirstPage 
            image= {image}
            alt= 'fast-food'
            header= "Food Ninja is Where Your Comfort Food Lives" 
            text= 'Enjoy a fast and smooth food delivery at your doorstep'
            link= '/signin'
            buttonText= 'Next'
            type= 'button' 
        />      
            
    )
}
