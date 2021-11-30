import styled from "styled-components";

export const ImagePreviewItem = styled.img`
    margin-top: 30px;
    height: 80px;
    width: auto;
    border-radius: 10px;
    cursor: pointer;
    opacity: ${props => props.active ? '0.7' : '1'};
    border: ${props => props.active ? `3px solid ${props.theme.colors.primary.orange}` : ''};

    &:hover {
        opacity: 0.7;
    }
`