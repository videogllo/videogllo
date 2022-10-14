import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="flex items-center border-t border-slate-400/10 py-10 sm:justify-between">
          <div>
            <p className="text-base text-slate-500">
              <a
                href="http://pf.kakao.com/_gqGxbxj"
                className="block underline underline-offset-4"
              >
                연락: 카카오톡 채널 링크
              </a>
            </p>

            <p className="mt-6 text-sm text-slate-500 sm:mt-1">
              문의: 02-2039-1690
            </p>

            <p className="mt-6 text-sm text-slate-500 sm:mt-1">
              주소: 서울특별시 강서구 마곡중앙6로 11 315호 비데오글로
            </p>
          </div>

          <Link href="#" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
        </div>
      </Container>
    </footer>
  )
}
