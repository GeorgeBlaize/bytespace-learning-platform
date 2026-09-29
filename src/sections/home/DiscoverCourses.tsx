import { Plus } from 'lucide-react'
import { useState } from 'react'
import CourseCard from '../../components/cards/CourseCard'
import Chip from '../../components/ui/Chip'
import SectionHeading from '../../components/ui/SectionHeading'
import { courses, courseTopics } from '../../data/content'

export default function DiscoverCourses() {
  const [activeTopic, setActiveTopic] = useState(courseTopics[0])

  return (
    <section id="courses" className="scroll-mt-4 pt-16 pb-16 lg:pt-[70px] lg:pb-20">
      <div className="container-page">
        <SectionHeading
          title={
            <>
              Discover Your Passion,
              <br /> Build Your Skills
            </>
          }
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />

        <div className="mx-auto mt-10 flex max-w-[1100px] flex-wrap justify-center gap-x-4 gap-y-3 lg:mt-12 lg:gap-y-[22px]">
          {courseTopics.map((topic) => (
            <Chip key={topic} active={topic === activeTopic} onClick={() => setActiveTopic(topic)}>
              {topic}
            </Chip>
          ))}
          <a href="#learning-paths" className="inline-flex h-[42px] items-center gap-1 px-1 text-base text-brand hover:underline">
            <Plus className="size-4" aria-hidden /> More
          </a>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-10">
          {courses.map((course) => (
            <li key={course.id} className="min-w-0">
              <CourseCard course={course} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
