import TestimonialCard from '../../components/cards/TestimonialCard'
import { testimonials } from '../../data/content'

export default function Testimonials() {
  return (
    <section className="bg-glow-alt py-20 lg:pt-20 lg:pb-[60px]">
      <div className="container-page">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
          <h2 className="text-[32px] leading-tight font-semibold tracking-tight text-black sm:text-5xl sm:leading-[1.1]">
            Discover What Our <br className="hidden sm:block" />
            Community Is Saying
          </h2>
          <p className="text-base leading-relaxed font-light text-ink/80 sm:text-lg lg:pl-2">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly
            from those who have experienced the transformative journey of learning and creating on our platform. Explore
            testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <ul className="mt-12 grid items-start gap-6 md:grid-cols-2 lg:mt-[72px] lg:grid-cols-3 lg:gap-10">
          {testimonials.map((t) => (
            <li key={t.name}>
              <TestimonialCard testimonial={t} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
