import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import ArticleCreate from "./pages/ArticleCreate";
import NotFound from "./pages/NotFound";
import ArticlePage from "./pages/ArticlePage";
import ArticleEdit from "./pages/ArticleEdit";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <Header />
      <main className="mt-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articleCreate" element={<ArticleCreate />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/articles/:id" element={<ArticlePage />} />
          <Route path="/article/edit/:id" element={<ArticleEdit />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
