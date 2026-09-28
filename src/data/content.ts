import type { LucideIcon } from 'lucide-react'
import { Building2, Camera, Code2, Laptop, Megaphone, PenTool } from 'lucide-react'

export type NavLink = { label: string; to: string }

export const navLinks: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'Courses', to: '/#courses' },
  { label: 'Creators', to: '/#creators' },
]

export const partners = [1, 2, 3, 4, 5].map((n) => `/images/partner-${n}.png`)

export const courseTopics = [
  'Featured',
  'Music',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'UI/UX Design',
  'Creative Marketing',
  'Digital Illustration',
  'Film & Video',
  'Crafts',
  'Freelance & Entrepreneurship',
  'Graphic Design',
  'Photography',
  'Productivity',
  'Web Development',
  'Data Science',
  'Cooking',
]

export type Course = {
  id: number
  title: string
  image: string
  creator: string
  rating: number
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  lessons: number
  duration: string
  comments: number
  students: number
  price: number
}

const courseBase = {
  creator: 'purepearl studio',
  rating: 4.5,
  level: 'Beginner',
  lessons: 17,
  duration: '2 hours 16 mins',
  comments: 59,
  students: 26,
  price: 25,
} as const

export const courses: Course[] = [
  'Learn Figma from Basic',
  'Build Digital Asset',
  'the Power of Big Data',
  'Balancing Productivity and Wellbeing',
  'Mastering Money Management',
  'From Idea to Startup Success',
].map((title, i) => ({ ...courseBase, id: i + 1, title, image: `/images/course-${i + 1}.jpg` }))

export type Category = { label: string; icon: LucideIcon }

export const categories: Category[] = [
  { label: 'Design', icon: PenTool },
  { label: 'Development', icon: Code2 },
  { label: 'IT & Software', icon: Laptop },
  { label: 'Business', icon: Building2 },
  { label: 'Marketing', icon: Megaphone },
  { label: 'Photography', icon: Camera },
]

export const stats = [
  { value: '12K', label: 'Students' },
  { value: '70+', label: 'Courses' },
  { value: '16', label: 'Creators' },
]

export const creatorBenefits = [
  'Share Your Expertise',
  'Monetize Your Passion',
  'Flexibility and Autonomy',
  'Build a Community',
]

export type Testimonial = { name: string; role: string; quote: string; avatar: string }

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    avatar: '/images/testimonial-1.png',
    quote:
      'ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.',
  },
  {
    name: 'James L.',
    role: 'Lifelong Learner',
    avatar: '/images/testimonial-2.png',
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: 'Alex B.',
    role: 'Inspired Creator',
    avatar: '/images/testimonial-3.png',
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
]

export const footerColumns: string[][] = [
  ['Featured Courses', 'Featured Categories', 'Business', 'IT', 'Design'],
  ['Development', 'Marketing', 'Photography', 'Finance', 'Sport'],
  ['Become a Creator', 'Affiliate Program', 'Contact', 'Help', 'About'],
]

export const legalLinks = ['Privacy Policy', 'Terms of Service', 'Cookies Settings']
