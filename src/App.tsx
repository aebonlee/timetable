import { Calendar, Clock, Users, BarChart3 } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-indigo-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">업무 시간 관리 시스템</h1>
            </div>
            <nav className="flex space-x-4">
              <button className="text-gray-600 hover:text-gray-900">로그인</button>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                시작하기
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            효율적인 업무 시간 관리
          </h2>
          <p className="text-xl text-gray-600">
            100명의 직원이 하루 일과를 체계적으로 기록하고 관리합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Calendar className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">일과 기록</h3>
            <p className="text-gray-600">매일의 업무를 시간대별로 상세히 기록</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Users className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">부서별 관리</h3>
            <p className="text-gray-600">부서와 팀 단위의 체계적인 업무 분류</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <BarChart3 className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">간트 차트</h3>
            <p className="text-gray-600">시각적인 업무 진행 현황 파악</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Clock className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">실시간 모니터링</h3>
            <p className="text-gray-600">관리자를 위한 실시간 대시보드</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold mb-6">주요 기능</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-lg mb-3 text-indigo-600">직원용 기능</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                  개인별 일과 시간 할당 및 기록
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                  업무 카테고리별 시간 분배
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                  주간/월간 업무 리포트 조회
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3 text-indigo-600">관리자용 기능</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                  팀원 업무 현황 실시간 모니터링
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                  간트 차트를 통한 프로젝트 관리
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                  성과 평가 및 피드백 시스템
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 업무 시간 관리 시스템. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App