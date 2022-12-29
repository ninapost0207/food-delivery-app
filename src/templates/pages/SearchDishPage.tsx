import React from 'react';
import image from '../../assets/images/1.2.png';
import FirstPage from '../elements/FirstPage';


export function SearchDishPage () {
    return (     
        <FirstPage 
            image = {image} 
            alt = 'dessert' 
            header= "Find your Comfort Food here" 
            text= 'Here You Can find a chef or dish for every taste and color. Enjoy!'
            link= '/searchrestaurant'
            buttonText= 'Next'
            type= 'button' 
        />
         
             
    )
}