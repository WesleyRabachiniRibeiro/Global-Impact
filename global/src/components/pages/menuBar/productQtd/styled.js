import styled from 'styled-components'

export const ProductStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    h1{
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: 47px;
        color:rgba(10, 55, 110, 1);
    }
    .all-titles{
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 30px;
    }
    .all-titles h1{
        width: 80%;
    }
    .subtitle{
        font-family: 'Poppins';
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: 19px;
        letter-spacing: 3px;
    }
    .product-board{
        margin-top: 40px;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
    .product-count{
        width: 200px;
        margin-bottom: 20px;
    }
    .product-count:nth-child(2){
        width: calc(200px + 150px);
        padding: 0px 75px;
        border: 1px solid #DDDDDD;
        border-top: 0;
        border-bottom: 0;
    }
    .product-count h2{
        font-size: 28px;
    }
    .product-count p{
        color: rgba(142, 142, 142, 1);
        font-family: 'ABeeZee';
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
    }
    .product-count div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
    }
    .positive{
        svg{
            fill: #7DC932;
        }
        background-color: rgba(195, 238, 131, 1);
        span{
            color: rgba(72, 144, 25, 1);
        }
    }
    .negative{
        svg{
            fill: #FC5569;
        }
        background-color: rgba(254, 159, 153, 1);
        span{
            color: rgba(181, 42, 84, 1);
        }
    }

    .positive, .negative{
        border-radius: 5px;
        span{
            padding: 2px 5px;
        }
    }
    @media(max-width: 1200px){
        h1{
            margin-left: 30px;
        }
    }
    @media(max-width: 900px){
        h1{
            margin-left: 0px;
        }
        .all-titles{
            flex-direction: column;
        }
        .all-titles h1{
            text-align: center;
            font-size: 30px;
            width: 79%;
        }
        .product-board{
            align-items: center;
            flex-direction: column;
        }
        .product-count:nth-child(2){
            border: 1px solid #DDDDDD;
            padding: 20px 0;
            width: 200px;
            border-right: hidden;
            border-left: hidden;
        }
    }
`