import type { Category } from '../../data/content'

export default function CategoryCard({ category }: { category: Category }) {
  const Icon = category.icon
  return (
    <a
      href="#courses"
      className="flex aspect-square flex-col items-center justify-center gap-4 rounded-[20px] border border-line bg-white p-4 text-center transition hover:-translate-y-1 hover:border-lime hover:shadow-lg"
    >
      <span className="flex size-[60px] items-center justify-center rounded-full bg-lime">
        <Icon className="size-7 text-ink" strokeWidth={2} aria-hidden />
      </span>
      <span className="text-lg text-ink">{category.label}</span>
    </a>
  )
}
