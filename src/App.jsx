import Header from "./components/Header/header";
import NewsLetter from "./components/Footer/NewsLetter";
import Footer from "./components/Footer/Footer";
import Navigationbar from "./components/Navbar/Navbar";
import HomePage from "./pages/Home/Home";
import AboutPage from "./pages/About/About";
import ContactPage from "./pages/Contact/Contact";
import NewsPage from "./pages/News/News";
import WeWorkWithPage from "./pages/WeWorkWith/WeWorkWith";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigationbar />
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/weworkwith/bussiness-owner" element={<WeWorkWithPage/>} />
        <Route path="/weworkwith/investors" element={<WeWorkWithPage investors={true}/>} />
      </Routes>
      <NewsLetter />
      <Footer />
    </Router>
  );
}

export default App;
