import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Form from "./components/Form";
import { Toaster } from "react-hot-toast";
import Contact from "./pages/Contact";
import Post from "./pages/Post";
import SinglePost from "./pages/SinglePost";
import Movies from "./pages/Movies";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/post" element={<Post />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/signin" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
