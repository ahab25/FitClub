import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home";
import LoginPage from "./pages/auth/login";
import SignupPage from "./pages/auth/signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/signup" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
