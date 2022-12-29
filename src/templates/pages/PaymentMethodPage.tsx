import React from 'react';
import { Button } from '../elements/Button';
import { PaymentButton } from '../elements/PaymentButton';
import { SignUpHeading } from '../elements/SignUpHeading';
import paypal from '../../assets/icons/paypal.png';
import visa from '../../assets/icons/Visa.png';
import payoneer from '../../assets/icons/payoneer.png';

export function PaymentMethodPage () {
    

    return (
        <div className='background__linear'>            
            <SignUpHeading 
                link= "/bio" header="Payment Method" text="This data will be displayed in your account profile for security" 
            />
            <PaymentButton link='/bio' icon={paypal} alt='paypal' type='button' />  
            <PaymentButton link='/bio' icon={visa} alt='visa' type='button' /> 
            <PaymentButton link='/bio' icon={payoneer} alt='payoneer' type='button' /> 
            
              
            <Button link= '/upload' type= 'submit' text= 'Next' onClick={() => console.log('submitted')}/>
            
        </div>
    )
}
