import "./header.scss";
import logo from "../../assets/images/supercell-logo-trans-light.png";
import menu from "../../assets/images/menu.svg";

const Header = () => {
  return (
    <header className="h-20 flex items-center">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between w-full">
          <div className="nav-left flex items-center">
            <a href="#" className="nav-logo">
              <img className="w-16" src={logo} alt="logo" />
            </a>
            <div className="nav-search-bar">
              <form className="max-w-xs">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    className="block p-3 ps-11 bg-gray-300 rounded-full"
                    placeholder="Search Games"
                    required
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="nav-right flex items-center">
            <ul className="flex items-center">
              <li>
                <a href="#">Game</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
            <div className="nav-action flex items-center">
              <a href="#">Menu</a>
              <a href="#">
                <img className="w-6 aspect-square" src={menu} alt="menu" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
