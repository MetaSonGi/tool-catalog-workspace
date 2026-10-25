const CATALOG = [
  {
    "id": "tool-001",
    "name": "VoiceStudio",
    "category": "음성·영상",
    "url": "https://github.com/debpalash/VoiceStudio",
    "feature": "로컬 목소리 복제·더빙·받아쓰기",
    "projects": [
      "콘텐츠 제작"
    ],
    "apply": "개발 영상 내레이션",
    "cost": "모델별 상업 라이선스 별도 확인"
  },
  {
    "id": "tool-002",
    "name": "Whisper",
    "category": "음성·영상",
    "url": "https://github.com/openai/whisper",
    "feature": "음성을 텍스트와 자막으로 변환",
    "projects": [
      "콘텐츠 제작"
    ],
    "apply": "시연 자막 SRT 생성",
    "cost": "로컬 연산·모델 다운로드 필요"
  },
  {
    "id": "tool-003",
    "name": "HyperFrames",
    "category": "음성·영상",
    "url": "https://github.com/heygen-com/hyperframes",
    "feature": "HTML·CSS 장면을 영상으로 렌더링",
    "projects": [
      "콘텐츠 제작"
    ],
    "apply": "30초 개발 팁 영상 템플릿",
    "cost": "렌더링 환경 별도 구성"
  },
  {
    "id": "tool-004",
    "name": "LosslessCut",
    "category": "음성·영상",
    "url": "https://github.com/mifi/lossless-cut",
    "feature": "재인코딩 없이 영상 구간 추출",
    "projects": [
      "콘텐츠 제작"
    ],
    "apply": "녹화 영상 구간 추출",
    "cost": "공식 수동 다운로드 무료"
  },
  {
    "id": "tool-005",
    "name": "ShareX",
    "category": "음성·영상",
    "url": "https://getsharex.com/",
    "feature": "Windows 캡처·녹화·OCR",
    "projects": [
      "콘텐츠 제작"
    ],
    "apply": "개발 시연 녹화",
    "cost": "Windows용 무료 앱"
  },
  {
    "id": "tool-006",
    "name": "Artflow AI",
    "category": "음성·영상",
    "url": "https://app.artflow.ai/",
    "feature": "인물 일관성을 활용한 이미지·영상 생성",
    "projects": [
      "콘텐츠 제작"
    ],
    "apply": "주인공 콘셉트 실험",
    "cost": "클라우드·크레딧·요금제 확인"
  },
  {
    "id": "tool-007",
    "name": "HeyGen",
    "category": "음성·영상",
    "url": "https://www.heygen.com/",
    "feature": "AI 영상 도구 후보",
    "projects": [
      "콘텐츠 제작"
    ],
    "apply": "아바타 설명 영상 검토",
    "cost": "이번 목록에서 상세 검증하지 않음"
  },
  {
    "id": "tool-008",
    "name": "Open-Generative-AI",
    "category": "음성·영상",
    "url": "https://github.com/Anil-matcha/Open-Generative-AI",
    "feature": "생성 모델 통합 스튜디오",
    "projects": [
      "콘텐츠 제작"
    ],
    "apply": "생성 소스 관리 방식 참고",
    "cost": "클라우드 MuAPI 유료. 로컬 영상은 Wan2GP·GPU 별도"
  },
  {
    "id": "tool-009",
    "name": "Ollama",
    "category": "에이전트",
    "url": "https://github.com/ollama/ollama",
    "feature": "로컬 모델 실행",
    "projects": [
      "교육·RAG"
    ],
    "apply": "자막 초안·RAG 답변",
    "cost": "로컬 모델과 클라우드 모델 구분"
  },
  {
    "id": "tool-010",
    "name": "Magnitude",
    "category": "에이전트",
    "url": "https://github.com/magnitudedev/magnitude",
    "feature": "로컬 모델 추론 엔진",
    "projects": [
      "AI 에이전트"
    ],
    "apply": "코딩 모델 실행 비교",
    "cost": "지원 하드웨어·모델 확인"
  },
  {
    "id": "tool-011",
    "name": "Pi",
    "category": "에이전트",
    "url": "https://github.com/earendil-works/pi",
    "feature": "도구 호출·에이전트 루프 툴킷",
    "projects": [
      "AI 에이전트"
    ],
    "apply": "직접 만드는 에이전트 런타임",
    "cost": "연결 모델 비용 별도"
  },
  {
    "id": "tool-012",
    "name": "Paperclip",
    "category": "에이전트",
    "url": "https://github.com/paperclipai/paperclip",
    "feature": "역할별 에이전트 업무·예산 관리",
    "projects": [
      "AI 에이전트"
    ],
    "apply": "기획·개발·검수 작업 분리",
    "cost": "모델·서버 비용 별도"
  },
  {
    "id": "tool-013",
    "name": "Atlas",
    "category": "에이전트",
    "url": "https://github.com/pacifio/atlas",
    "feature": "코드 변경과 에이전트 세션 연결",
    "projects": [
      "AI 에이전트"
    ],
    "apply": "작업 이유와 커밋 기록",
    "cost": "외부 모델 호출 여부 별도"
  },
  {
    "id": "tool-014",
    "name": "OpenResearch",
    "category": "에이전트",
    "url": "https://github.com/alphaXiv/OpenResearch",
    "feature": "논문·가설·실험·결과 기록",
    "projects": [
      "교육·RAG"
    ],
    "apply": "로봇 이동 시간 예측 실험 관리",
    "cost": "모델·연산 환경 별도"
  },
  {
    "id": "tool-015",
    "name": "MiroFish",
    "category": "에이전트",
    "url": "https://github.com/666ghj/MiroFish",
    "feature": "사회적 상호작용 시뮬레이션",
    "projects": [
      "AI 에이전트"
    ],
    "apply": "가상 사용자 반응 탐색",
    "cost": "LLM·Zep 설정. 예측 보장 아님"
  },
  {
    "id": "tool-016",
    "name": "Camofox Browser",
    "category": "에이전트",
    "url": "https://github.com/jo-inc/camofox-browser",
    "feature": "에이전트 브라우저 자동화",
    "projects": [
      "AI 에이전트"
    ],
    "apply": "허용된 웹 업무 연결",
    "cost": "대상 사이트 이용 조건 확인"
  },
  {
    "id": "tool-017",
    "name": "ASC",
    "category": "에이전트",
    "url": "https://github.com/MG1937/ASC",
    "feature": "APK 클래스·Manifest·참조 분석",
    "projects": [
      "AI 에이전트"
    ],
    "apply": "본인 안드로이드 앱 분석",
    "cost": "분석 권한 있는 앱 대상"
  },
  {
    "id": "tool-018",
    "name": "Agnes AI",
    "category": "에이전트",
    "url": "https://agnes-ai.com/",
    "feature": "텍스트·이미지·영상 API",
    "projects": [
      "AI 에이전트"
    ],
    "apply": "외부 모델 어댑터 후보",
    "cost": "무료 한도·상업 조건 미확인"
  },
  {
    "id": "tool-019",
    "name": "Agnes Code",
    "category": "에이전트",
    "url": "https://agnescode.agnes-ai.com/",
    "feature": "로컬 에이전트 도구",
    "projects": [
      "AI 에이전트"
    ],
    "apply": "런타임 비교 후보",
    "cost": "메인 Agnes와 별도, 상세 재확인"
  },
  {
    "id": "tool-020",
    "name": "Manus",
    "category": "에이전트",
    "url": "https://manus.im/ko",
    "feature": "대화형 작업·웹앱 제작",
    "projects": [
      "포트폴리오"
    ],
    "apply": "빠른 화면 시안",
    "cost": "플랜·크레딧 확인"
  },
  {
    "id": "tool-021",
    "name": "MotionSites",
    "category": "디자인·스킬",
    "url": "https://motionsites.org/",
    "feature": "웹 모션 디자인 프롬프트",
    "projects": [
      "포트폴리오"
    ],
    "apply": "랜딩페이지 시각 방향",
    "cost": "영상 원본 도메인 미확인"
  },
  {
    "id": "tool-022",
    "name": "Archify",
    "category": "디자인·스킬",
    "url": "https://github.com/tt-a1i/archify",
    "feature": "인터랙티브 구조도",
    "projects": [
      "로봇·디지털트윈"
    ],
    "apply": "Unity·ROS 통신 구조 설명",
    "cost": "AI 모델 사용료 별도"
  },
  {
    "id": "tool-023",
    "name": "React Best Practices",
    "category": "디자인·스킬",
    "url": "https://github.com/vercel-labs/agent-skills",
    "feature": "React·Next.js 성능 지침",
    "projects": [
      "포트폴리오"
    ],
    "apply": "웹 대시보드 품질 검수",
    "cost": "프로젝트에 필요한 스킬만 선택"
  },
  {
    "id": "tool-024",
    "name": "Addy Osmani Skills",
    "category": "디자인·스킬",
    "url": "https://github.com/addyosmani/agent-skills",
    "feature": "개발 수명주기 품질 스킬",
    "projects": [
      "AI 에이전트"
    ],
    "apply": "설계·구현·리뷰 기준",
    "cost": "다른 워크플로와 중복 검토"
  },
  {
    "id": "tool-025",
    "name": "Matt Pocock Skills",
    "category": "디자인·스킬",
    "url": "https://github.com/mattpocock/skills",
    "feature": "명세·설계·테스트 스킬",
    "projects": [
      "AI 에이전트"
    ],
    "apply": "완료 조건 작성",
    "cost": "모델 비용 별도"
  },
  {
    "id": "tool-026",
    "name": "ECC",
    "category": "디자인·스킬",
    "url": "https://github.com/affaan-m/ECC",
    "feature": "스킬·훅·규칙·메모리 모음",
    "projects": [
      "AI 에이전트"
    ],
    "apply": "개발 환경 통합",
    "cost": "Everything Claude Code의 현재 명칭 재확인"
  },
  {
    "id": "tool-027",
    "name": "Gstack",
    "category": "디자인·스킬",
    "url": "https://github.com/garrytan/gstack",
    "feature": "기획·QA·출시 역할별 워크플로",
    "projects": [
      "AI 에이전트"
    ],
    "apply": "검수 역할 분리",
    "cost": "실행 권한·명령 검토 후 도입"
  },
  {
    "id": "tool-028",
    "name": "Superpowers",
    "category": "디자인·스킬",
    "url": "https://github.com/obra/superpowers",
    "feature": "계획·테스트·구현·검증",
    "projects": [
      "AI 에이전트"
    ],
    "apply": "작은 기능 단위 개발",
    "cost": "다른 종합 스킬과 중복 주의"
  },
  {
    "id": "tool-029",
    "name": "레아",
    "category": "확인 필요",
    "url": "",
    "feature": "정확한 영문명 미확인",
    "projects": [
      "AI 에이전트"
    ],
    "apply": "원본 확인 후 판단",
    "cost": "설치·추천 보류"
  },
  {
    "id": "tool-030",
    "name": "Napkin AI",
    "category": "디자인·스킬",
    "url": "https://www.napkin.ai/ko/",
    "feature": "텍스트를 다이어그램으로 변환",
    "projects": [
      "교육·RAG"
    ],
    "apply": "교육자료·RAG 흐름도",
    "cost": "클라우드 요금제 확인"
  },
  {
    "id": "tool-031",
    "name": "Claude Design",
    "category": "디자인·스킬",
    "url": "https://www.anthropic.com/news/claude-design-anthropic-labs",
    "feature": "디자인·프로토타입·슬라이드",
    "projects": [
      "포트폴리오"
    ],
    "apply": "개발 전 화면 설계",
    "cost": "구독·접근 범위 확인"
  },
  {
    "id": "tool-032",
    "name": "RuView",
    "category": "공간·교육",
    "url": "https://github.com/ruvnet/RuView",
    "feature": "Wi-Fi 존재·움직임 감지 실험",
    "projects": [
      "로봇·디지털트윈"
    ],
    "apply": "관객 입장에 따른 영상 전환",
    "cost": "CSI 장비 필요. 시뮬레이션과 실측 구분"
  },
  {
    "id": "tool-033",
    "name": "God’s Eye View",
    "category": "공간·교육",
    "url": "https://github.com/bilawalsidhu/gods-eye-view",
    "feature": "공개 데이터 기반 3D 지구 시각화",
    "projects": [
      "로봇·디지털트윈"
    ],
    "apply": "공간정보 대시보드 참고",
    "cost": "실제 첩보위성 제어 아님"
  },
  {
    "id": "tool-034",
    "name": "OpenMAIC",
    "category": "공간·교육",
    "url": "https://github.com/THU-MAIC/OpenMAIC",
    "feature": "멀티 에이전트 학습 환경",
    "projects": [
      "교육·RAG"
    ],
    "apply": "ROS·전기 이론 AI 교실",
    "cost": "모델·서버·생성 비용 별도"
  },
  {
    "id": "tool-035",
    "name": "Immich",
    "category": "협업·운영",
    "url": "https://immich.app/",
    "feature": "개인 서버 사진·영상 관리",
    "projects": [
      "포트폴리오"
    ],
    "apply": "작품 원본 아카이브",
    "cost": "서버·저장장치·백업 별도"
  },
  {
    "id": "tool-036",
    "name": "AppFlowy",
    "category": "협업·운영",
    "url": "https://github.com/AppFlowy-IO/AppFlowy",
    "feature": "문서·위키·프로젝트",
    "projects": [
      "업무·마케팅"
    ],
    "apply": "기술·예술 활동 기록",
    "cost": "무료와 클라우드 유료 범위 확인"
  },
  {
    "id": "tool-037",
    "name": "Penpot",
    "category": "협업·운영",
    "url": "https://penpot.app/",
    "feature": "UI 디자인·프로토타입",
    "projects": [
      "포트폴리오"
    ],
    "apply": "앱 화면 협업 설계",
    "cost": "자체 호스팅 운영 비용 별도"
  },
  {
    "id": "tool-038",
    "name": "Jira",
    "category": "협업·운영",
    "url": "https://www.atlassian.com/software/jira",
    "feature": "작업·버그·스프린트",
    "projects": [
      "AI 에이전트"
    ],
    "apply": "완료 조건 기반 개발 보드",
    "cost": "zira를 Jira로 해석, 요금제 확인"
  },
  {
    "id": "tool-039",
    "name": "n8n",
    "category": "협업·운영",
    "url": "https://n8n.io/",
    "feature": "앱·API 반복 업무 자동화",
    "projects": [
      "업무·마케팅"
    ],
    "apply": "콘텐츠 승인 후 작업 연결",
    "cost": "fair-code, 자체 호스팅과 클라우드 구분"
  },
  {
    "id": "tool-040",
    "name": "Plausible",
    "category": "협업·운영",
    "url": "https://plausible.io/",
    "feature": "웹 방문 통계",
    "projects": [
      "업무·마케팅"
    ],
    "apply": "포트폴리오 유입 분석",
    "cost": "클라우드 유료·CE 직접 운영 구분"
  },
  {
    "id": "tool-041",
    "name": "Cal.com",
    "category": "협업·운영",
    "url": "https://cal.com/",
    "feature": "미팅 예약·일정 조율",
    "projects": [
      "업무·마케팅"
    ],
    "apply": "협업 상담 예약",
    "cost": "개인·팀 플랜 확인"
  },
  {
    "id": "tool-042",
    "name": "OpenSEO",
    "category": "협업·운영",
    "url": "https://github.com/every-app/open-seo",
    "feature": "키워드·백링크·순위 분석",
    "projects": [
      "업무·마케팅"
    ],
    "apply": "기술 블로그 주제 연구",
    "cost": "데이터 사용료 별도"
  },
  {
    "id": "tool-043",
    "name": "Claude Ads",
    "category": "협업·운영",
    "url": "https://github.com/AgriciDaniel/claude-ads",
    "feature": "유료 광고 계정 감사 스킬",
    "projects": [
      "업무·마케팅"
    ],
    "apply": "광고 성과 점검",
    "cost": "일반 SNS 게시 관리와 구분"
  },
  {
    "id": "tool-044",
    "name": "Fincept Terminal",
    "category": "금융",
    "url": "https://github.com/Fincept-Corporation/FinceptTerminal",
    "feature": "시장·경제 데이터 리서치",
    "projects": [
      "금융 연구"
    ],
    "apply": "금융 대시보드 구조 참고",
    "cost": "LLM·데이터 비용 별도"
  },
  {
    "id": "tool-045",
    "name": "Vibe-Trading",
    "category": "금융",
    "url": "https://github.com/HKUDS/Vibe-Trading",
    "feature": "AI 트레이딩 연구",
    "projects": [
      "금융 연구"
    ],
    "apply": "분석 에이전트 구조 참고",
    "cost": "실거래 연결 구현 제외"
  },
  {
    "id": "tool-046",
    "name": "KIS Open API",
    "category": "금융",
    "url": "https://github.com/koreainvestment/open-trading-api",
    "feature": "공식 시세·주문·잔고 Python 예제",
    "projects": [
      "금융 연구"
    ],
    "apply": "조회·백테스트·모의투자 학습",
    "cost": "계좌·API 신청 필요, 키 저장 금지"
  },
  {
    "id": "tool-047",
    "name": "CopyQ",
    "category": "PC 도구",
    "url": "https://hluk.github.io/CopyQ/",
    "feature": "클립보드 기록·재사용",
    "projects": [
      "PC 작업"
    ],
    "apply": "프롬프트·명령어 모음",
    "cost": "비밀번호·키 기록 제외"
  },
  {
    "id": "tool-048",
    "name": "Kando",
    "category": "PC 도구",
    "url": "https://kando.menu/",
    "feature": "제스처 기반 앱·파일 실행",
    "projects": [
      "PC 작업"
    ],
    "apply": "Cursor·Unity 빠른 전환",
    "cost": "로컬 설정 필요"
  },
  {
    "id": "tool-049",
    "name": "RustDesk",
    "category": "PC 도구",
    "url": "https://rustdesk.com/",
    "feature": "원격 PC 제어",
    "projects": [
      "PC 작업"
    ],
    "apply": "본인 작업 PC 관리",
    "cost": "자체 서버·Pro 구분"
  },
  {
    "id": "tool-050",
    "name": "Sunshine",
    "category": "PC 도구",
    "url": "https://docs.lizardbyte.dev/projects/sunshine/latest/",
    "feature": "저지연 화면·게임 스트리밍",
    "projects": [
      "PC 작업"
    ],
    "apply": "원격 시뮬레이션 화면",
    "cost": "수신 Moonlight 필요"
  },
  {
    "id": "tool-051",
    "name": "Sniffnet",
    "category": "PC 도구",
    "url": "https://sniffnet.app/",
    "feature": "네트워크 트래픽 모니터링",
    "projects": [
      "PC 작업"
    ],
    "apply": "앱 통신량·연결 상대 확인",
    "cost": "암호화된 내용까지 해독하는 도구 아님"
  },
  {
    "id": "tool-052",
    "name": "Bitwarden",
    "category": "PC 도구",
    "url": "https://bitwarden.com/",
    "feature": "암호화 비밀번호 관리",
    "projects": [
      "PC 작업"
    ],
    "apply": "개발 계정 관리",
    "cost": "무료·유료 플랜 구분"
  },
  {
    "id": "tool-053",
    "name": "StegCloak",
    "category": "PC 도구",
    "url": "https://github.com/KuroLabs/stegcloak",
    "feature": "텍스트에 암호화 메시지 숨기기",
    "projects": [
      "PC 작업"
    ],
    "apply": "텍스트 워터마크 실험",
    "cost": "숨김 자체가 탐지 불가능한 것은 아님"
  },
  {
    "id": "tool-054",
    "name": "yt-dlp",
    "category": "미디어 수집",
    "url": "https://github.com/yt-dlp/yt-dlp",
    "feature": "영상·음성 다운로드",
    "projects": [
      "콘텐츠 제작"
    ],
    "apply": "허용된 원본 보관",
    "cost": "AI 생성 기능 아님"
  },
  {
    "id": "tool-055",
    "name": "Cobalt",
    "category": "미디어 수집",
    "url": "https://github.com/imputnet/cobalt",
    "feature": "지원 온라인 미디어 저장",
    "projects": [
      "콘텐츠 제작"
    ],
    "apply": "본인 콘텐츠 보관",
    "cost": "지원 사이트 상태 확인"
  },
  {
    "id": "tool-056",
    "name": "Gist HTML Preview",
    "category": "기타",
    "url": "https://gistpreview.github.io/",
    "feature": "Gist HTML 미리보기",
    "projects": [
      "포트폴리오"
    ],
    "apply": "단일 HTML 시안 공유",
    "cost": "개인정보·API 키 삽입 금지"
  },
  {
    "id": "tool-057",
    "name": "NextPCB",
    "category": "기타",
    "url": "https://www.nextpcb.com/pcb-quote",
    "feature": "PCB 견적·거버 업로드",
    "projects": [
      "로봇·디지털트윈"
    ],
    "apply": "제작 파일 제출",
    "cost": "거버 미제공으로 업로드 미완료"
  },
  {
    "id": "tool-058",
    "name": "인플렉트",
    "category": "확인 필요",
    "url": "https://inflectco.com/",
    "feature": "서비스 내용 미확인",
    "projects": [
      "업무·마케팅"
    ],
    "apply": "본문 확인 후 판단",
    "cost": "추천 보류"
  },
  {
    "id": "tool-059",
    "name": "드롭쉬핑",
    "category": "개념",
    "url": "",
    "feature": "공급업체가 고객에게 직접 배송하는 판매 방식",
    "projects": [
      "업무·마케팅"
    ],
    "apply": "판매 흐름 학습",
    "cost": "수익·배송·반품 조건 별도"
  },
  {
    "id": "tool-060",
    "name": "OLE·CFBF",
    "category": "개념",
    "url": "https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-cfb/50708a61-81d9-49c8-ab9c-43c98a795242",
    "feature": "객체 연결·삽입과 복합 파일 형식",
    "projects": [
      "PC 작업"
    ],
    "apply": "문서 구조 이해",
    "cost": "제품이나 AI 도구 아님"
  },
  {
    "id": "tool-061",
    "name": "Manus 비교 글",
    "category": "기타",
    "url": "https://manus.im/ko/blog/lovable-vs-replit-vs-manus",
    "feature": "Lovable·Replit·Manus 비교",
    "projects": [
      "포트폴리오"
    ],
    "apply": "도구 선택 참고",
    "cost": "Manus가 작성한 자사 비교 자료"
  },
  {
    "id": "tool-062",
    "name": "blog.vibecoder·luna_workwithai",
    "category": "확인 필요",
    "url": "",
    "feature": "전달한 게시물의 계정 표기",
    "projects": [
      "AI 에이전트"
    ],
    "apply": "출처 분류",
    "cost": "독립 도구명 미확정"
  }
];
