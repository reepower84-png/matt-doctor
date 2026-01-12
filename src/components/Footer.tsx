'use client';

import Image from 'next/image';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Image
              src="/ChatGPT_Image_2026년_1월_12일_오전_11_41_50_가로-removebg-preview.png"
              alt="매트박사"
              width={200}
              height={67}
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 mb-4">
              사지말고 고쳐쓰세요!
              <br />
              전기매트 & 열선의류 전문 수리점
            </p>
            <p className="text-sm text-gray-500">
              할리데이비슨 열선의류 공식 수리점
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">바로가기</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  홈
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  서비스
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('why-us')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  왜 매트박사?
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('process')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  수리 과정
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  문의하기
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">주소</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 mt-0.5 text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>인천광역시 계양구 계양산로173, 2F</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between text-sm text-gray-500">
            <div className="mb-4 md:mb-0">
              <p>상호: 제이코리아</p>
              <p>사업자등록번호: 278-30-01540</p>
            </div>
            <div className="text-center md:text-right">
              <p>&copy; 2018 매트박사. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
