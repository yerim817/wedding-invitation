/**
 * ✈ WEDDING CONFIG
 * =====================================================
 *  이 파일만 수정하면 청첩장 내용이 모두 바뀝니다!
 *  수정 후 GitHub에 다시 업로드하면 바로 반영됩니다.
 * =====================================================
 *
 *  ⚠️  반드시 교체해야 할 항목
 *      1. 카카오 앱키 — kakao.appKey, kakaoMap.appKey (같은 키)
 *      2. 배포 URL   — kakao.shareUrl, kakao.shareImageUrl
 *      3. Firebase   — 방명록 사용 시
 * =====================================================
 */

const WEDDING_CONFIG = {

  /* ─────────────────────────────────────────────────
     👫 신랑 · 신부
  ───────────────────────────────────────────────── */
  groom: {
    name:       "유주영",
    initial:    "YJY",      // 보딩패스 공항코드 스타일 이니셜 (3자리)
    fatherName: "유재수",
    motherName: "정명자",
  },
  bride: {
    name:       "양예림",
    initial:    "YYR",      // 보딩패스 공항코드 스타일 이니셜 (3자리)
    fatherName: "양대환",
    motherName: "전미숙",
  },


  /* ─────────────────────────────────────────────────
     📌 날짜 · 시간
  ───────────────────────────────────────────────── */
  date:      "2026년 8월 1일 토요일",  // 초대 문구·날짜 박스에 표시
  dateShort: "2026.08.01",            // 보딩패스 DATE 필드
  dateCode:  "26·08·01",             // 푸터 날짜 표기
  time:      "오후 12시 30분",         // 초대 문구·날짜 박스에 표시
  timeCode:  "12:30 PM",             // 보딩패스 TIME 필드


  /* ─────────────────────────────────────────────────
     ✈ 보딩패스 카드 특수 필드
     원하는 문구로 자유롭게 바꿔도 됩니다
  ───────────────────────────────────────────────── */
  boardingPass: {
    class:    "First",
    terminal: "Always",
    seat:     "BE-HAPPY",
  },


  /* ─────────────────────────────────────────────────
     📍 웨딩홀 위치
  ───────────────────────────────────────────────── */
  venue: {
    name:    "솔스퀘어 컨벤션",
    hall:    "6층 프리미에르 홀",
    address: "경기도 용인시 기흥구 마북동 용구대로 2354",
    tel:     "031-546-8322",

    // 길찾기 버튼 링크
    kakaoMapLink: "https://kko.to/FZOqS5Ps-S",  // 카카오맵 길찾기 링크
    naverMapLink: "https://map.naver.com/p/search/솔스퀘어컨벤션",

    // 지도 중심 좌표 (카카오 지도 API용)
    // 구글맵에서 장소 검색 → 주소창 URL에서 @위도,경도 확인
    lat: 37.2816,   // 위도
    lng: 127.1134,  // 경도

    // 교통편 안내 — 항목 추가·삭제 자유 / 줄바꿈은 \n
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
        title: "주차",
        body:  "하객 2시간 무료. \n지하 주차장 B2·B4층에서는 6층으로 바로 연결되는 엘리베이터가 없습니다. 해당 층에 주차하신 경우 계단을 이용해 한 층 이동하신 뒤 엘리베이터를 이용해 주세요.",
      },
    ],
  },


  /* ─────────────────────────────────────────────────
     💌 초대 문구
  ───────────────────────────────────────────────── */
  invitationLabel: "Passenger Announcement",

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
     🖼️ 갤러리 (총 15장)
     assets/gallery/ 폴더에 01.jpg ~ 15.jpg 파일명으로 넣어주세요
     galleryInitialCount: 첫 화면 노출 수 (나머지는 VIEW ALL 클릭 시 표시)
  ───────────────────────────────────────────────── */
  galleryInitialCount: 9,

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
     복사 버튼 클릭 시 number 값이 클립보드에 복사됩니다
  ───────────────────────────────────────────────── */
  accounts: [
    {
      side:     "신랑측",
      bank:     "토스뱅크",
      number:   "1000-2017-2711",
      holder:   "유주영",
      gradient: "linear-gradient(135deg, #2E61C7 0%, #3D84D6 100%)",
    },
    {
      side:     "신부측",
      bank:     "토스뱅크",
      number:   "1002-5425-7556",
      holder:   "양예림",
      gradient: "linear-gradient(135deg, #1A8C59 0%, #2EAD66 100%)",
    },
  ],


  /* ─────────────────────────────────────────────────
     🎉 이벤트 안내 (여러 개 추가 가능)
     title: 이벤트 제목
     content: 이벤트 내용 (줄바꿈 가능)
  ───────────────────────────────────────────────── */
  eventLabel:    "Onboard Event",
  eventSublabel: "이벤트 안내",

  events: [
    {
      title:   "✌️  포토부스",
      content: `웨딩홀 로비에 포토부스가 준비되어 있습니다.\n일찍 오셔서 예쁜 사진 남기세요!`,
    },
    {
      title:   "🎁  럭키 드로우 이벤트",
      content: `2부 피로연에서 럭키 드로우 이벤트가 예정되어 있습니다.\n청첩장을 꼭 지참해주세요!`,
    },
  ],


  /* ─────────────────────────────────────────────────
     🗺️ 카카오 지도 API
     ─────────────────────────────────────────────────
     appKey: kakao.appKey 와 동일한 JavaScript 키를 입력하세요
     (같은 키를 두 곳에 넣으면 됩니다)
     ─────────────────────────────────────────────────
     발급 방법:
       1. https://developers.kakao.com 로그인
       2. 내 애플리케이션 → 앱 선택
       3. 제품 링크 관리 → 웹 → 도메인 등록
          https://YOUR_GITHUB_ID.github.io
          http://localhost
       4. 앱 키 → JavaScript 키 복사 → 아래 appKey에 붙여넣기
  ───────────────────────────────────────────────── */
  kakaoMap: {
    appKey: "e2d8b2fa73e87757a0e86525ebd49654",  // ⚠️ kakao.appKey 와 동일한 키
    level:  3,                            // 지도 확대 레벨 (1~14, 숫자 작을수록 확대)
    marker: true,                         // 웨딩홀 위치에 마커(핀) 표시 여부
  },


  /* ─────────────────────────────────────────────────
     📱 카카오톡 공유
     ─────────────────────────────────────────────────
     배포 후 shareUrl, shareImageUrl 을 실제 주소로 교체하세요
     예) https://juyoung.github.io/wedding/
  ───────────────────────────────────────────────── */
  kakao: {
    appKey:           "e2d8b2fa73e87757a0e86525ebd49654",  // ⚠️ kakaoMap.appKey 와 동일한 키
    shareTitle:       "Boarding Pass to JUYEONG&YERIM's Wedding",
    shareDescription: "2026년 8월 1일 토요일 오후 12시 30분 · 솔스퀘어 컨벤션",
    shareImageUrl:    "https://yerim817.github.io/wedding-invitation/assets/og-image.jpg", // ⚠️ 배포 후 교체
    shareUrl:         "https://yerim817.github.io/wedding-invitation/",                    // ⚠️ 배포 후 교체
  },


  /* ─────────────────────────────────────────────────
     🔥 Firebase (방명록)
     ─────────────────────────────────────────────────
     설정하지 않으면 기기 내 저장(localStorage)으로 동작합니다.
     실제 서비스에는 Firebase 설정을 권장합니다.
     ─────────────────────────────────────────────────
     설정 방법:
       1. https://console.firebase.google.com → 새 프로젝트
       2. 빌드 → Realtime Database → 데이터베이스 만들기
       3. 프로젝트 설정 → 내 앱 → 웹 앱 추가 → 아래 값 복붙
  ───────────────────────────────────────────────── */
  firebase: {
    apiKey:      "YOUR_API_KEY",
    authDomain:  "YOUR_PROJECT.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
    projectId:   "YOUR_PROJECT_ID",
  },


  /* ─────────────────────────────────────────────────
     🎬 인트로 영상
     - assets/intro.mp4 파일을 교체하세요 (10초 내외, 20MB 이하 권장)
     - duration 초 후 자동 Skip → 보딩패스로 이동
     - SKIP 버튼 클릭 시에도 즉시 보딩패스로 이동
  ───────────────────────────────────────────────── */
  intro: {
    videoUrl: "assets/intro.mp4",
    duration: 10,
  },

};
