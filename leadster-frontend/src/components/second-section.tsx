import { styled } from "styled-components"
import { FilterSection } from "./filter-section"
import { VideoList } from "./video-list"

const TagSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400px;
`
const HorizontalLine = styled.div`
    border: 1px solid var(--platinum);
    width: 100%;
`

export function SecondSection(){
    return(
        <TagSection>
            <FilterSection/>
            <HorizontalLine />
            <VideoList />
        </TagSection>
    )
}