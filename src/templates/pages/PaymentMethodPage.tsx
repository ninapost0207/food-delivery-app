import React from 'react';
import { Button } from '../elements/Button';
import { SignUpHeading } from '../elements/SignUpHeading';

export function PaymentMethodPage () {
    

    return (
        <div className='background__linear'>            
            <SignUpHeading 
                link= "/bio" header="Payment Method" text="This data will be displayed in your account profile for security" 
            />
                
            <Button link= 'google.com' type= 'submit' text= 'Next' onClick={() => console.log('submitted')}/>
            
        </div>
    )
}
