import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import { ButtonLink } from '../components/ui/Button'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function NotFound() {
  useDocumentTitle('Page not found')

  return (
    <>
      <div className="bg-grid overflow-hidden">
        <Navbar />
        <main className="container-page pt-16 pb-20 text-center text-white lg:pt-[105px] lg:pb-[125px]">
          <p
            aria-hidden
            className="bg-linear-to-b from-lime from-30% to-lime/0 bg-clip-text font-display text-[160px] leading-[0.8] font-semibold tracking-tight text-transparent sm:text-[260px] lg:text-[440px]"
          >
            404
          </p>
          <h1 className="relative mx-auto -mt-8 max-w-[900px] text-4xl leading-tight font-semibold tracking-tight sm:-mt-14 sm:text-6xl lg:-mt-24 lg:text-[72px]">
            The page you are looking for doesn’t exist
          </h1>
          <p className="mt-10 text-lg font-light">Try to use a correct url or go back to homepage to start again</p>
          <ButtonLink to="/" className="mt-8">
            Back to Home
          </ButtonLink>
        </main>
      </div>
      <Footer />
    </>
  )
}
