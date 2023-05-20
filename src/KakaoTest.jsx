import React from 'react'
import { useEffect } from 'react'


const KakaoTest = () => {

    useEffect(() => {
        kakaoButton()
    }, [])

    const kakaoButton = () => {

        // 안되면 window.KaKako 쓰자 

        // Kakao.init('JAVASCRIPT_KEY');
        // Kakao.isInitialized();

        if (window.Kakao) {
            const kakao = window.Kakao

            if (!kakao.isInitialized()) {
            kakao.init('09fae54f3630ac73bd492511b8c98397')
            }

            kakao.Share.createDefaultButton({
            container: '#kakaotalk-sharing-btn',
            
            objectType: 'text',
            text:
                '담타 조지실 분 구함',
            link: {
                webUrl: 'https://developers.kakao.com',
            }})
        }
    }
        
    


  return (
    <div>
        KakaoTest

        <a id="kakaotalk-sharing-btn" href={undefined}>
        <img src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
            alt="카카오톡 공유 보내기 버튼" />
        </a>

    </div>
  )
}

export default KakaoTest