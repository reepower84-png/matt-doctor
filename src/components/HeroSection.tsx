'use client';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-orange-50 pt-16"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeInUp">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2 animate-pulse" />
            할리데이비슨 열선의류 공식 수리점
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-emerald-600">사지말고</span>{' '}
            <span className="text-orange-500">고쳐쓰세요</span>
          </h1>

          {/* Sub Headline */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-4">
            전기매트 & 열선의류 전문 수리
          </p>

          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
            10년 이상의 경험을 가진 전문 기술자가
            <br className="hidden sm:block" />
            고장난 전기매트와 열선의류를 새것처럼 수리해 드립니다.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              무료 상담 신청하기
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('services');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 font-semibold rounded-full border-2 border-gray-200 hover:border-blue-600 hover:text-emerald-600 transition-all duration-200"
            >
              서비스 알아보기
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">10+</div>
              <div className="text-sm text-gray-500">년 경력</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">5,000+</div>
              <div className="text-sm text-gray-500">수리 완료</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">98%</div>
              <div className="text-sm text-gray-500">만족도</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
