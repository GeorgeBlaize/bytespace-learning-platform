import type { CSSProperties } from 'react'
import { ButtonLink } from '../../components/ui/Button'

export default function CreatorCta() {
  return (
    <section id="creators" className="bg-grid relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 h-[488px] w-[1440px] origin-top [--s:0.6] md:[--s:0.8] xl:[--s:1]"
        style={{ transform: 'translateX(-50%) scale(var(--s))' } as CSSProperties}
      >
        <img src="/images/cta-shapes.png" alt="" width={1440} height={488} loading="lazy" className="size-full" />
      </div>

      <div className="relative container-page py-24 text-center text-white lg:flex lg:min-h-[488px] lg:flex-col lg:items-center lg:justify-center lg:py-0">
        <h2 className="mx-auto max-w-[600px] text-[32px] leading-tight font-semibold tracking-tight sm:text-5xl sm:leading-[1.15]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="mx-auto mt-8 max-w-[970px] text-base leading-relaxed font-light sm:text-lg">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and
          become a part of a community comprising over 10,000 local and international creators. Utilize our Course
          Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <ButtonLink to="/sign-up" className="mt-10">
          Join as Creator
        </ButtonLink>
      </div>
    </section>
  )
}
