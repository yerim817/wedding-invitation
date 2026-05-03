/**
 * ✈ WEDDING CONFIG
 * =====================================================
 * 이 파일만 수정하면 청첩장 내용이 모두 바뀝니다!
 * 수정 후 저장하면 바로 반영됩니다.
 * =====================================================
 */

const WEDDING_CONFIG = {

  /* ─────────────────────────────────────────────────
     👫 신랑 · 신부 정보
  ───────────────────────────────────────────────── */
  groom: {
    name:       "유주영",           // 신랑 이름
    initial:    "YJY",             // 보딩패스 공항코드 (이니셜 3자리)
    fatherName: "유재수",           // 신랑 아버지 이름
    motherName: "정명자",           // 신랑 어머니 이름
  },
  bride: {
    name:       "양예림",           // 신부 이름
    initial:    "YYR",             // 보딩패스 공항코드 (이니셜 3자리)
    fatherName: "양대환",           // 신부 아버지 이름
    motherName: "전미숙",           // 신부 어머니 이름
  },


  /* ─────────────────────────────────────────────────
     📅 날짜 · 시간
  ───────────────────────────────────────────────── */
  date:      "2026년 8월 1일 토요일",  // 전체 날짜 (초대 문구에 표시)
  dateShort: "2026.08.01",            // 보딩패스 날짜 표기
  dateCode:  "26·08·01",             // 푸터 날짜 표기
  time:      "오후 12시 30분",         // 시간 (전체 표기)
  timeCode:  "12:30 PM",             // 보딩패스 시간 표기
  dayOfWeek: "SAT",                   // 요일 영문
  flightCode: "WD-2608",             // 가상 항공편명 (자유롭게 변경 가능)


  /* ─────────────────────────────────────────────────
     ✈ 보딩패스 카드 특수 필드
     (자유롭게 원하는 문구로 변경 가능)
  ───────────────────────────────────────────────── */
  boardingPass: {
    class:    "First",    // CLASS 항목
    terminal: "Always",   // TERMINAL 항목
    seat:     "BE-HAPPY", // SEAT 항목
  },


  /* ─────────────────────────────────────────────────
     📍 웨딩홀 위치 정보
  ───────────────────────────────────────────────── */
  venue: {
    name:    "솔스퀘어 컨벤션",                          // 웨딩홀 이름
    hall:    "6층 프리미에르 홀",                         // 홀 이름 (없으면 "" 로 비워두세요)
    address: "경기도 용인시 기흥구 마북동 용구대로 2354",   // 주소
    tel:     "031-546-8322",                            // 전화번호

    // 지도 iframe URL — 카카오맵에서 "지도 퍼가기"로 발급받은 URL을 넣어주세요
    mapEmbed: "https://map.kakao.com/link/map/솔스퀘어컨벤션,37.2816,127.1134",

    // 길찾기 버튼 링크
    kakaoMapLink: "https://map.kakao.com/link/to/솔스퀘어컨벤션,37.2816,127.1134",
    naverMapLink: "https://naver.me/FxGdQzBa",

    // 교통편 안내 (항목 추가·삭제 자유)
    transport: [
      {
        icon:  "🚇",
        title: "지하철",
        body:  "수인분당 / GTX-A 구성역",
      },
      {
        icon:  "🕐",
        title: "셔틀버스",
        body:  "2번 출구 앞\n- 예식 1시간 전부터 10분~15분 간격으로 운행",
      },
      {
        icon:  "🚌",
        title: "버스",
        body:  "북3통마을회관 정류장 하차 [29201] → 솔스퀘어컨벤션\n일반버스 : 27, 68, 77, 116-3, 820 / 직행버스 : 1241",
      },
      {
        icon:  "🚗",
        title: "자가용",
        body:  "지하 주차장 이용 (3시간 무료)",
      },
    ],
  },


  /* ─────────────────────────────────────────────────
     💌 초대 문구
     줄바꿈은 \n 으로 표시합니다
  ───────────────────────────────────────────────── */
  invitationLabel: "Passenger Announcement", // 섹션 상단 소제목

  invitation: `두 개의 세계가 만나
마침내 어디로 향할지 모를
새로운 세상으로의 비행을 시작합니다

우리가 날아오르는 날
날씨는 맑고 화창할 것이며
창 밖의 풍경 또한 아름다울거예요

여행을 앞둔 어느 날 처럼 설레는 마음으로
여러분을 초대합니다

따스한 눈길과 박수로
저희의 비행을 함께 응원해주세요`,


  /* ─────────────────────────────────────────────────
     🖼️ 갤러리
     - assets/gallery/ 폴더에 사진을 넣고 파일명을 맞춰주세요
     - 처음에 9장이 보이고, "VIEW ALL" 클릭 시 전체 표시
  ───────────────────────────────────────────────── */
  galleryInitialCount: 9,  // 처음에 보여줄 사진 수

  gallery: [
    { src: "assets/gallery/01.jpg", alt: "웨딩 사진 01" },
    { src: "assets/gallery/02.jpg", alt: "웨딩 사진 02" },
    { src: "assets/gallery/03.jpg", alt: "웨딩 사진 03" },
    { src: "assets/gallery/04.jpg", alt: "웨딩 사진 04" },
    { src: "assets/gallery/05.jpg", alt: "웨딩 사진 05" },
    { src: "assets/gallery/06.jpg", alt: "웨딩 사진 06" },
    { src: "assets/gallery/07.jpg", alt: "웨딩 사진 07" },
    { src: "assets/gallery/08.jpg", alt: "웨딩 사진 08" },
    { src: "assets/gallery/09.jpg", alt: "웨딩 사진 09" },
    { src: "assets/gallery/10.jpg", alt: "웨딩 사진 10" },
    { src: "assets/gallery/11.jpg", alt: "웨딩 사진 11" },
    { src: "assets/gallery/12.jpg", alt: "웨딩 사진 12" },
    { src: "assets/gallery/13.jpg", alt: "웨딩 사진 13" },
    { src: "assets/gallery/14.jpg", alt: "웨딩 사진 14" },
    { src: "assets/gallery/15.jpg", alt: "웨딩 사진 15" },
  ],


  /* ─────────────────────────────────────────────────
     💳 계좌 안내
     gradient 는 카드 배경 그라데이션 색상입니다
  ───────────────────────────────────────────────── */
  accounts: [
    {
      side:     "신랑측",
      bank:     "카카오뱅크",
      number:   "3333-00-1234567",   // ← 실제 계좌번호로 교체하세요
      holder:   "유주영",
      gradient: "linear-gradient(135deg, #2E61C7 0%, #3D84D6 100%)", // 파란 그라데이션
    },
    {
      side:     "신부측",
      bank:     "토스뱅크",
      number:   "1002-5425-7566",    // ← 실제 계좌번호로 교체하세요
      holder:   "양예림",
      gradient: "linear-gradient(135deg, #1A8C59 0%, #2EAD66 100%)", // 초록 그라데이션
    },
  ],


  /* ─────────────────────────────────────────────────
     🎉 이벤트 안내
  ───────────────────────────────────────────────── */
  eventLabel: "Onboard Event", // 섹션 상단 소제목

  event: {
    title:   "🎁  웨딩 이벤트 안내",
    content: `2부 피로연에서 럭키 드로우 이벤트가 예정되어 있습니다.
청첩장을 꼭 지참해주세요!`,
  },


  /* ─────────────────────────────────────────────────
     📱 카카오톡 공유
     앱키 발급: https://developers.kakao.com
     → 내 애플리케이션 → 앱 만들기 → JavaScript 키 복사
  ───────────────────────────────────────────────── */
  kakao: {
    appKey:          "YOUR_KAKAO_JAVASCRIPT_KEY",  // ← 카카오 JavaScript 키 입력
    shareTitle:      "Boarding Pass to JUYEONG&YERIM's Wedding",
    shareDescription:"2026년 8월 1일 토요일 오후 12시 30분 · 솔스퀘어 컨벤션",
    shareImageUrl:   "https://YOUR_GITHUB_ID.github.io/wedding/assets/og-image.jpg", // ← 배포 후 교체
    shareUrl:        "https://YOUR_GITHUB_ID.github.io/wedding/",                    // ← 배포 후 교체
  },


  /* ─────────────────────────────────────────────────
     🔥 Firebase (방명록 기능)
     설정: https://console.firebase.google.com
     → 새 프로젝트 → Realtime Database 생성 → 프로젝트 설정 → 앱 추가
     ※ Firebase를 사용하지 않으면 그대로 두세요 (로컬 저장으로 동작)
  ───────────────────────────────────────────────── */
  firebase: {
    apiKey:      "YOUR_API_KEY",
    authDomain:  "YOUR_PROJECT.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
    projectId:   "YOUR_PROJECT_ID",
  },


  /* ─────────────────────────────────────────────────
     🎬 인트로 영상
     - assets/intro.mp4 파일을 교체하면 됩니다
     - duration: 자동 스킵까지의 시간 (초)
  ───────────────────────────────────────────────── */
  intro: {
    videoUrl: "assets/intro.mp4",
    duration: 10,
  },

};
