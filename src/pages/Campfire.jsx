import React from 'react'
import MobileLayout from '../components/common/MobileLayout';
import { styled } from 'styled-components';
import mainLogo from '../assets/images/mainLogo.png'


function Campfire() {
  return (
    <MobileLayout>
      <Header>
        <span>1</span>/10
      </Header>
      <Title>
      담배 메이트 초대해서<br/>불을 더 활활 지펴보자고
      </Title>

      <ImgWrapper>
        <img src={mainLogo} alt="걍 png"/>
      </ImgWrapper>

      <button>맞담할 사람 구함 </button>

    </MobileLayout>
  )
}

export default Campfire


const Header = styled.header`

`

const Title = styled.h1`
`

const ImgWrapper = styled.section`

`