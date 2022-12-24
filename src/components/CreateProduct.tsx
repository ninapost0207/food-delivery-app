import React, { useState } from "react"
import axios from 'axios'
import { IProduct } from "../models"
//import { ErrorMessage } from "./ErrorMessage"

const ProductData = {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 42,
        count: 10
    }
}

interface CreateProductProps {
    onCreate: (product: IProduct) => void
}

export function CreateProduct ({ onCreate }: CreateProductProps) {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')    

    const submitHandler = async (event: React.FormEvent) => {
        setError('')
        event.preventDefault()

        if(value.trim().length === 0) {
            setError('Please enter valid Title')
            return
        }

        ProductData.title = value
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', ProductData)
        onCreate(response.data)
    }

    return (
        <form onSubmit={submitHandler}>
            <input 
                type="text"
                className="border py-2 px-4 mb-2 w-full"
                placeholder="Enter product title..."
                value = {value}
                onChange={(event) => setValue(event.target.value)}
            />
            {error && <p>{error}</p>}
            <button type="submit" className="border py-2 px-4 bg-yellow-400 hover:text-white">Create</button>
        </form>
        
    )
}