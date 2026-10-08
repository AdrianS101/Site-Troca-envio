import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LegalPage from "./pages/LegalPage";
import { privacyPolicy, termsOfUse, LEGAL_UPDATED_AT } from "./pages/legalContent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/politica-de-privacidade" element={<LegalPage {...privacyPolicy} updatedAt={LEGAL_UPDATED_AT} />} />
          <Route path="/termos-de-uso" element={<LegalPage {...termsOfUse} updatedAt={LEGAL_UPDATED_AT} />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
