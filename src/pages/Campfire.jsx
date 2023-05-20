import React, {useState} from 'react'
import MobileLayout from '../components/common/MobileLayout';
import { styled } from 'styled-components';
import mainLogo from '../assets/images/mainLogo.png'
import MainBtn from '../components/common/MainBtn';
import Modal from '../components/modal/Modal';


function Campfire() {

  const [isModal,setModal] = useState(false);

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

      <MainBtn onClick={()=>{setModal(true)}}>맞담할 사람 구함 </MainBtn>

      {isModal? <Modal setModal={setModal}/> : ``}

    </MobileLayout>
  )
}

export default Campfire


const Header = styled.header`
  margin-top: 2.5rem;

  font-family: 'SangSangShinb7';
  font-style: normal;
  font-size: 3rem;
  line-height: 2.6rem;
  /* identical to box height */
  text-align: center;
  letter-spacing: 0.16em;

  color: #4D4D49;

  & > span {
    font-family: 'SangSangShinb7';
    font-style: normal;
    font-weight: 900;
    font-size: 3rem;
    line-height: 2.6rem;
    /* identical to box height */
    text-align: center;
    letter-spacing: 0.16em;

    color: #4D4D49;
  }

`

const Title = styled.h1`
  margin-top : 3rem;

  font-family: 'SangSangShinb7';
  font-style: normal;
  font-size: 4.5rem;
  line-height: 3.6rem;
  /* or 129% */
  text-align: center;

  /* black */
  color: #4D4D49;
`

const ImgWrapper = styled.section`
  margin: 11.3rem 0rem;


  & > img {
    width: 9rem;
    height: 9rem;
  }
`