import { Button } from '../elements/Button';
import { SignUpHeading } from '../elements/SignUpHeading';
import { UploadPhotoButton } from '../elements/UploadPhotoButton';
import from_gallery  from '../../assets/icons/from_gallery.png'
import take_photo from '../../assets/icons/take_photo.png';

export function UploadPhotoPage () {
    

    return (
        <div className='background__linear'>            
            <SignUpHeading 
                link= "/payment" header="Upload Your Photo Profile" text="This data will be displayed in your account profile for security" 
            />
            <UploadPhotoButton icon={from_gallery} alt='Choose photo from gallery' text='From Gallery' />
            <UploadPhotoButton icon={take_photo} alt='Take photo' text='Take Photo' />
              
            <Button link= '/location' type= 'submit' text= 'Next' onClick={() => console.log('submitted')}/>
            
        </div>
    )
}
