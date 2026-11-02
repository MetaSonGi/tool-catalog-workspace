# 도구를 기능으로 바꾸는 적용 지도

## 1. 지금 만든 실행 가능한 저장소

| 저장소 | 적용 아이디어 | 실제 구현 | 추가 조건 |
|---|---|---|---|
| tool-catalog-workspace | Jira·AppFlowy식 작업 관리, 도구 목록 | 62개 항목 검색, 적용 후보·메모, 상태 보드, JSON 백업 | Python 브라우저 서버 |
| video-clip-subtitle-studio | LosslessCut·Whisper·Ollama 흐름 | FFmpeg 구간 추출, Whisper SRT/TXT, 템플릿/LLM 초안 | FFmpeg; 음성은 Whisper, AI 초안은 Ollama |
| research-workbench | Pi·Paperclip·OpenResearch·Atlas의 일부 아이디어 | 역할별 수동 작업 큐, 근거 검색, Ollama 임베딩·RAG, 실제 로컬 Python 실험 기록·비교 | 키워드 검색은 Python만; AI는 Ollama |

이름이 비슷한 원본 제품 전체를 재현한 것이 아닙니다. 특히 연구실은 자율 멀티 에이전트 오케스트레이터가 아니며, 생성 결과를 자동 실행하지 않습니다.

## 2. 기존 개발 목표에 적용할 기능 — 후속 구현 범위

| 개발 목표 | 적용할 구성 | 구현할 기능 | 실제 검증에 필요한 것 |
|---|---|---|---|
| Android 프로젝션 매핑 | Penpot·Claude Design·Archify | 모서리 편집, 호모그래피, 마스크, 프로젝터 출력 | Android·프로젝터 실기기 |
| 음성 로봇 제어 | Whisper·Ollama·Unity·ROS 2 | 명령 파싱, 허용 동작 검증, 가상/실물 어댑터, 정지 우선 처리 | 로봇별 프로토콜·가동 범위 검증 |
| 드론 군집·FPV 훈련 | Unity 시뮬레이션, 실험 기록 | 기종 설정, 편대, 분리, 충돌 회피, FPV 카메라 | 시뮬레이터 물리·입력 장치 검증 |
| VR 전시 공간 | Immich·Unity | 원본 보관, 3D 공간·작품 배치, 이동·안내 | 스캔 데이터·VR 장치 |
| LMS·LXP·xAPI | OpenMAIC·Whisper·RAG | 학습 콘텐츠, 추천, 퀴즈, 진도·학습 활동 기록 | 콘텐츠 사용 권한·LRS |
| 스마트팩토리 VR 훈련 | Unity·ROS 2 | 설비 시나리오, 훈련 단계, 성공 조건·평가 | 설비 모델·훈련 기준 |
| RAG 학습 | Ollama·연구실 | 청크, 임베딩, 유사도 검색, 근거 주입·출처 | 로컬 모델 다운로드 |
| 카메라 없는 전시 반응 | RuView | 관객 존재 이벤트를 작품 반응으로 전달 | ESP32-S3 등 CSI 수집 장비, 공간별 실측 |

이 표의 후속 기능은 이번 3개 저장소에서 완성됐다는 뜻이 아닙니다. 별도 Unity/Android 프로젝트 요청과 구분한 연결 계획입니다.

## 3. 설치해서 쓰는 편이 합리적인 도구

ShareX, CopyQ, RustDesk, Sunshine/Moonlight, Bitwarden, Sniffnet, Kando, yt-dlp, Cobalt, Immich는 원본 설치를 우선합니다. 비밀번호 관리자·원격 제어·다운로더를 새로 복제하는 작업은 이번 범위에 넣지 않았습니다.

## 4. 외부 비용·검증이 필요한 도구

- Open-Generative-AI: 클라우드 MuAPI 이용료 별도. 로컬 영상은 Wan2GP와 지원 GPU 필요.
- VoiceStudio: 음성 모델의 상업 이용 조건 확인.
- MiroFish: LLM·Zep 설정과 호출 비용, 결과의 현실 타당성 별도 평가.
- OpenSEO: 데이터 이용료, Claude Ads: 광고 계정 권한과 모델 이용료.
- KIS·Vibe-Trading·Fincept: 시세/데이터/모델/계좌 조건 별도. 이번에는 실거래 코드를 만들지 않음.
- Agnes AI·Artflow·Manus: 플랜·생성 한도·상업 이용·데이터 전송 범위 확인.
- n8n: fair-code 조건 확인. 다른 SaaS의 서버 비용도 별도.
- 레아·인플렉트·영상 속 MotionSites 도메인: 추가 원본 확인 필요.
