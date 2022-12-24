
import { Link } from "react-router-dom";

interface ButtonProps {
    link: string,    
    text: string,
    type?: 'submit' | 'reset' | 'button' | undefined,
    onClick?: (e:React.MouseEvent<HTMLButtonElement>) => void
} 

export function Button ({link, text, type, onClick}: ButtonProps) {
    return (
        
            <button className='button button__green button__text' onClick={onClick}>
                <Link className="white" to={link}>{text}</Link>
            </button>
        
    )
}