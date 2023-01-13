import logo from "../assets/images/logo.png";
import "../components/movie.css";
import data from "../data/data.js";
import CategoriesDropdown from "./categoriesDropdown";
const Header = () => {
  const categories = data?.map((item) => item.category);

  return (
    <nav className="navbar  navbar-expand-lg sticky-top bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img src={logo} style={{ width: 150, height: 100 }}></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                All categories
              </a>
            </li>
            <li className="nav-item">
              <CategoriesDropdown categories={categories} />
            </li>
          </ul>
        </div>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />

          <button className="btn  button" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
