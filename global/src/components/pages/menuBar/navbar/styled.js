import styled from 'styled-components'

export const DashboardStyled = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fafafa;
    font-family: 'ABeeZee', sans-serif;
    min-height: 100vh;
    font-family: 'ABeeZee';
    margin-left: 280px;
    @media(max-width: 1200px){
        &{
            margin-left: 0;
        }
    }
`

export const MenuStyled = styled.nav`
    position: fixed;
    width: 280px;
    min-height: 100vh;
    border-right: 1px solid #DDD;
    background-color: #fafafa;
    font-family: 'ABeeZee', sans-serif;
    .menu-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        width: 100%;
    }
    .logo{
        width: 77px;
        height: 67px;
    }
    .option-menu{
        display: flex;
        width: auto;
        margin-left: 15px;
        padding: 10px 20px;
        border-radius: 20px;
        color: #0C4284;
        font-size: 18px;
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
    .icon{
        margin-right: 10px;
    }
`
export const BurgerDashboardStyled = styled.nav`
    position: absolute;
    top: 38px;
    left: 10px;
`

