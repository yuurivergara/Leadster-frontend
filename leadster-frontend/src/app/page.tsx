'use client'
import { FirstSection } from '@/components/first-section'
import { ThirdSection } from '@/components/third-section'
import { SecondSection } from '@/components/second-section'
import { styled } from 'styled-components'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { useContext } from 'react'
import { FilterContext } from '@/contexts/FilterContext'
import ReactPlayer from 'react-player'


const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
`

const Modal = styled.div`
    display: flex;
    width: 100vw;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    position: fixed;
    align-items: center;
    justify-content: center;
`

const VideoSection = styled.section`
  display: flex;
  background-color: white;
  width: 35%;
  opacity: none;
  flex-direction: column;
  align-items: center;
  border-radius: 24px;
  border-top: 6px solid var(--dodger-blue);

  h1{
    font-family: inherit;
    padding: 18px;
    font-size: 18px;

    span{
      color: var(--dodger-blue);
    }
  }

  @media(max-width: 1200px){
    width: 80%;
  }
`

const XButton = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  position: absolute;
  right: 35%;
  top: 5%;

  @media (max-width: 1200px){
        right: 15%;
        top:6%
    }
`
const HorizontalLine = styled.div`
    border: 1px solid var(--platinum);
    width: 100%;
    margin: 10px 0px;
`

const IconSection = styled.section`
  display: flex;
  gap: 10px;
  width: 100%;

  
  button{
    @media (max-width: 968px){
        font-size: 10px;
    }
    display: flex;
    opacity: 0.6;
    border: none;
    border-radius: 2px;
    font-size: 12px;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding-right: 8px;
    cursor: pointer;

    &.buttonone{
      background-color: #46D0B6;
    }

    &.buttontwo{
      background-color: #C2E6FF;
    }

    &.buttonthree{
      background-color: #FFF8D0;
    }

    img{
      border-radius: 4px;

      &.one{
        background-color: #9FEFDF;
      }

      &.two{
        background-color: #A1D9FF;
      }

      &.three{
        background-color: #FFF1A0;
      }
    }
  }
`

const Description = styled.div`
padding: 20px;
font-family: inherit;
font-weight: 600;
color: #1D3C51;
width: 100%;
  h2{
    font-family: inherit;
    font-size: 14px;
  }

  p{
    font-size: 12px;
    margin-bottom: 5px;
  }
`

export default function Home() {
  const {isOpen,currentTitle, currentUrl,setIsOpen} = useContext(FilterContext)
  return (
    <PageWrapper>
      <Header/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <Footer />
      {isOpen &&
      <Modal>
        <VideoSection>
          <XButton onClick={
            () => setIsOpen(false)
          }>
            <img src="/x.svg" width={15} height={15} />
          </XButton>
          <h1><span>Webnar:</span>{currentTitle}</h1>
          <ReactPlayer url={currentUrl} width={'100%'} />
          <Description>
            <h2>Descrição</h2>
            <HorizontalLine/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores molestias dignissimos dicta doloribus ut, nostrum officiis nesciunt qui corrupti illum fuga modi recusandae a sunt voluptatum, consequatur mollitia ratione omnis.</p>
            <h2>Downloads</h2>
            <HorizontalLine/>
            <IconSection>
              <button className='buttonone'>
                <img src="/cloud-download.svg" className='one'  width={30} height={20}/>
                Spreadsheet.xls
              </button>
              <button className='buttontwo'>
                <img src="/cloud-download.svg" className='two'  width={30} height={20}/>
                Document.doc
              </button>
              <button className='buttonthree'>
                <img src="/cloud-download.svg" className='three'  width={30} height={20}/>
                Presentation.ppt
              </button>
            </IconSection>
          </Description>
        </VideoSection>
      </Modal>
      }
    </PageWrapper>
  )
}
