import React, {useEffect} from 'react'
import { styled } from 'styled-components';

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
                <ModalClose onClick={()=>{setModal(false)}}>X</ModalClose>
                <ModalHeader>맞담할 사람 구함</ModalHeader>
                <ModalBtnWrapper>
                    <ModalBtn> 링크 복사하기 </ModalBtn>
                    <ModalBtn onClick={handleKakaoShare}> 카카오톡에 공유 </ModalBtn>
                </ModalBtnWrapper>
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
    padding:2rem;
    
    background-color: white;
`

const ModalClose = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    margin: 2rem;

    width: 2.4rem;
    height: 2.4rem;
`

const ModalHeader = styled.header`
    font-family: 'SangSangShinb7';
    font-style: normal;
    font-weight: 400;
    font-size: 3rem;
    line-height: 2.6rem;
    /* identical to box height, or 130% */

`

const ModalBtnWrapper = styled.section`
    display:flex;
    flex-direction:column;
    gap:1.5rem;

    margin-top: 2.2rem;

`

const ModalBtn = styled.button`

    height: 5rem;

    font-family: 'SangSangShinb7';
    font-style: normal;
    font-weight: 400;
    font-size: 3rem;
    line-height: 3rem;
    /* identical to box height, or 125% */
    text-align: center;

`