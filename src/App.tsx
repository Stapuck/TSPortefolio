import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Sportif from "./pages/Sport";
import Pro from "./pages/Pro";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import "./i18n";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";

export default function App() {

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-sky-950">
      <div className="fixed top-0 left-0 h-full z-50">
        <Sidebar />
      </div>

      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<Blog />} />
          <Route path="/sport" element={<Sportif />} />
          <Route path="/pro" element={<Pro />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
