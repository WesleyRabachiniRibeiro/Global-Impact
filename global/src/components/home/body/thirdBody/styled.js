import styled from 'styled-components'

export const SectionStyled = styled.section`
    background-color: #d0444c;
    display: flex;
    justify-content: center;
    height: auto;

    .container{
        /* padding-top: 70px; */
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        height: auto;
    }
`

export const FoodStyled = styled.div`
    width: auto;
    h1{
        color: #fff;
        margin: 0;
        padding-bottom: 10px;
        font-size: 68px;
        font-weight: 700;  
    }
    h2{
        color: #fff;
        margin: 0;
        padding-bottom: 20px;
        font-size: 42px;
        font-weight: 700;    
    }
    .food{
        display: flex; 
        flex-direction: column;
        text-align: center;
        height: 100%;
    }
    .food__img{
        height: 100%;
    }
    .food__img img{
        width: 333px;
        height: 100%;
        object-fit: cover;
    }
`

export const InfoStyled = styled.div`
    width: 50%;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    p{
        color: #fff;
        font-size: 20px;
        letter-spacing: 2px;
        line-height: 1.25;
        margin-bottom: 36px;
    }
    .title__info{
        display: flex;
        
    }
    .info__pai{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .info__filha{
        width: 350px;
    }
    .info__filha h1{
        color: #fff;
        font-size: 36px;
        margin-bottom: 30px;
    }
    .info__filha p{
        margin-bottom: 36px;
        letter-spacing: 2px;
        line-height: 1.25;
    }
    
`