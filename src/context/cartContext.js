import { createContext, useContext, useState } from 'react'

const cartContext = createContext();

export default function ContextProvider({ children }) {
    const galleriesPath = [
        {id: 1, pathImageThumb: '/assets/image-product-1-thumbnail.jpg', pathImage:'/assets/image-product-1.jpg', active: true, count: 0 },
        {id: 2, pathImageThumb: '/assets/image-product-2-thumbnail.jpg', pathImage:'/assets/image-product-2.jpg', active: false, count: 0 },
        {id: 3, pathImageThumb: '/assets/image-product-3-thumbnail.jpg', pathImage:'/assets/image-product-3.jpg', active: false, count: 0 }, 
        {id: 4, pathImageThumb: '/assets/image-product-4-thumbnail.jpg', pathImage:'/assets/image-product-4.jpg', active: false, count: 0 }
    ];

    const [cart, setCart] = useState({});
    const [gallery, setGallery] = useState(galleriesPath);

    return (
        <cartContext.Provider value={{cart, setCart, gallery, setGallery}}>
            {children}
        </cartContext.Provider>
    )
}

export function useCartContext() {
    const { cart, setCart, gallery, setGallery } = useContext(cartContext);

    return {
        cart, 
        setCart, 
        gallery, 
        setGallery
    }
}