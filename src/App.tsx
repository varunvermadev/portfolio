import { Route, Routes } from "react-router"
import Homepage from "./pages/Homepage"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Blogs from "./pages/Blogs"
import Contact from "./pages/Contact"
import AppLayout from "./components/AppLayout"


const App = () => {

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App