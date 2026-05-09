import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import ArticleList from "./components/ArticleList.jsx";
import logo from "./assets/logo.png"

const articles = [
    { id: 1, title: "My First Article", date: "2024-06-01", preview: "First article" },
    { id: 2, title: "My Second Article", date: "2024-06-02", preview: "Second article" }
];

function App() {
  return (
    <div className="App">
      <Header name="My Blog"/>
      <About image={logo} about="the blog text"/>
      <ArticleList posts={articles} />
    </div>
  );
}

export default App;