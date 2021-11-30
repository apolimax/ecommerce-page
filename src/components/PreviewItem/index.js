import * as S from './styles'

export default function PreviewItem({ imagePathThumb, id, imagePath, setActivePreview, gallery, setGallery, active }) {
    
    function updatePreviewImage() {
        const newGallery = gallery.map((item) => {
            return {
                ...item,
                active: item.id === id ? true : false
            }
        });

        setGallery(newGallery);
        setActivePreview(imagePath);
    }
    
    return (
        <S.ImagePreviewItem 
            src={imagePathThumb} 
            alt="image gallery" 
            onClick={() => updatePreviewImage()} 
            active={active}
        />        
    )

}