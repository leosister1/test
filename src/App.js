import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

// Pages
import Places from "./pages/place/Places";

// Routes
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* 모두에게 열려있는 페이지 */}
        <Route path="/place" element={<Places />} />
        <Route path="/" element={<Home />} />

        {/* 게스트에게만 열려있는 페이지 */}
        

        {/* 로그인이 필요한 페이지 */}


        {/* 관리자 권한이 필요한 페이지 */}
        

        {/* 404 페이지 */}
      </Routes>
    </BrowserRouter>
  );
}