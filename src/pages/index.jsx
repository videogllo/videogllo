import Head from 'next/head'

import { Qna } from '@/components/Qna'
import { News } from '@/components/News'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Main } from '@/components/Main'
import { Service } from '@/components/Service'

import { useState } from 'react'

import VideoModal from '../components/VideoModal'

// import 'animate.css/animate.min.css'
// import { AnimationOnScroll } from 'react-animation-on-scroll'

export default function Home() {
  const [isVideoModal, setIsVideoModal] = useState(false);

  return (
    <>
      <Head>
        <title>Videogllo official</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <main className='overflow-x-hidden'>
          <Main isVideoModal={isVideoModal} setIsVideoModal={setIsVideoModal}/>

          <Service />

          <News />

          <Qna />
      </main>
      <Footer />

      {isVideoModal && (
        <VideoModal
          isVideoModal={isVideoModal}
          setIsVideoModal={setIsVideoModal}
        ></VideoModal>
      )}
    </>
  )
}
