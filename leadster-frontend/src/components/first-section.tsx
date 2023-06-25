'use client'

import {styled} from 'styled-components';

const TagSection = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--alice-blue-2);
    height: 400px;

    

    h2{
        font-weight: 500;
        font-size: 40px;
        color: #1D3C51;
    }

    h1{
        color: var(--steel-blue);
        font-size:60px;
        img{
            position: absolute;
            margin-left: -25px;
            margin-top: 5px;
            width: 35px;
        }
    }

    p{
        color: #1D3C51;
        font-size: 13px;
        margin-top: 10px;
        font-weight: 600;
    }

    @media (max-width: 968px) {
    h2{
        font-size: 30px;
    }

    h1{
        font-size: 50px;
    }
    p{
        font-size: 10px;
    }
    }   
`

const HorizontalLine = styled.div`
    border: 0.1px solid var(--platinum);
    width: 100%;
`
const Exclusive = styled.div`
    display: flex;
    border: 2px solid;
    border-color: var(--steel-blue);
    padding: 3px 15px;
    border-radius: 10px 10px 10px 0px;
    align-items: center;
    justify-content: center;
    span{
        color: var(--steel-blue);
        font-size: 10px;
        font-weight: 800;
    }
`
export function FirstSection(){
    return(
        <TagSection>
            <Exclusive>
                <span>WEBINARS EXCLUSIVOS</span>
            </Exclusive>
            <h2>
                Menos Conversinha,
            </h2>
            <h1>
                Mais Conversão <img src="/asset-header.png" />
                <HorizontalLine />  
            </h1>
            <p>Conheça as estratégias que <strong>mudaram o jogo</strong> e como aplicá-las no seu negócio</p>
        </TagSection>
    )
}