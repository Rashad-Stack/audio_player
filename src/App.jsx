import LaunchScreen from "./pages/LaunchScreen";
import Main from "./pages/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SettingScreen from "./pages/SettingScreen";
import { useEffect, useState } from "react";
import LoginScreen from "./pages/Login";

function App() {
  const [isLaunched, setIsLaunched] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLaunched(false);
    }, 1000);
  }, []);

  return isLaunched ? (
    <LaunchScreen />
  ) : (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/settings" element={<SettingScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
