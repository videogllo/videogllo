import Image from 'next/future/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

import 'animate.css/animate.min.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const posts = [
  {
    title: '크리에이터 컨텐츠 제작시장 사람과 돈이 몰린다.',
    url: 'https://it.chosun.com/site/data/html_dir/2022/09/19/2022091901535.html',
    imageUrl:
      'https://itimg.chosun.com/sitedata/image/202209/19/2022091901532_0.jpg'
  },
  {
    title: '영상, 웹툰 넘나드는 종합컨텐츠 플랫폼 시장의 규모확장',
    url: 'https://www.sportsw.kr/news/newsview.php?ncode=1065574629888996',
    imageUrl:
      'https://www.sportsw.kr/news/data/20221013/p1065574629888996_639_thum.jpg'
  },
  {
    title: '이제는 e-커머스도 크리에이터 컨텐츠 중심으로!',
    url: 'https://www.ddaily.co.kr/news/article/?no=247781',
    imageUrl:
      'https://www.ddaily.co.kr/data/photos/cdn/20220939/art_1664469786.jpg'
  },
  {
    title: '크리에이터 컨텐츠 제작시장 사람과 돈이 몰린다.',
    url: 'http://news.heraldcorp.com/view.php?ud=20220928000357',
    imageUrl:
      'https://creator.design/images/og/the.creator.logo-og.png'
  },
]

export function News() {
  return (
    <section
      id="news"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
          <div className="absolute inset-0">
            <div className="h-1/3 bg-white sm:h-2/3" />
          </div>
          <div className="relative mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                보도자료
              </h2>
            </div>
            <AnimationOnScroll
              animateIn="animate__backInUp"
              animateOut="animate__fadeOutDown"
              delay={100}
            >
              <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-4">
                {posts.map((post) => (
                  <div
                    key={post.title}
                    // href={post.url}
                    // target="blank"
                    onClick={e => window.open(post.url)}
                    className="flex cursor-pointer flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-500 ease-in-out hover:scale-105"
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="h-48 w-full object-cover"
                        src={post.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between bg-white p-6">
                      <div className="flex-1">
                        <a href={post.href} className="mt-2 block">
                          <p className="text-xl font-semibold text-gray-900">
                            {post.title}
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </Container>
    </section>
  )
}
