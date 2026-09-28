import { BarChart3 } from 'lucide-react'
import type { Course } from '../../data/content'
import AvatarStack from '../ui/AvatarStack'
import Rating from '../ui/Rating'

function MetaPill({ children }: { children: string }) {
  return (
    <span className="rounded-full bg-black/25 px-3 py-1 text-xs text-white backdrop-blur-md">{children}</span>
  )
}

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group flex h-full flex-col rounded-[20px] border border-line bg-white p-[15px] transition-shadow hover:shadow-[0_12px_40px_-12px_rgb(0_0_0/0.15)]">
      <div className="relative aspect-[341/195] overflow-hidden rounded-[10px] bg-soft">
        <img
          src={course.image}
          alt=""
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-3 bottom-3 flex flex-wrap gap-2">
          <MetaPill>{`${course.lessons} Lessons`}</MetaPill>
          <MetaPill>{course.duration}</MetaPill>
          <MetaPill>{`${course.comments} Comments`}</MetaPill>
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-3">
        <h3 className="truncate text-xl font-medium text-ink">
          <a href="#" className="hover:text-brand">
            {course.title}
          </a>
        </h3>
        <Rating value={course.rating} className="shrink-0 text-lg text-muted" starClassName="fill-[#c9c9cc] text-[#c9c9cc]" />
      </div>
      <p className="mt-0.5 text-xs text-muted">
        by <span className="text-brand">{course.creator}</span>
      </p>

      <div className="mt-5 flex items-center gap-3">
        <span className="inline-flex h-[34px] items-center gap-2 rounded-full bg-soft px-3 text-xs text-ink">
          <BarChart3 className="size-4" aria-hidden />
          {course.level}
        </span>
        <AvatarStack src="/images/avatars-small.png" count={`${course.students}+`} />
      </div>

      <p className="mt-4 text-brand">
        <span className="text-xl font-semibold">${course.price}</span>
        <span className="text-xs text-muted">/lifetime</span>
      </p>
    </article>
  )
}
