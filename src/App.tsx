import { Routes, Route, BrowserRouter } from "react-router-dom"
import Main from "./pages/main"
import { Login } from "./pages/Login"
import { RequireAuth } from "./contexts/Auth/RequireAuth"
import { Register } from "./pages/Register";


function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/finanf">
        <Routes>
          <Route path="/finanf" element={<Login />} />
          <Route path="/finanf/register" element={<Register />} />
          <Route path="/finanf/main" element={<RequireAuth>
            <>
              <Main />
            </>
        </RequireAuth>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App