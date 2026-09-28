import { CircleCheck } from 'lucide-react'
import SectionHeading from '../../components/ui/SectionHeading'
import { creatorBenefits } from '../../data/content'

export default function CreateManage() {
  return (
    <section className="container-page grid items-center gap-6 pt-8 lg:grid-cols-[1fr_580px] lg:gap-10 lg:pt-0">
      <img
        src="/images/create-illustration.png"
        alt="Creator with a headset and tablet, next to revenue and happy-students cards"
        width={700}
        height={700}
        loading="lazy"
        className="fade-edges order-last mx-auto w-full max-w-[700px] lg:order-none lg:-ml-[120px] lg:w-[700px]"
      />

      <div className="max-w-[580px]">
        <SectionHeading
          align="left"
          title={
            <>
              Create &amp; Manage <br className="hidden sm:block" />
              Courses Easily.
            </>
          }
          description={
            <>
              <strong className="font-semibold text-ink">ByteSpace</strong> supports individuals or entities in the
              creation, publication, and administration of educational courses.
            </>
          }
        />
        <ul className="mt-12 flex flex-col gap-4">
          {creatorBenefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-3 text-lg text-ink">
              <CircleCheck className="size-6 shrink-0 fill-brand text-white" strokeWidth={2} aria-hidden />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
