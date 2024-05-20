import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Login" element={<Login />} /> */}
        {/* <Route path="/UserHome" element={<UserHome />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;