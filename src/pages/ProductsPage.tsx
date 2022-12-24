import { Product } from '../components/Product';
import { useProducts } from '../hooks/products';
//import { Loader } from '../components/Loader';
//import { ErrorMessage } from '../components/ErrorMessage';
import { Modal } from '../components/Modal';
import { CreateProduct } from '../components/CreateProduct';
import { useContext } from 'react';
import { IProduct } from '../models';
import { ModalContext } from '../context/ModalContext';

export function ProductsPage() {
    const {products,  addProduct} = useProducts()
    const {modal, open, close} = useContext(ModalContext)

    const createHandler = (product: IProduct) => {
        close()
        addProduct(product)
    }
    
    return (
        <div className="container mx-auto max-w-2xl pt-5">
            
            { products.map(product => 
                <Product product={product} key={product.id} />
            )}
            
            { modal && <Modal title="Create New Product" onClose={close}>
                <CreateProduct onCreate={createHandler}/>
            </Modal> }
            <button className='fixed bottom-5 right-5 rounded-full bg-red-400 text-white text-2xl px-6 py-2' onClick={open} >Add Product</button>
        </div>
    )
}