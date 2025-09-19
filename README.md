# Timetable - 직원 업무 시간 관리 시스템

100명의 직원이 하루 일과를 기록하고 관리하는 웹 애플리케이션

## 기술 스택

- **Frontend Framework**: React + TypeScript + Vite
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Data Fetching**: Tanstack Query
- **Routing**: React Router DOM
- **Charts**: Recharts
- **Icons**: Lucide React
- **Date Handling**: date-fns

## 주요 기능

1. **직원 업무 시간 기록**
   - 개인별 일과 시간 할당
   - 업무 분야별 구분
   - 시간대별 업무 기록

2. **관리자 대시보드**
   - 직원별 업무 현황 조회
   - 간트 차트 형식의 시각화
   - 업무 평가 기능

3. **통계 및 보고서**
   - 부서별 업무 통계
   - 개인별 성과 분석
   - 데이터 시각화

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

## 프로젝트 구조

```
src/
├── components/     # 재사용 가능한 컴포넌트
├── pages/         # 페이지 컴포넌트
├── store/         # Zustand 상태 관리
├── hooks/         # 커스텀 훅
├── utils/         # 유틸리티 함수
├── types/         # TypeScript 타입 정의
└── api/           # API 관련 함수
```