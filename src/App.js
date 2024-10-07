import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { CampaignProvider } from "./components/campaign-context";

function App() {
  return (
    <CampaignProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </CampaignProvider>
  );
}

export default App;
