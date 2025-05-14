


export const ThemeToggle=()=>{
    const [theme, setTheme] = useState("light");
    
      // Load saved theme on component mount
      useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.body.dataset.bsTheme = savedTheme;
        document.documentElement.dataset.theme = savedTheme;
      }, []);
    
      // Update theme when state changes
      useEffect(() => {
        document.body.dataset.bsTheme = theme;
        document.documentElement.dataset.theme = theme;
        localStorage.setItem("theme", theme);
      }, [theme]);
    
      const handleToggle = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
      };
    return(
        <>
        <input
                className={`form-check-input p-2 ${theme === "light" ? "light-mode" : "dark-mode"}`}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                checked={theme === "light"}
                onChange={handleToggle}
                style={{ width: "45px", height: "25px", cursor: "pointer" }}
              />
        </>
    )
}