import Image from 'next/future/image'
import { useState } from 'react'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

import 'animate.css/animate.min.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";

const index = [
  { index: 1, title: '""비데오글로"는 무슨 뜻인가요?', description: '스페인어로 비디오를 뜻하는 "video"와 정리,정돈을 뜻하는 "arreglo"를 사용하여 정돈 된 미디어 정보를 제공하는 큐레이션 서비스를 뜻하는 용어 입니다.' },
  { index: 2, title: '"비데오글로"는 무슨 서비스인가요?', description: '크리에이터 및 정규미디어컨텐츠에대한 정보를 제공하고, 사용자의 활용스타일에 맞추어 미디어컨텐츠의 모든 정보를 큐레이션해주는 서비스입니다.' },
  { index: 3, title: '사용료가 따로 있나요?', description: '모든 서비스는 무료입니다.' },
  { index: 4, title: '저는 크리에이터입니다. 광고를 하고싶은데 광고상품이 있을까요?', description: '저희는 이제 막 크리에이터로서 꿈을 펼치시는 크리에이터분들의 성장을 적극 돕는 플랫폼으로서 저렴하고 효과적인 광고비용으로 광고를 진행할 수 있는 몇가지 광고상품을 안내해드릴 수 있습니다. videogllo@videogllo.com 으로 문의메일 주시면 각 광고상품을 소개해드리는 안내 소개서를 발송해드리겠습니다.' },
  { index: 5, title: '고객센터와 연결가능한 수단을 알려주세요.', description: '본 브랜딩페이지 하단에 보시면 연락처 및 카카오채널, e메일을 확인하실 수 있습니다.' },
]

export function Qna() {
  const [tableToggleState, setTableToggleState] = useState(null)

  const tableToggle = (id) => {
    setTableToggleState(id)
  }

  return (
    <section id="qna" className="relative overflow-hidden bg-blue-600 py-32">
      <Image
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl tracking-tight text-white sm:text-4xl">
            자주 묻는 질문
          </h2>
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOut='animate__fadeOutUp'
            delay={100}
          >
            <div className="mt-8 flex flex-col">
              <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8 lg:p-4">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-300">
                      <tbody className="bg-white">
                        {index.map((i, i2) => (
                          <tr
                            key={i.index}
                            className={
                              i2 % 2 === 0
                                ? 'flex flex-col text-left'
                                : 'flex flex-col bg-gray-50 text-left'
                            }
                          >
                            <td
                              className="flex whitespace-nowrap px-3 py-4 text-left text-sm text-gray-500 transition-all duration-300 ease-in-out hover:bg-gray-200 cursor-pointer"
                              onClick={() => {
                                if (i.index == tableToggleState) {
                                  tableToggle(null)
                                } else {
                                  tableToggle(i.index)
                                }
                              }}
                            >
                              <div className='flex items-center text-base'>
                                <QuestionMarkCircleIcon className='w-5 h-5 mt-1'/>&emsp;
                                {i.title}
                              </div>
                            </td>
  
                            {tableToggleState === i.index ? (
                              <td className="flex !bg-white px-3 py-4 text-left text-sm text-gray-500 pl-8 border-t border-gray-400" style={{wordBreak:"keep-all"}}>
                                {i.description}
                              </td>
                            ) : null}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </AnimationOnScroll>
        </div>
      </Container>
    </section>
  )
}
