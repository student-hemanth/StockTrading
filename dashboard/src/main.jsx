import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import './index.css'
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import { AuthProvider } from "./components/AuthContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/*" element={<Home/>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
