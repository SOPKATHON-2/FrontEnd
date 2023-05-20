import React, {useState} from 'react'
import MobileLayout from '../components/common/MobileLayout';
import { styled } from 'styled-components';
import mainLogo from '../assets/images/mainLogo.png'
import MainBtn from '../components/common/MainBtn';
import Modal from '../components/modal/Modal';

import { IMG_DATA } from '../assets/images';
import { PEOPLE_DATA } from '../assets/images/person';
import ImgPerson from '../assets/images/img_person.png';


function Campfire() {

  const [isModal,setModal] = useState(false);
  const num = 9;

  const PEOPLE_NUM_DATA = PEOPLE_DATA.slice(0,num);

  return (
    <MobileLayout>
      {PEOPLE_NUM_DATA.map((el)=><PersonImage key={el.x} x={el.x} y={el.y}><img src={ImgPerson} alt="사람이미지"/></PersonImage>)}

      <Header>
        <span>{num}</span>/10
      </Header>
      <Title>
      담배 메이트 초대해서<br/>불을 더 활활 지펴보자고
      </Title>

      <ImgWrapper>
        <img src={IMG_DATA[num-1]} alt="걍 png"/>
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
  font-weight: 500;
  line-height: 3.6rem;
  /* or 129% */
  text-align: center;

  /* black */
  color: #4D4D49;
`

const ImgWrapper = styled.section`
  margin: 2.8rem 0rem;


  & > img {
    width: 26rem;
    height: 26rem;
  }
`

const PersonImage = styled.div`
  position: absolute;

  left: ${props => props.x}rem;
  top: ${props => props.y}rem;
`