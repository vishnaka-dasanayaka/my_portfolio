import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import Home from "./pages/Home";
import Header from "./components/Header";
import Blog from "./pages/Blog";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blog />} />
        </Routes>
      </BrowserRouter>
      <Toaster richColors />
    </div>
  );
}

export default App;
