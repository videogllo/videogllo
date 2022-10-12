import Image from 'next/future/image'
import { useState } from 'react'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

import 'animate.css/animate.min.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";

const index = [
  { index: 1, title: 'question1?', description: 'Description1.' },
  { index: 2, title: 'question2?', description: 'Description2.' },
  { index: 3, title: 'question3?', description: 'Description3.' },
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
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
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
                              <div className='flex items-center'>
                                <QuestionMarkCircleIcon className='w-5 h-5 mt-1'/>&emsp;
                                {i.title}
                              </div>
                            </td>
  
                            {tableToggleState === i.index ? (
                              <td className="flex whitespace-nowrap !bg-white px-3 py-4 text-left text-sm text-gray-500 pl-8">
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
