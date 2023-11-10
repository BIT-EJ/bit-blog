import './App.css'
import Blogs from './components/blogs/Blogs'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Intro from './components/intro/Intro'

export default function App() {

  return (
    <div>
      <Header />
      <Intro />
      <Blogs />
      <Footer />
    </div>
  )
}

