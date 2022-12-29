
interface UploadPhotoButtonProps {        
    icon: string,
    alt: string,
    text: string,
    type?: 'submit' | 'reset' | 'button' | undefined,
    onClick?: (e:React.MouseEvent<HTMLButtonElement>) => void
} 

export function UploadPhotoButton ({ icon, alt, text, onClick}: UploadPhotoButtonProps) {
    return (
        
            <button className='button button_with-icon' onClick={onClick}>
                
                <img src={icon} alt={alt} className='icon_payment'></img> 
                <p className="text__14__bold">{text}</p>               
            </button>
        
    )
}