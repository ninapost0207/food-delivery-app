import { Link } from "react-router-dom";
import { Button } from '../elements/Button';
import image from '../../assets/images/congrats.png';

export function CongratsPage () {   

    return (        
        <div className='background__linear '>
            <Link to='/searchdish'> 
                <img src={image} alt='congrats' className='logo_congrats'></img> 
            </Link>       
            <h1 className="green header_30 center">Congrats!</h1>
            <h2 className="header_22 center">Your Profile Is Ready To Use</h2>
            <Button link= '/main' type= 'button' text= 'Try Order' />                             
        </div>    
    )
}