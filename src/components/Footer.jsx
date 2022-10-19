import { Container } from '@/components/Container'
import Link from 'next/link'
import Image from 'next/future/image'
import Logo from '@/images/logos/logo.png'
import KakaoIcon from '@/images/icon/KakaoTalk_logo.svg'

export function Footer() {
  return (
    <footer className="bg-slate-50" id='footer'>
      <Container>
        <div className="flex items-center border-t border-slate-400/10 pt-10 pb-5 sm:justify-between  md:flex-row">
          <div className='flex-col'>
            <p className='py-2 text-gray-600 font-semibold'>비데오글로(VIDEOGLLO)</p>
            <small className='text-xs text-slate-500'>대표 : 김종훈</small><br/>
            <small className='text-xs text-slate-500'>주소 : 서울특별시 강서구 마곡중앙6로 11 315호 비데오글로</small><br/>
            <small className='text-xs text-slate-500'>사업자 등록번호 : 114-54-04443</small><br/>
            <small className='text-xs text-slate-500'>대표 번호 : 02-2039-1690</small><br/>
            <a href='mailto:videogllo@videogllo.com' className='text-xs text-slate-500'>제휴 문의 : videogllo@videogllo.com</a><br/>
          </div>
          <div>
          <Link href="#" aria-label="Home">
            <Image
              src={Logo}
              height={100}
              width={100}
            ></Image>
          </Link>
          </div>
        </div>
        <div className="flex items-center border-t border-slate-400/10 pt-3 pb-10 sm:justify-between  md:flex-row">
          <ul className='flex'>
            <li><a href="#" className='text-xs text-slate-500 mr-5'>이용약관</a></li>
            <li><a href="#" className='text-xs text-slate-500 mr-5'>개인정보 처리방침</a></li>
            {/* <li><a href="#" className='text-xs text-slate-500 mr-5'>1:1문의</a></li> */}
          </ul>
          <div>
            <Image
              className="cursor-pointer rounded-lg"
              src={KakaoIcon}
              alt="kakaotalk"
              width={40}
              height={40}
              onClick={(e) => {
                window.open('http://pf.kakao.com/_gqGxbxj')
              }}
            ></Image>
          </div>
        </div>
      </Container>
    </footer>
  )
}


{/* 
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
</div>*/}