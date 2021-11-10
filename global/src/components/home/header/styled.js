import styled from 'styled-components';

export const  HeaderStyled = styled.header`
    width: 100%;
    position: absolute;
    top: 10px;
    color: white;
    p{
        font-family: Poppins;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 3px;
        text-align: left;
    }
    img{
        width: 80px;
        height: 80px;
    }
    .header-container{
        display: flex;
        justify-content: center;
        width: 100%;
    }
    .header-page{
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

`
export const NavStyled = styled.nav`
        padding:2rem;
        display:flex;
        justify-content: space-between;
        align-items:center;
        height: 20px;
        margin-top:2rem;
        margin-bottom: 2rem;

        display: flex;
        flex-direction: row;
        justify-content: space-around;
        #project{
            font-weight: 700;
            font-size: 2rem;
            margin-left: 2.5rem;
            transition: all 0.4s ease-in-out;
            &:hover{
                transform: scale(1.1);
            }
            @media(max-width: 480px){
                font-size: 20px;
            }
        }
        .nav-item{
            font-family: 'poppins';
            font-weight: 400;
            font-size: 1.2rem;
            color: #fff;
            text-decoration: none;
            transition: all 0.4s ease-in-out;
            &:hover{
                transform: scale(1.2);
            }
        }
`
export const BurgerStyled = styled.div`
/* Position and sizing of burger button */
.bm-burger-button {
position: absolute;
width: 36px;
height: 30px;
left: 36px;
top: 42px;
transition: all 0.4s ease-in-out;
&:hover {
    transform: scale(1.2);
}
}

/* Position and sizing of clickable cross button */
.bm-cross-button {
height: 24px;
width: 24px;
margin-top: -40px;
margin-right: 40px;
transition: all 0.3s ease-in-out;
}
.bm-cross-button:hover {
    transform: scale(1.2);
}

/*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
.bm-menu-wrap {
    height: 100vh ;
}

/* General sidebar styles */
.bm-menu {
background: linear-gradient(100deg, #a8e 2%, #a8c0ff 98%) !important;
-webkit-box-shadow: 2px 2px 15px 5px rgba(0,0,0,0.3); 
    box-shadow: 2px 2px 15px 5px rgba(0,0,0,0.3);
padding: 2.5em 0 0 0 !important;
font-size: 1.15em !important;
font-family:'popping', sans-serif;
height: 120vh !important;
margin-top: -4rem !important;
margin-left: -2rem !important;
margin-right: 2rem !important;
overflow: hidden !important; 

/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
    fill: #373a47;
}

/* Wrapper for item list */
.bm-item-list {
    padding: 2em 1em 2em;
}

.menu-item{
    display:flex;
    flex-direction: column;
    align-items: center;
    font-family: 'poppins';
    font-weight: 400;
    font-size: 1.2rem;
    color: #fff;
    text-decoration: none;
    transition: all 0.4s ease-in-out;
}
.items{
    display:grid;
    place-items: center;
}
.icon{
    display:flex;
    width: 30%;
    margin: 0 auto;
}

/* Individual item */
.bm-item {
    padding: 1rem;
    transition: all 0.3s ease-in-out;
    &:hover {
    background: #ffc2e2;
    border: none !important;
    padding: 1em 1.5em 1em !important;
    border-radius: 0 !important;
}
}
.bm-overlay {
    margin-top: -4rem !important;
}
}
`
