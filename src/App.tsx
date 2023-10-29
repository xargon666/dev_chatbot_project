import "./App.css";
import { Routes, Route } from "react-router-dom";
import { default as Home } from "./pages/HomePage";
import { default as LandingPage } from "./pages/LandingPage";
function App() {
    return (
        <>
            <LandingPage />
            <Routes>
                <Route path="/Home" element={<Home />} />
            </Routes>
        </>
    );
}

export default App;
