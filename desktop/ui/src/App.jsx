import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Dashboard from "./pages/Dashboard"
import CourseFactory from "./pages/CourseFactory"
import Tutor from "./pages/Tutor"
import VideoStudio from "./pages/VideoStudio"

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex bg-gray-950 text-white h-screen">
        <Sidebar />
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/courses" element={<CourseFactory />} />
            <Route path="/tutor" element={<Tutor />} />
            <Route path="/video" element={<VideoStudio />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
