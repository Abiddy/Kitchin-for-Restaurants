import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Reset from "./components/Reset";
import Dashboard from "./components/Dashboard";
import { Applications } from "./components/JobApplication/JobApplication";
import Learning from "./components/Learning/Learning";
import Landing from "./components/LandingPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/applications" element={<Applications />} />
          <Route exact path="/learning" element={<Learning />} />
          <Route exact path="/landing" element={<Landing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
