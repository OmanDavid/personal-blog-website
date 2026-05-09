import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import ArticleList from "./components/ArticleList.jsx";
import logo from "./assets/logo.png"

function App() {
  return (
    <div className="App">
      <Header name="My Blog"/>
      <About image={logo} about="the blog text"/>
      <ArticleList />
    </div>
  );
}

export default App;