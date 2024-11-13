import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./components/Login";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<ProtectedRoute element={About} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
