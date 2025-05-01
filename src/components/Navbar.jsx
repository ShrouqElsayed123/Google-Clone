import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Search from "./Search";

// eslint-disable-next-line react/prop-types
export default function Navbar({ setDarkTheme, darkTheme }) {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-800">
      <Link to="/">
        <p className="text-xl font-bold">Google 🔎</p>
      </Link>
     <Search />
      <button
        type="button"
        onClick={() => setDarkTheme(!darkTheme)}
        className="flex items-center gap-2  bg-gray-200 dark:bg-gray-700 rounded-full"
      >
        {darkTheme ?
          (
            <div className="space-x-2  px-4 py-2 bg-yellow-200 w-full rounded-full text-white">
              <FontAwesomeIcon icon={faSun} />
              <span>Light</span>
            </div>
          ) :
          (
            <div className="space-x-2  px-4 py-2 bg-gray-700 w-full rounded-full text-gray-200">
              <FontAwesomeIcon icon={faMoon} />
              <span>Dark</span>
            </div>
          )}
      </button>
    </div>

  );
}
