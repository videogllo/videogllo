import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import Link from 'next/link'
import Image from 'next/future/image'
import KakaoIcon from '@/images/icon/KakaoTalk_logo.svg'

export function Footer() {
  return (
    <footer className="bg-slate-50" id='footer'>
      <Container>
        <div className="flex items-center border-t border-slate-400/10 py-10 sm:justify-between flex-col md:flex-row">
        <Link href="#" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
          <div>
            <div className="mt-6 mb-4 flex items-center text-sm text-slate-500 sm:mt-1">
              <Image
                className="cursor-pointer"
                src={KakaoIcon}
                alt="kakaotalk"
                width={40}
                height={40}
                onClick={(e) => {
                  window.open('http://pf.kakao.com/_gqGxbxj')
                }}
              ></Image>
            </div>

            <p className="mt-2 md:mt-4 text-sm text-slate-500 sm:mt-1">
              문의: 02-2039-1690
            </p>

            <p className="mt-2 md:mt-4 text-sm text-slate-500 sm:mt-1">
              <a href='mailto:videogllo@videogllo.com'>이메일: videogllo@videogllo.com</a>
            </p>

            <p className="mt-2 md:mt-4 text-sm text-slate-500 sm:mt-1">
              주소: 서울특별시 강서구 마곡중앙6로 11 315호 비데오글로
            </p>
          </div>

          
        </div>
      </Container>
    </footer>
  )
}
