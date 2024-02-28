import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import MenuItemCard from './MenuItemCard';
import { clearCart } from '../utils/store/slices/cartSlice';

function CartPage() {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = (e) => {
        dispatch(clearCart());
    };

    return (
        <div className='w-7/12 my-4 mx-auto min-h-[66.2vh]'>
            <h1 className='text-3xl font-bold text-center'>Cart</h1>
            {cartItems.length > 0 ? <button onClick={handleClearCart} className='mt-3 bg-orange-500 text-white font-bold text-base px-8 py-2'>Clear Cart</button> : null}
            {cartItems.length > 0 ? (
                <div className='mt-5'>
                    {cartItems.map(item => {
                        return <MenuItemCard key={item?.card?.info?.id} itemCardObj={item} />
                    })}
                </div>
            ) : (
                <div className='flex flex-col items-center mt-5'>
                    <h1 className='text-2xl font-bold text-slate-700 text-center'>Your cart is empty</h1>
                    <Link to="/"><button className='mt-3 bg-orange-500 text-white font-bold text-lg px-8 py-2'>Go to Home</button></Link>
                </div>
            )}
        </div>
    )
}

export default CartPage