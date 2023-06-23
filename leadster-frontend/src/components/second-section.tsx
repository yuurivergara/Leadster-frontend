import { styled } from "styled-components"

const TagSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400px;
`

export function SecondSection(){
    return(
        <TagSection>
            <h1>AQUI</h1>
        </TagSection>
    )
}