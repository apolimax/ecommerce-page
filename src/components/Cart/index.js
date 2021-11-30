import { useCartContext } from '../../context/cartContext'
import * as S from './styles'

export default function Cart() {
    const { cart, setCart, gallery } = useCartContext();

    return (
        <S.CartContainer>
            <p>Cart</p>
            <hr />
            {cart.qty > 0 ? (
                <>
                    <S.CartItemInfo>
                        <img src={gallery[0].pathImageThumb} alt="cart item" />
                        <div>
                            <p>Fall Limited Edition Sneakers</p>
                            <p>${cart.price} x {cart.qty} <strong>${cart.price*cart.qty}</strong></p>
                        </div>
                        <img onClick={() => setCart({})} className='cartNameIcon' src='/assets/icon-delete.svg' alt="delete cart item" />
                    </S.CartItemInfo>
                    <button className="checkoutBtn">
                        Checkout
                    </button>
                </>
            ):(
                <p>Cart empty</p>
            )    
        }
        </S.CartContainer>
    )
}