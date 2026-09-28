import { Search } from 'lucide-react'
import type { CSSProperties, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { HappyStudentsCard, LearningProgressCard, TopicCard } from '../../components/cards/FloatingCards'
import Navbar from '../../components/layout/Navbar'
import { Button } from '../../components/ui/Button'

export default function Hero() {
  const navigate = useNavigate()

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    navigate('/#courses')
  }

  return (
    <section className="bg-grid relative overflow-hidden">
      <Navbar />

      <div className="relative z-10 container-page pt-8 text-center text-white lg:pt-[62px]">
        <h1 className="mx-auto max-w-[900px] text-[38px] leading-[1.2] font-medium tracking-tight sm:text-5xl lg:text-[64px] lg:leading-[86px]">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="mx-auto mt-5 max-w-[830px] text-base font-light text-white/95 sm:text-lg lg:mt-[22px]">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        <form role="search" onSubmit={handleSearch} className="mx-auto mt-10 flex max-w-[580px] items-center gap-3 sm:gap-4 lg:mt-[59px]">
          <label className="relative flex-1">
            <span className="sr-only">Search courses</span>
            <Search className="pointer-events-none absolute top-1/2 left-6 size-5 -translate-y-1/2 text-muted" aria-hidden />
            <input
              type="search"
              placeholder="Course, topic, creator"
              className="h-[52px] w-full rounded-full bg-white pr-4 pl-14 text-lg text-ink outline-none placeholder:text-muted focus-visible:ring-2 focus-visible:ring-lime"
            />
          </label>
          <Button type="submit">Search</Button>
        </form>
      </div>

      {/* The artwork is laid out on the design's 1440×782 canvas and scaled as one unit. */}
      <div
        aria-hidden
        className="pointer-events-none relative -mt-[calc(274px*var(--s))] h-[calc(782px*var(--s))] [--s:0.5] sm:[--s:0.62] md:[--s:0.75] lg:[--s:0.9] xl:[--s:1]"
      >
        <div
          className="absolute top-0 left-1/2 h-[782px] w-[1440px] origin-top"
          style={{ transform: 'translateX(-50%) scale(var(--s))' } as CSSProperties}
        >
          <img src="/images/hero-stage.png" alt="" width={1440} height={782} fetchPriority="high" className="absolute inset-0" />
          <TopicCard className="absolute top-[399px] left-[404px] h-[70px] w-[208px]" />
          <LearningProgressCard className="absolute top-[411px] left-[842px] h-[131px] w-[232px]" />
          <HappyStudentsCard className="absolute top-[597px] left-[328px] h-[121px] w-[258px]" />
        </div>
      </div>
    </section>
  )
}
