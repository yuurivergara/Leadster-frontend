'use client'
import {styled} from 'styled-components'
import {SocialIcon} from 'react-social-icons';

const TagFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%; 
    padding: 40px;
    flex-direction: column;
`

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 300;
    font-size: 10px;
    gap: 4px;
    margin-bottom:30px;

`
const ShortCuts = styled.div`
    display: flex;
    max-width: 100vw;
    gap:150px;

    >div {
        display: flex;
        flex-direction: column;
        gap: 10px;

        h1{
            font-size: 12px;
            margin-bottom: 30px;
        }

        a, p{
            margin-bottom:10px ;
            color: gray;
            font-size: 12px;
            text-decoration: none;
        }
        

    }
`
    
export function Footer(){
    return(
        <TagFooter>
            <Title>
                <img src="/logo.png" alt="logofooter" width={150} />
                <p>Transformando visitantes em clientes.</p>
            </Title>
            <ShortCuts>
                <div>
                    <h1>Links Principais</h1>
                    <a href="#">Home</a>
                    <a href="#">Ferramenta</a>
                    <a href="#">Preços</a>
                    <a href="#">Contato</a>
                </div>
                <div>
                    <h1>Cases</h1>
                    <a href="#">Geração de leads B2B</a>
                    <a href="#">Geração de leads em Software</a>
                    <a href="#">Geração de leads em Imobiliaria</a>
                    <a href="#">Cases de Sucesso</a>
                </div>
                <div>
                    <h1>Materiais</h1>
                    <a href="#">Blog</a>
                    <a href="#">Parceria com Agências</a>
                    <a href="#">Guia Definitivo do Marketing</a>
                    <a href="#">Materiais Gratuitos</a>
                </div>
                <div>
                    <h1>Siga a Leadster</h1>
                    <div>
                        <SocialIcon className='SocialIcon' url="https://www.linkedin.com/company/leadster-platform/" bgColor='#f5f5f5' fgColor='#787675'/>
                        <SocialIcon url="https://www.facebook.com/leadsterplatform/?locale=pt_BR" bgColor='#f5f5f5' fgColor='#787675'/>
                        <SocialIcon url="https://www.instagram.com/leadster.com.br/" bgColor='#f5f5f5' fgColor='#787675'/>
                    </div>
                    <p><strong>E-mail:</strong> contato@leadster.com.br</p>
                    <p><strong>Telefone:</strong>(42) 98828-9851 </p>
                </div>
            </ShortCuts>
        </TagFooter>
    )
}