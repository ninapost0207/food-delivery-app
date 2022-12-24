import React, { useState } from 'react';
import {Button} from '../elements/Button';
import {SignUpHeading} from '../elements/SignUpHeading';
import {Input} from '../elements/Input';


export function BioPage () {
    const [bio, setBio] = useState({
        firstName: '',
        lastName: '',
        mobileNumber: ''
    });

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        setBio({ ...bio, [event.currentTarget.name]: event.currentTarget.value });
    };

    

    return (
        <div className='background__linear'>            
            <SignUpHeading link="/signup" header="Fill in your bio to get started" text="This data will be displayed in your account profile for security"  />
            <form className='sign_form'>
                <Input 
                    type= 'text'
                    name='firstName'
                    placeholder='First Name'
                    value={bio.firstName}
                    onChange={(e) => handleChange(e)}
                />
                <Input 
                    type= 'text'
                    name= 'lastName'
                    placeholder= 'Last Name'
                    value={bio.lastName}
                    onChange={(e) => handleChange(e)}
                />
                <Input 
                    type= 'number'
                    name= 'mobileNumber'
                    placeholder= 'Mobile Number'
                    value= {bio.mobileNumber}
                    onChange= {(e) => handleChange(e)}
                />   
                <Button link= '/payment' type= 'submit' text= 'Next' onClick={() => console.log('submitted')}/>
                    
            </form>            
        </div>
    )
}
