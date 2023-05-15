import useTheme from "../../hooks/useTheme"; // importing the custom hook that provides the current theme and theme toggle function
import './styles.scss'; // importing the component's styles

// Defining the component function
export function ToggleButton() {
  const { theme, themeToggle } = useTheme(); // calling the useTheme hook to get the current theme and theme toggle function

  // Returning the JSX for the toggle button
  return (
    <div className="toggle-content">
      { // Using a ternary operator to render different JSX based on the current theme
        theme === "dark-mode" ? // if the current theme is "dark-mode"
          <input type="checkbox" id="toggle" className="toggle-checkbox" onClick={themeToggle} defaultChecked /> // render an input element with the "checked" attribute set to true
          :
          <input type="checkbox" id="toggle" className="toggle-checkbox" onClick={themeToggle} /> // otherwise, render an input element with the "checked" attribute set to false
      }
      <label htmlFor="toggle" className="toggle-label"> {/* Label for the input element */}
        <span className="toggle-label-background"></span> {/* A span element for the background of the toggle button */}
      </label>
    </div>
  );
}
