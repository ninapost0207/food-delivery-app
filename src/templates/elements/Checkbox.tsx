interface CheckboxProps {    
    id?: string,
    name?: string,      
    checked: boolean,    
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function Checkbox ({id, name, checked,  onChange}: CheckboxProps) {
    return (
        <input 
            className='checkbox__green' 
            type="checkbox" 
            id={id} 
            name={name} 
            checked={checked}            
            onChange={onChange} >
        </input>
    )
}