import "./App.css";
import AllBlogs from "./pages/AllBlogs";
import { Routes, Route } from "react-router-dom";
import BlogDetails from "./pages/BlogDetails";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/all" element={<AllBlogs />} />
                <Route path="/blog-detail" element={<BlogDetails />} />
            </Routes>
        </>
    );
}

export default App;
