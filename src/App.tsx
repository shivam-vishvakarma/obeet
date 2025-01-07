import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./pages/home";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/about";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
