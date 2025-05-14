import { useEffect, useState } from "react";

export const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    const initialTheme = saved === "dark" ? "dark" : "light";
    document.body.dataset.bsTheme = initialTheme;
    document.documentElement.dataset.theme = initialTheme;
    return initialTheme;
  });

  useEffect(() => {
    document.body.dataset.bsTheme = theme;
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top text-uppercase pt-2 mx-auto" style={{ display: "flex" }}>
        <div className="container-fluid">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="form-check form-switch mx-4">
              <input
                className={`form-check-input p-2 ${theme === "light" ? "light-mode" : "dark-mode"}`}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                checked={theme === "light"}
                onChange={handleToggle}
                style={{ width: "45px", height: "25px", cursor: "pointer" }}
              />
            </div>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" style={{ cursor: "pointer" }}></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{ textAlign: "center" }}>
          <div className="navbar-nav mx-auto">
            <a className="nav-link px-lg-4 rounded" href="#">Home</a>
            <a className="nav-link px-lg-4 rounded" href="#about">About</a>
            <a className="nav-link px-lg-4 rounded" href="#services">Services</a>
            <a className="nav-link px-lg-4 rounded" href="#blog">Blog</a>
            <a className="nav-link px-lg-4 rounded" href="#contact">Contact</a>
          </div>
        </div>
      </nav>
    </>
  );
};
