import Image from 'next/future/image'
import { useState } from 'react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

const index = [
  { index: 1, title: 'Q. question1?', description: 'Description1.' },
  { index: 2, title: 'Q. question2?', description: 'Description2.' },
  { index: 3, title: 'Q. question3?', description: 'Description3.' },
]

export function CallToAction() {
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
          {/* <p className="mt-4 text-lg tracking-tight text-white">
            It’s time to take control of your books. Buy our software so you can
            feel like you’re doing something productive.
          </p>
          <Button href="/register" color="white" className="mt-10">
            Get 6 months free
          </Button> */}
          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
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
                            {i.title}
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
        </div>
      </Container>
    </section>
  )
}
