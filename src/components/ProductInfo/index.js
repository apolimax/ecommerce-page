import { useState } from 'react';
import { useCartContext } from '../../context/cartContext'

import * as S from './styles'

export default function ProductInfo() {
    const { setCart } = useCartContext();
    const [cartCount, setCartCount] = useState(0);

    // const totalCount = cart.reduce((acc, curr) => {
    //     acc += curr.count
    //     return acc;
    // }, 0);

    
    // function addToCart() {
    //     const product = gallery.filter(item => item.id === currProductId);
    //     const cartAlreadyHasProduct = cart.find(item => item.id === currProductId);

    //     if (!!cartAlreadyHasProduct) {
    //         const newCart = cart.map(item => {
    //             if (item.id === currProductId) {
    //                 return {
    //                     ...item,
    //                     count: item.count + 1
    //                 }
    //             }
    //             return {
    //                 ...item,
    //             }
    //         })
    //         setCart(newCart);
    //     } else {
    //         const newCart = [...cart, product];
    //         setCart(newCart);
    //     }
    // }

    // function removeFromCart() {
    //     const product = gallery.filter(item => item.id === currProductId);
    //     const cartAlreadyHasProduct = cart.find(item => item.id === currProductId);
    // }


    return (
        <S.ProductInfoContainer>
            <h4>SNEAKER COMPANY</h4>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            <S.PriceContainer>
                <div>$125.00</div>
                <div>50%</div>
            </S.PriceContainer>
            <p className="formerPrice">$250.00</p>
            <S.AddToCart>
                <div>
                    <button className="setCartCount" onClick={() => setCartCount(prevState => prevState === 0 ? 0 : prevState - 1)}>-</button>
                    {/* <button className="setCartCount" onClick={removeFromCart}>-</button> */}
                    <input type="number" value={cartCount} readOnly />
                    {/* <button className="setCartCount" onClick={addToCart}>+</button> */}
                    <button className="setCartCount" onClick={() => setCartCount(prevState => prevState + 1)}>+</button>
                </div>
                <button className="addBtn" onClick={() => setCart({price: 125, qty: cartCount})}>
                    <img src="/assets/icon-cart-white.svg" alt="icon cart" />
                    <span>Add to cart</span>
                </button>
            </S.AddToCart>
        </S.ProductInfoContainer>
    )
}