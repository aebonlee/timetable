import { Calendar, Clock, Users, BarChart3, CheckCircle, TrendingUp, Shield, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-indigo-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">TimeTracker Pro</h1>
            </div>
            <nav className="flex space-x-4">
              <Link to="/login" className="text-gray-600 hover:text-gray-900 font-medium">
                로그인
              </Link>
              <Link to="/login" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg">
                무료 시작하기
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              팀의 생산성을 <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">혁신적으로</span> 관리하세요
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              100명 이상의 직원이 매일 사용하는 스마트한 업무 시간 관리 시스템.
              실시간 모니터링과 데이터 기반 인사이트로 팀의 효율성을 극대화하세요.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/login" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-xl">
                지금 시작하기
              </Link>
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-all">
                데모 보기
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { label: '활성 사용자', value: '100+', icon: Users },
              { label: '기록된 시간', value: '50,000+', icon: Clock },
              { label: '완료된 프로젝트', value: '500+', icon: CheckCircle },
              { label: '생산성 향상', value: '35%', icon: TrendingUp },
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <stat.icon className="h-8 w-8 text-indigo-600 mb-3" />
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-center mb-12">핵심 기능</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Calendar,
                  title: '스마트 일정 관리',
                  description: '직관적인 캘린더로 일과를 한눈에 파악하고 효율적으로 관리',
                  color: 'from-blue-500 to-cyan-500',
                },
                {
                  icon: Users,
                  title: '팀 협업 도구',
                  description: '부서별, 프로젝트별 실시간 협업과 커뮤니케이션',
                  color: 'from-purple-500 to-pink-500',
                },
                {
                  icon: BarChart3,
                  title: '실시간 분석',
                  description: '간트 차트와 대시보드로 프로젝트 진행 상황 즉시 파악',
                  color: 'from-green-500 to-emerald-500',
                },
                {
                  icon: Shield,
                  title: '보안 & 권한 관리',
                  description: '역할 기반 접근 제어로 안전한 데이터 관리',
                  color: 'from-orange-500 to-red-500',
                },
              ].map((feature, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">왜 TimeTracker Pro인가?</h3>
                <div className="space-y-4">
                  {[
                    { icon: Zap, text: '직관적인 UI/UX로 누구나 쉽게 사용' },
                    { icon: Shield, text: '엔터프라이즈급 보안과 데이터 보호' },
                    { icon: TrendingUp, text: 'AI 기반 생산성 분석과 개선 제안' },
                    { icon: Users, text: '무제한 팀원 초대와 협업 기능' },
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <benefit.icon className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                      <span className="text-gray-700">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
                <h4 className="text-2xl font-bold mb-4">지금 시작하세요!</h4>
                <p className="mb-6">
                  14일 무료 체험으로 팀의 생산성 향상을 직접 경험해보세요.
                  신용카드 정보 없이 바로 시작할 수 있습니다.
                </p>
                <Link to="/login" className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  무료 체험 시작
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-indigo-400 mr-2" />
                <span className="font-semibold">TimeTracker Pro</span>
              </div>
              <p className="text-gray-400 text-sm">
                스마트한 업무 시간 관리의 시작
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">제품</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">기능</a></li>
                <li><a href="#" className="hover:text-white">요금제</a></li>
                <li><a href="#" className="hover:text-white">고객사례</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">지원</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">도움말</a></li>
                <li><a href="#" className="hover:text-white">문의하기</a></li>
                <li><a href="#" className="hover:text-white">API 문서</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">회사</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">소개</a></li>
                <li><a href="#" className="hover:text-white">채용</a></li>
                <li><a href="#" className="hover:text-white">블로그</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 TimeTracker Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}