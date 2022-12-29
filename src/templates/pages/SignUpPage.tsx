import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import image from '../../assets/images/logo.png';
import axios, { AxiosError } from 'axios';
import {Input} from '../elements/Input';
import {Button} from '../elements/Button';
import { Checkbox } from '../elements/Checkbox';
import { IUser } from '../../models';


export function SignUpPage () {
    const [newuser, setNewuser] = useState({
        username: '',
        email: '',
        id: '',        
        signIn: false,
        pricingInform: false
    });
    const [showpassword, setShowpassword] = useState(false);


    async function addUser() {        
        try {            
            const response = await axios.post<IUser>('https://jsonplaceholder.typicode.com/users/posts')      //another url needed!!!      
            console.log('SUCCESS!!!', response.data) 
            
        } catch(e:unknown) {
            const error = e as AxiosError   
            console.log(error)         
        }
    }
    useEffect(() => {
        addUser()
    }, [])

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        setNewuser({ ...newuser, [event.currentTarget.name]: event.currentTarget.value });
    };

    const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {    
        const checkbox =  document.getElementById(e.currentTarget.id) as HTMLInputElement        
        checkbox.checked ? setNewuser({...newuser, [e.target.name]: true}) : setNewuser({...newuser, [e.target.name]: false})
    }

    const handleSubmit = async (event: React.FormEvent) => {        
        event.preventDefault(); 
        addUser()
        
        setNewuser({ username: "", email: "", id: "", signIn: false, pricingInform: false });
        setShowpassword(false); 
    }
    
    
    
//================================================== show password============================================================

    const togglePassword =(event: React.MouseEvent<HTMLButtonElement>)=>{     
        event.preventDefault();        
        setShowpassword(!showpassword); 
    }
//=============================================================================================================================

    return (
        <div className='background__linear'>
            
            <img src={image} alt='logo' className='logo sign_logo'></img>
            <h3 className='header_22'> Sign Up For Free </h3>
            <form className='sign_form' onSubmit={handleSubmit}>
                <div className='input__icon input__profile'>
                    <Input 
                        type= 'text'
                        name= 'login'
                        placeholder= 'Login...'
                        value={newuser.username}
                        onChange= {(e) => handleChange(e)}
                    />                        
                </div>
                <div className='input__icon input__message'>
                    <Input 
                        type= 'email'
                        name= 'email'
                        placeholder='Email'
                        value= {newuser.email}
                        onChange= {(e) => handleChange(e)}
                    />                    
                </div>
                <div className='input__icon input__lock flex flex-row input__lock_group'>
                    <Input 
                        type= 'password'
                        name= 'password'
                        placeholder= 'Password'
                        value= {newuser.id}
                        onChange= {(e) => handleChange(e)}
                    />
                    <div >
                        <button className='button__eye' onClick={(e) => togglePassword(e)}>                         
                        </button>
                    </div>
                </div>
            
                <div className='checkbox__group'>
                    <Checkbox 
                        id='signIn'
                        name='signIn'
                        checked={newuser.signIn}                        
                        onChange={(e) => handleClick(e)}                        
                    />                    
                    <label htmlFor="signIn" className='text__12__normal grey'>Keep Me Signed In</label>
                </div>
                <div>
                    <Checkbox 
                        id='pricingInform'
                        name='pricingInform'
                        checked={newuser.pricingInform}                        
                        onChange={(e) => handleClick(e)}
                    />  
                    
                    <label htmlFor="pricingInform" className='text__12__normal grey'> Email Me About Special Pricing</label>
                </div>                               
                <Button link= '/' type= 'submit' text= 'Create Account' />     
            </form>
            <div className='sign_text'>
                <Link to="/signin" className='text__12__normal green'>Already Have an Account?</Link> 
            </div>
        </div>
    )
}