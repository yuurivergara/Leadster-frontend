'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { styled } from 'styled-components'

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  `
const FirstSection = styled.div`
  display: flex;
  height: 400px;
  background-color: azure;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export default function Home() {
  return (
    <PageWrapper>
      <FirstSection>
        <p>OLAAAA</p>
      </FirstSection>
    </PageWrapper>
  )
}
