import React, {useEffect} from 'react'
import { styled } from 'styled-components';
import ImgModal from '../../assets/images/img_modal.png';
import ImgCopylink from '../../assets/images/img_copylink.png';
import ImgKakao from '../../assets/images/img_kakao.png';
import ImgClose from '../../assets/images/img_close.png';



function Modal(props) {
    const {setModal} = props;

    const handleKakaoShare = () => {
        window.Kakao.Share.sendDefault({            
            objectType: 'text',
            text:
                '담타 조지실 분 구함',
            link: {
                webUrl: 'https://developers.kakao.com',
            }})
    }

    useEffect(() => {
        if (window.Kakao) {
            if (!window.Kakao.isInitialized()) {
                window.Kakao.init('09fae54f3630ac73bd492511b8c98397')
            }
        }
    }, [])



    return (
        <Wrapper>
            <ModalBox>
                <img src={ImgModal}/>
                <div>
                    <img src={ImgClose} onClick={()=>{setModal(false)}}/>
                    <ModalHeader>맞담할 사람 구함</ModalHeader>
                    <ModalBtnWrapper>
                        <div>
                            <img src={ImgCopylink}/>
                            <img src={ImgKakao} onClick={handleKakaoShare}/>
                        </div>
                        <ModalBtn>링크 복사하기 </ModalBtn>
                        <ModalBtn> 카카오톡에 공유 </ModalBtn>
                    </ModalBtnWrapper>
                </div>
            </ModalBox>
        </Wrapper>
    )
}

export default Modal

const Wrapper = styled.section`
    display:flex;
    justify-content:center;
    align-items:center;

    position:fixed;

    width:100vw;
    height:100vh;

    background-color: rgba(0,0,0,0.5);
`

const ModalBox = styled.article`
    position: relative;

    width:26rem;
    height:20.4rem;

    & > img {
        position: absolute;
        z-index: -1;
    }

    & > div {
        padding: 2rem;
    }

    & > div > img {
    position: absolute;
    top: 0;
    right: 0;
    margin: 2rem;

    width: 2.4rem;
    height: 2.4rem;
    background-color: #F8F7F7;
    }
    
    
`


const ModalHeader = styled.header`
    font-family: 'SangSangShinb7';
    font-style: normal;
    font-weight: 400;
    font-size: 3rem;
    line-height: 2.6rem;
    /* identical to box height, or 130% */

    color: #4D4D49;

`

const ModalBtnWrapper = styled.section`
    display:flex;
    flex-direction:column;

    position: relative;

    margin-top: 2.2rem;

    & > div {
        position: fixed;
    }
    

`

const ModalBtn = styled.button`

    height: 5rem;

    font-family: 'SangSangShinb7';
    font-style: normal;
    font-weight: 500;
    font-size: 3rem;
    line-height: 3rem;
    /* identical to box height, or 125% */
    text-align: center;

    background-color: #F8F7F7;

    color: #4D4D49;
`