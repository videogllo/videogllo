import { Container } from '@/components/Container'

import 'animate.css/animate.min.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Container className="relative">
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          animateOut='animate__fadeOut'
          delay={100}
        >
          <div className="bg-white">
            <div className="mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                고객센터
              </h2>
              <p className="mt-6 max-w-3xl text-lg text-gray-500">
                친절히 모시겠습니다.
              </p>
              <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Adress</h3>
                  <p className="mt-2 text-base text-gray-500">
                    <span className="block">
                      서울특별시 강서구 마곡중앙6로 11 315호 비데오글로
                    </span>
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Tel.</h3>
                  <p className="mt-2 text-base text-gray-500">
                    <span className="block">02-2039-1690</span>
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Chat</h3>
                  <p className="mt-2 text-base text-gray-500">
                    <span className="block">Link Update</span>
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Map</h3>
                  <p className="mt-2 text-base text-gray-500">
                    <span className="block">Map Update</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      </Container>
    </section>
  )
}
