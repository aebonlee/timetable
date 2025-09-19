export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">대시보드</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700">오늘 근무 시간</h3>
          <p className="text-3xl font-bold text-indigo-600">8시간 30분</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700">이번 주 근무</h3>
          <p className="text-3xl font-bold text-green-600">42시간</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700">완료한 작업</h3>
          <p className="text-3xl font-bold text-purple-600">12개</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700">생산성 점수</h3>
          <p className="text-3xl font-bold text-orange-600">85%</p>
        </div>
      </div>
    </div>
  )
}