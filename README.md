<div align="center">

<h2> 모바일 담타 </h2>

<img src=""  alt="서비스대표-이미지" />
<br />    
<br />    
<aside>
💡 나만 혼자 힘든 것 같고, 세상이 날 억까하는 것 같다고 느끼는 사람들에게 혼자만 세상이 힘든 게 아니고, <br /> 
    모두가 사소한 것 하나쯤은 걱정이 있고 고민이 있다는 것을 공유합니다.

이를 통해 함께 한숨을 쉴 수 있는 공간을 제공하여 고민을 불태움으로써 ‘같이’ 외로움을 불태우는 가치를 제안합니다.

</aside>

</div>

<h2> 모바일 담타의 핵심 기능 </h2>

<h3> 1️⃣ 함께 모바일 담타를 즐길 수 있는 Url 생성 및 엔딩  </h3>

<img width="131" alt="image" src="https://github.com/SOPKATHON-2/FrontEnd/assets/91375979/266fb7d6-1fbb-4750-b9e1-affb32822b0f">
<img width="153" alt="image" src="https://github.com/SOPKATHON-2/FrontEnd/assets/91375979/9b6fe10e-f9c4-44d3-8da6-58be147ea86f">

<div ><strong> Url생성 </strong> User가 버튼을 누르면 함께 모바일 담타를 즐길 수 있는 Url생성 - 서버에게 룸생성 요청  <br/></div>


<h3> 2️⃣ 고민을 적고 서버로 전송하는 기능 </h3>
<img width="131" alt="image" src="https://github.com/SOPKATHON-2/FrontEnd/assets/91375979/bcded9ab-9c28-42b3-8450-4f554b9be935">
<img width="131" alt="image" src="https://github.com/SOPKATHON-2/FrontEnd/assets/91375979/a5242511-8a25-4f01-9d0c-a294402c971f">
<img width="499" alt="image" src="https://github.com/SOPKATHON-2/FrontEnd/assets/91375979/53dcbf7c-7e79-4f08-b736-14efece41bbf">


<div ><strong> 고민전송 </strong> User의 고민을 적고 서버로 전송하는 api 연결  <br/></div>

<h3> 3️⃣ 해당 방의 고민 갯수를 받아오고, 카카오톡 공유기능 </h3>
<img width="131" alt="image" src="https://github.com/SOPKATHON-2/FrontEnd/assets/91375979/0bd6296e-5069-4a43-a930-df57980a66e2">
<img width="146" alt="image" src="https://github.com/SOPKATHON-2/FrontEnd/assets/91375979/0396f0ca-56f7-4310-985b-7f4f4b1c9b85">
<img width="147" alt="image" src="https://github.com/SOPKATHON-2/FrontEnd/assets/91375979/d9016d31-6bce-4ec9-bc19-7d6e4945ac79">
<img width="151" alt="image" src="https://github.com/SOPKATHON-2/FrontEnd/assets/91375979/f9b87424-b910-40f1-9f88-13c077b8b03b">

<div ><strong> 고민갯수 , 공유하기기능  </strong> 해당방의 고민갯수 get api , 공유하기 기능  <br/></div>


<h2> 🐵 웨비들 역할분담 </h2>

<table align="center">
    <tr align="center">
        <td style="min-width: 150px;">
            <a href="">
              <img src="https://avatars.githubusercontent.com/u/91375979?v=4" width="200" alt="정찬우 사진">
              <br />
              <b>Chanwoo-Jeong</b>
            </a>
        </td>
        <td style="min-width: 150px;">
            <a href="">
              <img src="https://avatars.githubusercontent.com/u/81505421?v=4" width="200" alt="깃허브계정-프로필사진">
              <br />
              <b>lydiacho</b>
            </a>
        </td>
        <td style="min-width: 150px;">
            <a href="">
              <img src="https://avatars.githubusercontent.com/u/92876819?v=4" width="200" alt="깃허브계정-프로필사진">
              <br />
              <b>urjimyu</b>
            </a>
        </td>
    </tr>
    <tr align="center">
        <td>
            정찬우 <br/>
        </td>
       <td>
            조승희 <br/>
      </td>
       <td>
            유지민 <br/>
      </td>
    </tr>
  	<tr align="center">
        <td>
            메인뷰 이동 <br/> Ending페이지 이동
      </td>
       <td>
            인원수에 따라 이미지 업데이트 <br/> SNS 공유하기, 링크 복사하기 
      </td>
       <td>
            이미지 애니메이션 <br/> 순차적으로 여러 gif 띄우기
      </td>
    </tr>
      	<tr align="center">
        <td>
            방만들기 API(PUT) <br/>
      </td>
       <td>
            참가자수 표시 API(GET) <br/>
      </td>
       <td>
            고민작성 API (POST) <br/>
      </td>
    </tr>
</table>

<h2> 🛠 기술스택 </h2>

```
   - 프론트 : React.js
   - 스타일 : styled-components 
   - 서버 통신 : axios
```


<h2> 💡 주요 라이브러리 </h2>

```
   
```

<br/>

<h2>  📄 컨벤션 및 브랜치 전략 </h2>
https://www.notion.so/93711f6937254a5aaa22318d00e91779

<a href="" />

<br/>

<h2> 📁 폴더 구조 </h2>

```
├── package.json 📦 설치된 패키지를 관리하는 파일
└── src
		├──assets
	  │   ├── icon
	  │   └── images
    ├── App.jsx ✡️ 앱의 라우팅과 글로벌 스타일 지정
    ├── index.js
    ├── component
    │   ├── common 🗂 공통으로 쓰일 컴포넌트 저장
    │   └── main 🗂 main 페이지에 쓰일 컴포넌트 저장
    ├── pages 🗂 라우팅 시 보여질 페이지 컴포넌트 저장
    └── styles
        └── color.js
```


<br/>
