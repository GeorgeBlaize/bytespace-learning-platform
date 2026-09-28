import type { Testimonial } from '../../data/content'

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="h-full rounded-3xl bg-white p-6">
      <img src={testimonial.avatar} alt="" width={80} height={80} loading="lazy" className="size-20 rounded-full" />
      <figcaption className="mt-8">
        <p className="font-display text-xl font-medium text-ink">{testimonial.name}</p>
        <p className="mt-1 text-lg text-brand">{testimonial.role}</p>
      </figcaption>
      <blockquote className="mt-8 text-lg leading-[1.6] font-light text-ink/80">"{testimonial.quote}"</blockquote>
    </figure>
  )
}
