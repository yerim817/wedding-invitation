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
    initial:    "YJY",
    fatherName: "유재수",
    motherName: "정명자",
  },
  bride: {
    name:       "양예림",
    initial:    "YYR",
    fatherName: "양대환",
    motherName: "전미숙",
  },


  /* ─────────────────────────────────────────────────
     📅 날짜 · 시간
  ───────────────────────────────────────────────── */
  date:      "2026년 8월 1일 토요일",
  dateShort: "2026.08.01",
  dateCode:  "26·08·01",
  time:      "오후 12시 30분",
  timeCode:  "12:30 PM",


  /* ─────────────────────────────────────────────────
     ✈ 보딩패스 카드 특수 필드
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

    kakaoMapLink: "https://kko.to/FZOqS5Ps-S",
    naverMapLink: "https://map.naver.com/p/search/솔스퀘어컨벤션",

    lat: 37.2816,
    lng: 127.1134,

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
        body:  "하객 2시간 무료. 지하 주차장 B2·B4층에서는 6층으로 바로 연결되는 엘리베이터가 없습니다. 해당 층에 주차하신 경우 계단을 이용해 한 층 이동하신 뒤 엘리베이터를 이용해 주세요.",
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
     🖼️ 갤러리 (총 21장)
     gallery/ 폴더에 01.jpg ~ 21.jpg 파일명으로 넣어주세요
     galleryInitialCount: 첫 화면 노출 수 (나머지는 VIEW ALL 클릭 시 표시)
  ───────────────────────────────────────────────── */
  galleryInitialCount: 9,

  gallery: [
    { src: "gallery/01.jpg", alt: "웨딩 사진 01" },
    { src: "gallery/02.jpg", alt: "웨딩 사진 02" },
    { src: "gallery/03.jpg", alt: "웨딩 사진 03" },
    { src: "gallery/04.jpg", alt: "웨딩 사진 04" },
    { src: "gallery/05.jpg", alt: "웨딩 사진 05" },
    { src: "gallery/06.jpg", alt: "웨딩 사진 06" },
    { src: "gallery/07.jpg", alt: "웨딩 사진 07" },
    { src: "gallery/08.jpg", alt: "웨딩 사진 08" },
    { src: "gallery/09.jpg", alt: "웨딩 사진 09" },
    { src: "gallery/10.jpg", alt: "웨딩 사진 10" },
    { src: "gallery/11.jpg", alt: "웨딩 사진 11" },
    { src: "gallery/12.jpg", alt: "웨딩 사진 12" },
    { src: "gallery/13.jpg", alt: "웨딩 사진 13" },
    { src: "gallery/14.jpg", alt: "웨딩 사진 14" },
    { src: "gallery/15.jpg", alt: "웨딩 사진 15" },
    { src: "gallery/16.jpg", alt: "웨딩 사진 16" },
    { src: "gallery/17.jpg", alt: "웨딩 사진 17" },
    { src: "gallery/18.jpg", alt: "웨딩 사진 18" },
    { src: "gallery/19.jpg", alt: "웨딩 사진 19" },
    { src: "gallery/20.jpg", alt: "웨딩 사진 20" },
    { src: "gallery/21.jpg", alt: "웨딩 사진 21" },
  ],


  /* ─────────────────────────────────────────────────
     💳 계좌 안내 (토글형)
     side: 탭 이름 / gradient: 카드 배경색
     accounts: 해당 측 계좌 목록 (여러 개 가능)
     - index 0: 컬러 그라데이션 카드
     - index 1+: 흰색 카드
  ───────────────────────────────────────────────── */
  accountGroups: [
    {
      side:     "신랑측",
      gradient: "linear-gradient(135deg, #5B9FE0 0%, #7BBFF0 100%)",
      accounts: [
        { holder: "유주영", bank: "국민은행", number: "626402-01-755244" },
        { holder: "유재수", bank: "국민은행", number: "626401-01-333674" },
        { holder: "정명자", bank: "기업은행", number: "010-8234-0168" },
      ],
    },
    {
      side:     "신부측",
      gradient: "linear-gradient(135deg, #4BAE8A 0%, #6ECBA8 100%)",
      accounts: [
        { holder: "양예림", bank: "토스뱅크", number: "1002-5425-7556" },
      ],
    },
  ],


  /* ─────────────────────────────────────────────────
     🎉 이벤트 안내
  ───────────────────────────────────────────────── */
  eventLabel: "Onboard Event",

  events: [
    {
      title:   "✌️  포토부스",
      content: `웨딩홀 로비에 포토부스가 준비되어 있습니다.\n일찍 오셔서 예쁜 사진 남기세요!`,
    },
    {
      title:   "🎁  애정 듬뿍! 스냅 작가님을 모십니다",
      content: `결혼식 사진 혹은 영상을 예림, 주영에게 카톡으로 보내주세요.\n베스트로 선정되신 세 분께 특별한 선물을 드립니다!(저희 여러분 믿고 아이폰 스냅 예약 안했어요..)`,
    },
  ],


  /* ─────────────────────────────────────────────────
     🗺️ 카카오 지도 API
  ───────────────────────────────────────────────── */
  kakaoMap: {
    appKey: "YOUR_KAKAO_JAVASCRIPT_KEY",
    level:  3,
    marker: true,
  },


  /* ─────────────────────────────────────────────────
     📱 카카오톡 공유
  ───────────────────────────────────────────────── */
  kakao: {
    appKey:           "YOUR_KAKAO_JAVASCRIPT_KEY",
    shareTitle:       "Boarding Pass to JUYEONG&YERIM's Wedding",
    shareDescription: "2026년 8월 1일 토요일 오후 12시 30분 · 솔스퀘어 컨벤션",
    shareImageUrl:    "https://yerim817.github.io/wedding-invitation/assets/og-image.jpg",
    shareUrl:         "https://yerim817.github.io/wedding-invitation/",
  },


  /* ─────────────────────────────────────────────────
     🔥 Firebase (방명록)
  ───────────────────────────────────────────────── */
  firebase: {
    apiKey:      "YOUR_API_KEY",
    authDomain:  "YOUR_PROJECT.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
    projectId:   "YOUR_PROJECT_ID",
  },


  /* ─────────────────────────────────────────────────
     🎬 인트로 영상
  ───────────────────────────────────────────────── */
  intro: {
    videoUrl: "assets/intro.mp4",
    duration: 8,
  },

};
