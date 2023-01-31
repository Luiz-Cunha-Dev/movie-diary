import Header from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import InsertNewMoviePage from "./pages/insertNewMoviePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/criar-filme" element={<InsertNewMoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
