import CategoryCard from '../../components/cards/CategoryCard'
import SectionHeading from '../../components/ui/SectionHeading'
import { categories } from '../../data/content'

export default function LearningPaths() {
  return (
    <section id="learning-paths" className="scroll-mt-4 pb-20 lg:pb-[120px]">
      <div className="container-page">
        <SectionHeading
          size="md"
          title="Explore Diverse Learning Paths at Bytespace"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />
        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:mt-[70px] lg:grid-cols-6 lg:gap-10">
          {categories.map((category) => (
            <li key={category.label}>
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
