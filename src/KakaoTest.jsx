import React from 'react'
import { useEffect } from 'react'
import kakaoTest from './assets/logo.png'


const KakaoTest = () => {

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
    <div>
        KakaoTest
        <button id="kakaotalk-sharing-btn" onClick={handleKakaoShare}>
        <img src={kakaoTest} alt="카카오톡 공유 보내기 버튼" />
        </button>

    </div>
  )
}

export default KakaoTest