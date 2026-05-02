const WEDDING_CONFIG = {
  groom: { name:"유주영", initial:"YJY", fatherName:"유재수", motherName:"정명자" },
  bride:  { name:"양예림", initial:"YYR", fatherName:"양대환", motherName:"전미숙" },

  date:"2026년 8월 1일 토요일",
  dateShort:"2026.08.01",
  dateCode:"26·08·01",
  time:"오후 12시 30분",
  timeCode:"12:30 PM",
  dayOfWeek:"SAT",
  flightCode:"WD-2608",

  boardingPass:{ class:"First", terminal:"Always", seat:"BE-HAPPY" },

  venue:{
    name:"솔스퀘어 컨벤션",
    hall:"6층 프리미에르 홀",
    address:"경기도 용인시 기흥구 마북동 용구대로 2354",
    tel:"031-546-8322",
    mapEmbed:"https://map.kakao.com/link/map/솔스퀘어컨벤션,37.2816,127.1134",
    kakaoMapLink:"https://map.kakao.com/link/to/솔스퀘어컨벤션,37.2816,127.1134",
    naverMapLink:"https://naver.me/FxGdQzBa",
    transport:[
      {icon:"🚇",title:"지하철",body:"수인분당 / GTX-A 구성역"},
      {icon:"🕐",title:"셔틀버스",body:"2번 출구 앞\n- 예식 1시간 전 부터 10분 ~15분 간격으로 운행"},
      {icon:"🚌",title:"버스",body:"북3통마을회관 정류장 하차 → 솔스퀘어컨벤션"},
      {icon:"🚗",title:"자가용",body:"지하 주차장 이용 (3시간 무료)"}
    ],
  },

  // ⭐ 추가된 부분 (보딩패스 하단 이미지)
  bpPhoto:"assets/boarding-pass-photo.jpg",

  invitationLabel:"Passenger Announcement",

  invitation:`두 개의 세계가 만나
새로운 세상으로의 비행을 시작합니다

맑고 화창한 날,
아름다운 풍경 속에서

설레는 마음으로 여러분을 초대합니다

따스한 눈길과 박수로
저희의 비행을 함께 응원해주세요`,

  gallery:[
    {src:"assets/gallery/01.jpg",alt:""},
    {src:"assets/gallery/02.jpg",alt:""},
    {src:"assets/gallery/03.jpg",alt:""}
  ],

  galleryInitialCount:9,

  accounts:[
    {side:"신랑측",bank:"카카오뱅크",number:"3333-00-1234567",holder:"유주영"},
    {side:"신부측",bank:"토스뱅크",number:"1002-5425-7566",holder:"양예림"}
  ],

  eventLabel:"Onboard Event",

  event:{
    title:"🎁 웨딩 이벤트 안내",
    content:`2부 피로연에서 럭키 드로우 이벤트가 진행됩니다.
청첩장을 꼭 지참해주세요!`
  },

  kakao:{
    appKey:"YOUR_KAKAO_JAVASCRIPT_KEY",
    shareTitle:"Boarding Pass to JUYEONG & YERIM",
    shareDescription:"2026.08.01 · Wedding Invitation",
    shareImageUrl:"https://YOUR_GITHUB_ID.github.io/wedding/assets/og-image.jpg",
    shareUrl:"https://YOUR_GITHUB_ID.github.io/wedding/"
  },

  intro:{
    videoUrl:"assets/intro.mp4",
    duration:10
  }
};
