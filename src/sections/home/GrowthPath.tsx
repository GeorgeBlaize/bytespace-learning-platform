import SectionHeading from '../../components/ui/SectionHeading'
import { stats } from '../../data/content'

export default function GrowthPath() {
  return (
    <section className="container-page grid items-center gap-6 pt-20 lg:grid-cols-[545px_1fr] lg:gap-[35px] lg:pt-2.5">
      <div className="max-w-[560px]">
        <SectionHeading
          align="left"
          title="Your Path to Professional Growth Starts Here!"
          description="Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need."
        />
        <dl className="mt-12 flex gap-10 sm:gap-14">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse">
              <dt className="mt-1 text-lg font-light text-ink">{stat.label}</dt>
              <dd className="text-4xl font-medium text-brand">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <img
        src="/images/path-illustration.png"
        alt="Smiling learner holding a laptop, with a course card and a 55% learning progress card"
        width={740}
        height={820}
        loading="lazy"
        className="fade-edges mx-auto w-full max-w-[740px] lg:-mr-[120px] lg:w-[740px]"
      />
    </section>
  )
}
