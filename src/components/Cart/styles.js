import styled from "styled-components";

export const CartContainer = styled.div`
    position: absolute;
    right: 0px;
    top: 100px;
    width: 400px;
    padding: 10px 20px;
    -webkit-box-shadow: 1px 10px 15px -3px rgba(0,0,0,0.55); 
    box-shadow: 1px 10px 15px -3px rgba(0,0,0,0.55);

    background-color: #FFF;
    border-radius: 8px;
    
    & > p {
        padding-bottom: 20px;
    }
    
    img {
        width: 50px;
        border-radius: 5px;
    }

    .checkoutBtn {
        margin-top: 20px;
        width: 100%;
        background-color: ${props => props.theme.colors.primary.orange};
        color: ${props => props.theme.colors.neutral.white};
        font-weight: bold;
        border: none;
        border-radius: 4px;
        padding: 15px 30px;
    }

    `

export const CartItemInfo = styled.div`
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .cartNameIcon {
        width: 15px;
        cursor: pointer;
    }
    
`