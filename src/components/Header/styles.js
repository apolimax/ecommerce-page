import styled from 'styled-components'

export const HeaderContainer = styled.nav`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-top: 30px;
    padding-bottom: 40px;
    border-bottom: ${props => `1px solid ${props.theme.colors.neutral.grayishBlue}`};

    .cursor-pointer {
        cursor: pointer;
    }

    

`

export const NavItems = styled.ul`
    width: 650px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    li {
        cursor: pointer;
    }
`

export const CartArea = styled.div`
    position: relative;

    .cartNotification {
        position: absolute;
        top: -10px;
        right: -14px;
        background-color: ${props => props.theme.colors.primary.orange};
        color: #FFF;
        font-weight: bold;
        font-size: 0.8rem;
        width: 20px;
        height: 20px;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const AvatarImage = styled.img`
    height: 57px;
    width: 57px;
    cursor: pointer;
`
