import { Routes, Route } from "react-router-dom"
import Main from "./pages/main"
import { Login } from "./pages/Login"
import { RequireAuth } from "./contexts/Auth/RequireAuth"
import { Register } from "./pages/Register";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<RequireAuth>
          <>
            <Main />
          </>
        </RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App