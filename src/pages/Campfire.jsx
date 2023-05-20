import React from 'react'
import MobileLayout from '../components/common/MobileLayout';
import { styled } from 'styled-components';
import mainLogo from '../assets/images/mainLogo.png'


function Campfire() {
  return (
    <MobileLayout>
      <Header>
        <span>1/10</span>
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
  margin-top: 2.5rem;

  font-family: 'SangSangShinb7';
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.6rem;
  /* identical to box height */
  text-align: center;
  letter-spacing: 0.16em;

  color: #4D4D49;

  & > span {
    font-family: 'SangSangShinb7';
    font-style: normal;
    font-weight: 900;
    font-size: 2rem;
    line-height: 2.6rem;
    /* identical to box height */
    text-align: center;
    letter-spacing: 0.16em;

    color: #4D4D49;
  }

`

const Title = styled.h1`
  font-family: 'SangSangShinb7';
  font-style: normal;
  font-weight: 400;
  font-size: 2.8rem;
  line-height: 3.6rem;
  /* or 129% */
  text-align: center;

  /* black */
  color: #4D4D49;
`

const ImgWrapper = styled.section`

`