import { styled } from "styled-components"

const TagSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: var(--alice-blue-2);
    height: 400px;
    width: 100%;
    gap: 100px;
    padding: 150px;

    img{
        width: 400px;
        height: 400px;
        flex: 1;
    }
`

const TextSection = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`

export function ThirdSection(){
    return(
        <TagSection>
            <img src="/comparativo_img_CTA.png" />
            <TextSection>
                <h1>Pronto para triplicar sua <strong>Geração de Leads?</strong></h1>
                <p>Criação e ativação em <strong>4 minutos</strong>.</p>
            </TextSection>
        </TagSection>
        )
}