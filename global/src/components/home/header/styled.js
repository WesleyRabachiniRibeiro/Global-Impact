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
    .logo{
        width: 70px;
        height: 70px;
        margin-left: 55px;
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
    .burger-menu-pointer{
        cursor: pointer;
    }
    @media(max-width: 1200px){
        p{
            display: none;
        }
    }

`
export const BurgerStyled = styled.div`
/* Position and sizing of burger button */

    .bm-burger-button {
        cursor: pointer!important;
        width: 36px;
        height: 30px;
        transition: all 0.4s ease-in-out;
        &:hover {
            transform: scale(1.2);
        }
    }
    .bm-burger-button button{
        width: 36px!important;
        height: 30px!important;
    }


    /* Position and sizing of clickable cross button */
    .bm-cross-button {
        margin-top: 0;
        margin-right: 40px;
        transition: all 0.3s ease-in-out;
    }
    .bm-cross-button:hover {

        transform: scale(1.1);
    }

    /*
    Sidebar wrapper styles
    Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
    */
    .bm-menu-wrap {
        height: 100vh ;
        position: absolute;
        top: 0px;
        left: 0px;
    }

    /* General sidebar styles */
    .bm-menu {
        background: #fafafa !important;
        -webkit-box-shadow: 2px 2px 15px 5px rgba(0,0,0,0.3); 
        box-shadow: 2px 2px 15px 5px rgba(0,0,0,0.3);
        font-size: 1.15em !important;
        height: 100vh !important;
        font-family: 'ABeeZee', sans-serif;
        overflow: hidden !important; 
        width: 279px;
    }

    /* Wrapper for item list */
    .items:hover{
        background-color: #DAE9FC;
        color: #1473E6;
    }

    /* Individual item */
    .bm-item-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        cursor: default;
    }
    .logo-menu{
        width: 77px;
        height: 67px;
    }
    .logo-menu .logo{
        margin-left: 0;
    }
    .option-menu{
        display: flex!important;
        justify-content: space-between!important;
        width: 158px;
        padding: 10px 20px;
        border-radius: 20px;
        color: #0C4284;
        font-size: 18px;
        text-align: left;
        font-style: normal;
        font-weight: 400;
        line-height: 21px;
        text-decoration: none;
    }
    .option-menu:hover{
        background-color: #DAE9FC;
        color: #1473E6;
        cursor: pointer;
    }
    .option-menu a{
        width: 90px;
        text-align: start;
    }
    a{
        color: #0C4284;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 21px;
        text-decoration: none;
    }
    .option-menu, .logo-menu{
        margin-top: 30px;
    }
    .option-menu:last-child{
        justify-self: flex-end;
    }

`
