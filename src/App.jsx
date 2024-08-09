import "./App.css";
import AllBlogs from "./pages/AllBlogs";
import { Routes, Route } from "react-router-dom";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllBlogs />} />
        <Route path="/blog-detail" element={<BlogDetails />} />
      </Routes>
    </>
  );
}

export default App;
