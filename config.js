/**
 * ✈ WEDDING CONFIG
 * 이 파일만 수정하면 청첩장 내용이 모두 바뀝니다!
 */
const WEDDING_CONFIG = {
  groom: { name:"유주영", initial:"YJY", fatherName:"유재수", motherName:"정명자" },
  bride:  { name:"양예림", initial:"YYR", fatherName:"양대환", motherName:"전미숙" },
  date:"2026년 8월 1일 토요일", dateShort:"2026.08.01", dateCode:"26·08·01",
  time:"오후 12시 30분", timeCode:"12:30 PM", dayOfWeek:"SAT", flightCode:"WD-2608",
  boardingPass:{ class:"First", terminal:"Always", seat:"BE-HAPPY" },
  venue:{
    name:"솔스퀘어 컨벤션", hall:"6층 프리미에르 홀",
    address:"경기도 용인시 기흥구 마북동 용구대로 2354", tel:"031-546-8322",
    mapEmbed:"https://map.kakao.com/link/map/솔스퀘어컨벤션,37.2816,127.1134",
    kakaoMapLink:"https://map.kakao.com/link/to/솔스퀘어컨벤션,37.2816,127.1134",
    naverMapLink:"https://naver.me/FxGdQzBa",
    transport:[
      {icon:"🚇",title:"지하철",body:"수인분당 / GTX-A 구성역"},
      {icon:"🕐",title:"셔틀버스",body:"2번 출구 앞\n- 예식 1시간 전 부터 10분 ~15분 간격으로 운행"},
      {icon:"🚌",title:"버스",body:"북3통마을회관 정류장 하차 [29201] → 솔스퀘어컨벤션\n일반버스 : 27, 68, 77, 116-3, 820 / 직행버스 : 1241"},
      {icon:"🚗",title:"자가용",body:"지하 주차장 이용 (3시간 무료)"},
    ],
  },
  invitationLabel:"Passenger Announcement",
  invitation:"두 개의 세계가 만나\n마침내 어디로 향할지 모를\n새로운 세상으로의 비행을 시작합니다\n\n우리가 날아오르는 날\n날씨는 맑고 화창할 것이며\n창 밖의 풍경 또한 아름다울거예요\n\n여행을 앞둔 어느 날 처럼 설레는 마음으로\n여러분을 초대합니다\n\n따스한 눈길과 박수로\n저희의 비행을 함께 응원해주세요",
  gallery:[
    {src:"assets/gallery/01.jpg",alt:"웨딩 사진 01"},
    {src:"assets/gallery/02.jpg",alt:"웨딩 사진 02"},
    {src:"assets/gallery/03.jpg",alt:"웨딩 사진 03"},
    {src:"assets/gallery/04.jpg",alt:"웨딩 사진 04"},
    {src:"assets/gallery/05.jpg",alt:"웨딩 사진 05"},
    {src:"assets/gallery/06.jpg",alt:"웨딩 사진 06"},
    {src:"assets/gallery/07.jpg",alt:"웨딩 사진 07"},
    {src:"assets/gallery/08.jpg",alt:"웨딩 사진 08"},
    {src:"assets/gallery/09.jpg",alt:"웨딩 사진 09"},
    {src:"assets/gallery/10.jpg",alt:"웨딩 사진 10"},
    {src:"assets/gallery/11.jpg",alt:"웨딩 사진 11"},
    {src:"assets/gallery/12.jpg",alt:"웨딩 사진 12"},
    {src:"assets/gallery/13.jpg",alt:"웨딩 사진 13"},
    {src:"assets/gallery/14.jpg",alt:"웨딩 사진 14"},
    {src:"assets/gallery/15.jpg",alt:"웨딩 사진 15"},
  ],
  galleryInitialCount:9,
  accounts:[
    {side:"신랑측",bank:"카카오뱅크",number:"3333-00-1234567",holder:"유주영",gradient:"linear-gradient(135deg,#2E61C7 0%,#3D84D6 100%)"},
    {side:"신부측",bank:"토스뱅크",number:"1002-5425-7566",holder:"양예림",gradient:"linear-gradient(135deg,#1A8C59 0%,#2EAD66 100%)"},
  ],
  eventLabel:"Onboard Event",
  event:{
    title:"🎁  웨딩 이벤트 안내",
    content:"2부 피로연에서 럭키 드로우 이벤트가 예정되어 있습니다.\n청첩장을 꼭 지참해주세요!",
  },
  kakao:{
    appKey:"YOUR_KAKAO_JAVASCRIPT_KEY",
    shareTitle:"Boarding Pass to JUYEONG&YERIM's Wedding",
    shareDescription:"2026년 8월 1일 토요일 오후 12시 30분 · 솔스퀘어 컨벤션",
    shareImageUrl:"https://YOUR_GITHUB_ID.github.io/wedding/assets/og-image.jpg",
    shareUrl:"https://YOUR_GITHUB_ID.github.io/wedding/",
  },
  firebase:{
    apiKey:"YOUR_API_KEY",
    authDomain:"YOUR_PROJECT.firebaseapp.com",
    databaseURL:"https://YOUR_PROJECT-default-rtdb.firebaseio.com",
    projectId:"YOUR_PROJECT_ID",
  },
  intro:{ videoUrl:"assets/intro.mp4", duration:10 },
};
