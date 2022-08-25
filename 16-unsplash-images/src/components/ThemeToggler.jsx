import { useGlobalContext } from "../context/globalContext";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
const ThemeToggler = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsFillMoonFill className="toggle-icon" />
        ) : (
          <BsFillSunFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
};
export default ThemeToggler;
