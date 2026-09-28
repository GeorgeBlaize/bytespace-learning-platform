import { Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/layout/ScrollToTop'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
