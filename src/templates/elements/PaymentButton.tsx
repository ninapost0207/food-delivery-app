import { Link } from "react-router-dom";

interface PaymentButtonProps {
    link: string,    
    icon: string,
    alt: string,
    type?: 'submit' | 'reset' | 'button' | undefined,
    onClick?: (e:React.MouseEvent<HTMLButtonElement>) => void
} 

export function PaymentButton ({link, icon, alt, onClick}: PaymentButtonProps) {
    return (
        
            <button className='button button_with-icon' onClick={onClick}>
                <Link className="white" to={link}></Link>
                <img src={icon} alt={alt} className='icon_payment'></img>                
            </button>
        
    )
}