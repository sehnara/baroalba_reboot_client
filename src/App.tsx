import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InitPage from "./pages/init/Init/view";
import LoginPage from "./pages/init/Login/view";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<InitPage />} />
        <Route path="/login" element={<LoginPage />} />
        
        
      </Routes>
    </Router>
  );
}

export default App;

// 해야하는 거 
// 1. MVP설정(친구가 사장, 내가 알바생, 친구 심부름 들어주는 거)
// 2. REACT MVC 패턴 적용
// 3. 테스트 적용