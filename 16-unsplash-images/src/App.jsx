import Gallery from "./components/Gallery.jsx";
import SearchBar from "./components/SearchBar.jsx";
import ThemeToggler from "./components/ThemeToggler.jsx";

const App = () => {
  return (
    <main>
      <ThemeToggler />
      <SearchBar />
      <Gallery />
    </main>
  );
};

export default App;
