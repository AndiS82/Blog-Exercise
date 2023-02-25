import { BrowserRouter, Route, Routes } from "react-router-dom";
import Article from "./components/article/Article";
import AdminPage from "./pages/AdminPage";
import LandingPage from "./pages/LandingPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/details/:id" element={<Article />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
