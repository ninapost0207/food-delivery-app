import { Button } from '../elements/Button';
import { SignUpHeading } from '../elements/SignUpHeading';
import location from '../../assets/icons/location.png'

export function SetLocationPage () {
    

    return (
        <div className='background__linear'>            
            <SignUpHeading 
                link= "/upload" header="Set Your Location" text="This data will be displayed in your account profile for security" 
            />
            <div className='set-location-group'>
                <div className='flex flex-row align-center'>
                    <img src={location} alt="location" className='icon_location' />
                    <p className='text__15__medium'>Your Location</p>
                </div>
                <button className='button__grey button text__15__medium'>Set Location</button>
                
            </div>
              
            <Button link= '/congrats' type= 'submit' text= 'Next' />
            
        </div>
    )
}
