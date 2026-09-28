import { partners } from '../../data/content'

export default function Partners() {
  return (
    <section aria-label="Trusted by" className="bg-[#f5f5f6] py-12 lg:py-[77px]">
      <ul className="container-page flex flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:justify-between lg:px-[30px]">
        {partners.map((src, i) => (
          <li key={src}>
            <img
              src={src}
              alt={`Partner logo ${i + 1}`}
              width={176}
              height={42}
              loading="lazy"
              className="h-8 w-auto lg:h-[42px]"
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
