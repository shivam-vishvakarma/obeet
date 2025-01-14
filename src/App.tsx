import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./pages/home";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/about";
import AllLoginPage from "./pages/allLogins";
import LoginPage from "./pages/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login/">
            <Route index element={<AllLoginPage />} />
            <Route path=":slug" element={<LoginPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
