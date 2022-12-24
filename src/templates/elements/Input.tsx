import React from 'react';

interface InpitProps {
    type: string,
    name: string,
    placeholder: string,
    value: string,
    onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

export function Input ({type, name, placeholder, value, onChange}: InpitProps) {
    return (
        <input 
            required
            className='input grey text__14__normal' 
            type={type} 
            name={name} 
            placeholder={placeholder} 
            value={value}
            onChange={onChange}>
        </input>
      );
}