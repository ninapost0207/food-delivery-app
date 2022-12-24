import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import image from '../../assets/images/logo.png';
import facebook from '../../assets/icons/facebook.png';
import google from '../../assets/icons/google.png';
import { Input } from '../elements/Input';
import { Button } from '../elements/Button';
import { IUser } from '../../models';


export function SignInPage () {
    const [user, setUser] = useState<IUser>({
        email: '',
        password: ''
    });
    const [users, setUsers] = useState<IUser[]>([])
    const [checked, setChecked] = useState(false)

    
    async function fetchUsers() {        
        try {            
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')            
            setUsers(response.data) 
            
        } catch(e:unknown) {
            const error = e as AxiosError   
            console.log(error)         
        }
    }
    useEffect(() => {
        fetchUsers()
    }, [])


    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        setUser({ ...user, [event.currentTarget.name]: event.currentTarget.value });        
    };
    


    const handleSubmit = (event: React.FormEvent) => {        
        event.preventDefault();   
        fetchUsers() 

        users.map(item => {
            if(item.email === user.email) {
                console.log(item)
                setChecked(true)               
                
            }  else{                
                setChecked(false)
                setUser({ email: "", password: "" });
            }             
        })
               
        setUser({ email: "", password: "" });
    };

 
    
    return (
        <div className='background__linear'>            
            <img src={image} alt='logo' className='logo sign_logo'></img>
            <h3 className='header_22'>
                Login To Your Account                
            </h3>
            <form className='sign_form' onSubmit={handleSubmit}>
                <Input 
                    type= 'email'
                    name= 'email'
                    placeholder= 'email'
                    value= {user.email}
                    onChange= {(e) => handleChange(e)}
                />
                <Input 
                    type= 'password'
                    name= 'password'
                    placeholder= 'password'
                    value= {user.password}
                    onChange= {(e) =>handleChange(e)}
                />
                                  
            
                <h4 className='subheader'>Or Continue With</h4>
                <div className='flex flex-row space-between align-center'>
                    <a href="https://www.facebook.com/" className='flex flex-row justify-center align-center icon-group'>
                        <img src={facebook} alt='facebook' className='icon'></img>
                        Facebook
                    </a>
                    
                    <a href="https://www.google.com/" className='flex flex-row justify-center align-center icon-group'>
                        <img src={google} alt='google' className='icon'></img>
                        Google
                    </a>
                </div>
                <p className='text__12__normal green center'>Forgot Your Password?</p>
                <Button link={checked ? '/' : "/signup"}  type='submit' text= 'Login' />            
            </form>   
        </div>
    )
}