import React, { useRef, useState } from 'react';
import { Button } from '../elements/Button';
import { SignUpHeading } from '../elements/SignUpHeading';

const CODE_LENGTH = 4;
const CODE_MIN_VALUE = 0;
const CODE_MAX_VALUE = 9;
const BACKSPACE_KEY = 'Backspace';

export function VerificationCodePage() {
    const [code, setCode] = useState<Array<number | undefined>>(new Array(CODE_LENGTH))
    const [error, setError] = useState<string>('')
    

    const inputRefs = useRef<HTMLInputElement[]>([])

    const handleChange = (codeentry: number | undefined, index: number) => {
        const newCode = [...code];
        newCode[index] = codeentry;
        setCode(newCode)
    }
    const changeFocus = (index: number) => {
        const ref = inputRefs.current[index]
        if(ref) {
            ref.focus()
        }
    }
   const changeHandler = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = Number(event.target.value.trim());
        if (isNaN(value)) {
            setError("Code is invalid")
        }
        
        if (isNaN(value) || event.target.value.length === 0) {                    
            return
        } else if (value >= CODE_MIN_VALUE && value <= CODE_MAX_VALUE) {            
            handleChange(value, index)
            if(index < code.length - 1) {
                changeFocus(index + 1)
            }
            setError("")
        }
    }
    const keyDownHandler = (event:React.KeyboardEvent<HTMLInputElement>, index: number) => {
        const keyBoardCode = event.nativeEvent.code
        if(keyBoardCode !== BACKSPACE_KEY) {
            return
        }
        if(code[index] === undefined) {
            changeFocus(index - 1)
        } else {
            handleChange(undefined, index)
        }
    }

    return (
        <div className='background__linear'>            
            <SignUpHeading 
                link= "/upload" header="Enter 4-digit Verification code" text="Code send to your phone number. This code will expired in 01:30" 
            />
            <div className='code-input__group flex flex-row justify-between'>
                {Array.from({length: CODE_LENGTH}, (_, index) => (
                    <input 
                        name='code' 
                        key={index} 
                        className='code-input' 
                        type="text" 
                        placeholder='🞄'
                        required 
                        onKeyDown={(event) => keyDownHandler(event, index)}
                        ref={el => {
                            if(el) {
                                inputRefs.current[index] = el;
                            }
                        }} 
                        onChange={(event) => changeHandler(event, index)} 
                        value={code[index] || ''} 
                    />
                ))}                
            </div>
            {error && <p className='text__14__bold red'>{error}</p>}
            <Button link= '/congrats' type= 'submit' text= 'Next' />
            
        </div>
    )
}