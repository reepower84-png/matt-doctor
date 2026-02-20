'use client';

const testimonials = [
  {
    name: '김영수',
    location: '서울 강남구',
    product: '전기매트 수리',
    rating: 5,
    text: '온도 조절기가 고장나서 새로 사려고 했는데, 매트박사에서 수리하니 새것처럼 됐어요. 비용도 새 제품의 1/3도 안 되니 정말 만족합니다!',
  },
  {
    name: '이정희',
    location: '인천 계양구',
    product: '할리데이비슨 열선 재킷',
    rating: 5,
    text: '다른 곳에서는 수리 불가라고 했던 할리데이비슨 열선 재킷을 완벽하게 고쳐주셨어요. 공식 수리점답게 실력이 확실합니다.',
  },
  {
    name: '박민수',
    location: '경기 부천시',
    product: '전기장판 수리',
    rating: 5,
    text: '택배로 보냈는데 3일 만에 수리 완료되어 돌아왔습니다. 진단부터 수리 과정까지 카톡으로 상세하게 알려주셔서 믿음이 갔어요.',
  },
  {
    name: '최수진',
    location: '서울 마포구',
    product: '전기매트 수리',
    rating: 5,
    text: '겨울에 갑자기 전기매트가 안 되서 급하게 맡겼는데, 당일 수리해주셨어요. 친절한 상담과 빠른 수리에 감동받았습니다.',
  },
  {
    name: '정대호',
    location: '경기 수원시',
    product: '열선 조끼 수리',
    rating: 5,
    text: '바이크 타면서 필수인 열선 조끼가 고장나서 걱정했는데, 매트박사에서 깔끔하게 수리해주셨습니다. 열선 온도도 균일하게 잘 나옵니다.',
  },
  {
    name: '한미영',
    location: '인천 남동구',
    product: '전기장판 수리',
    rating: 4,
    text: '10년 된 전기장판인데 열선 교체하니까 새것같이 따뜻해졌어요. 사지말고 고쳐쓰라는 말이 딱 맞습니다. 주변에도 많이 추천하고 있어요!',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            고객 후기
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            매트박사를 이용하신 고객님들의 생생한 후기입니다
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <svg className="w-8 h-8 text-emerald-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                </svg>
              </div>

              {/* Review Text */}
              <p className="text-gray-600 leading-relaxed flex-1 mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Rating */}
              <StarRating rating={testimonial.rating} />

              {/* Divider */}
              <div className="border-t border-gray-100 mt-4 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                  <span className="text-xs font-medium bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">
                    {testimonial.product}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
