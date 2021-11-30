import { useState } from 'react';
import { useCartContext } from '../../context/cartContext';
import PreviewItem from '../PreviewItem';
import * as S from './styles'

export default function Preview() {
    const { gallery, setGallery } =  useCartContext()
    const [activePreview, setActivePreview] = useState(!!gallery[0]?.pathImage ? gallery[0].pathImage : '');
    
    return (
        <S.PreviewContainer>
            <S.ImagePreview src={activePreview} loading='lazy' />
            <S.PreviewItemContainer>
                {gallery.map(item => (
                    <PreviewItem 
                        key={item.id} 
                        id={item.id} 
                        imagePathThumb={item.pathImageThumb} 
                        imagePath={item.pathImage} 
                        setActivePreview={setActivePreview}
                        gallery={gallery}
                        setGallery={setGallery}
                        active={item.active}
                    />
                    )
                )}
            </S.PreviewItemContainer>
        </S.PreviewContainer>
    )
}