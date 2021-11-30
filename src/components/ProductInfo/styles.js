import styled from "styled-components";

export const ProductInfoContainer = styled.div`
    margin-top: 55px;
    max-width: 400px;
    h4 {
        color: ${props => props.theme.colors.primary.orange}
        }
    
    h1 {
        margin-top: 20px;
        color: ${props => props.theme.colors.neutral.black}
    }

    p {
        margin-top: 45px;
    }

    .formerPrice {
        text-decoration: line-through;
        margin-top: 10px;
    }
`

export const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;

    div:first-child {
        font-size: 1.5rem;
        font-weight: bold;
        color: ${props => props.theme.colors.neutral.black};
    }
    
    div:nth-child(2) {
        margin-left: 20px;
        background-color: ${props => props.theme.colors.primary.paleOrange};
        color: ${props => props.theme.colors.primary.orange};
        font-weight: bold;
        padding: 4px 5px;
        border-radius: 5px;
    }
    `

export const AddToCart = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;

    .setCartCount {
        background-color: ${props => props.theme.colors.neutral.lightGrayishBlue};
        color: ${props => props.theme.colors.primary.orange};
        font-weight: bold;
        font-size: 1rem;
        border: none;
        border-radius: 3px;
        width: 35px;
        height: 45px;
    }
    
    input {
        background-color: ${props => props.theme.colors.neutral.lightGrayishBlue};
        border: none;
        border-radius: 3px;
        font-weight: bold;
        width: 60px;
        height: 45px;
        text-align: center;
    }
    
    .addBtn {
        margin-left: 10px;
        background-color: ${props => props.theme.colors.primary.orange};
        color: ${props => props.theme.colors.neutral.white}; 
        border: none;
        border-radius: 4px;
        width: 200px;
        font-weight: bold;
        padding: 15px 30px;
        box-shadow: 1px 8px 28px -8px rgba(255,125,26,0.75);
        -webkit-box-shadow: 1px 8px 28px -8px rgba(255,125,26,0.75);
        -moz-box-shadow: 1px 8px 28px -8px rgba(255,125,26,0.75);

        display: flex;
        align-items: center;
        justify-content: center;
        
        span {
            margin-left: 10px;
        }
    }
`