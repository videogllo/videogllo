import { Container } from '@/components/Container'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>


        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Videogllo. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
