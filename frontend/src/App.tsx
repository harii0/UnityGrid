import Login from "@/auth/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./auth/Register";
function App() {
  return (
    <div className="flex w-full h-screen justify-center items-center bg-[#F5F4F7]">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
