import { useState } from 'react'
import { useCartContext } from '../../context/cartContext';
import Cart from '../Cart';
import * as S from './styles'

export default function Header() {
    const [toggleCartWindow, setToggleCartWindow] = useState(false);
    const { cart } = useCartContext();

    return (
        <S.HeaderContainer>
            <img className='cursor-pointer' src="/assets/logo.svg" alt="sneakers logo" loading='lazy' />
            <S.NavItems>
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </S.NavItems>
            {cart.qty > 0 ? (
                <S.CartArea>
                    <div className='cartNotification'>{cart.qty}</div>
                    <img 
                        className='cursor-pointer' 
                        src="/assets/icon-cart.svg" 
                        alt="icon cart sneakers" 
                        loading='lazy'
                        onClick={() => setToggleCartWindow(prevState => !prevState)}
                    />
                </S.CartArea>
            ) : (
                <img 
                    className='cursor-pointer' 
                    src="/assets/icon-cart.svg" 
                    alt="icon cart sneakers" 
                    loading='lazy'
                    onClick={() => setToggleCartWindow(prevState => !prevState)}
                />
            )
            }
            <S.AvatarImage src="/assets/image-avatar.png" alt="avatar customer sneakers" loading='lazy' />
            {toggleCartWindow && <Cart />}
        </S.HeaderContainer>
    )
}