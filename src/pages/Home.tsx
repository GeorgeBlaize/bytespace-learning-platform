import Footer from '../components/layout/Footer'
import useDocumentTitle from '../hooks/useDocumentTitle'
import CreateManage from '../sections/home/CreateManage'
import CreatorCta from '../sections/home/CreatorCta'
import DiscoverCourses from '../sections/home/DiscoverCourses'
import GrowthPath from '../sections/home/GrowthPath'
import Hero from '../sections/home/Hero'
import LearningPaths from '../sections/home/LearningPaths'
import Partners from '../sections/home/Partners'
import Testimonials from '../sections/home/Testimonials'

export default function Home() {
  useDocumentTitle()

  return (
    <>
      <Hero />
      <main>
        <Partners />
        <DiscoverCourses />
        <LearningPaths />
        <div className="bg-glow overflow-hidden">
          <GrowthPath />
          <CreateManage />
        </div>
        <CreatorCta />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
