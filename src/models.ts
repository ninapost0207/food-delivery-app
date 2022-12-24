export interface IProduct {
    id?: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
}

export  interface IUser {
    id?: number,
    email: string,
    password: string,
    login?: string,
    signIn?: boolean,
    pricingInform?: boolean,
    firstName?: string,
    lastName?: string,
    mobileNumber?: number
}