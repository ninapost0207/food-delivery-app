import { useEffect, useState } from 'react';
import axios, {AxiosError} from 'axios';
import { IUser } from '../models';

export function useUsers() {
    const [users, setUsers] = useState<IUser[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    function checkUser({email, password}: IUser) {
        //setProducts(prev => [...prev, product])
        users.map(user => {
            user.email === email && user.password === password ? console.log('success') : console.log('not matched')
            return
        })
    }

    async function fetchUsers() {
        try {
            setError('')
            setLoading(true)
            const response = await axios.get<IUser[]>('https://console.firebase.google.com/project/delivery-app-e1976/database/delivery-app-e1976-default-rtdb/data/~2F')
            console.log(response.data)
            setLoading(false)
        } catch(e:unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
        
    }

    useEffect(() => {
        fetchUsers()
    }, [])
}