import React, { useContext } from "react";

// =======================================================
// useContext
// =======================================================
const themes = {
  light: {
    foreground: "#000",
    background: "#eee"
  },
  dark: {
    foreground: "#fff",
    background: "#222"
  }
};

const ThemeContext = React.createContext(themes.light); // parameter disini cuma buat default valuenya

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style = {{
      background:theme.background,
      color: theme.foreground
    }}>
      I am styled by theme context!
    </button>
  )
}

function Theme() {
	return (
		<div>
			<ThemeContext.Provider value={themes.dark}>
        <Toolbar />
      </ThemeContext.Provider>

      <ThemeContext.Provider value={themes.light}>
        <Toolbar />
      </ThemeContext.Provider>
		</div>
	)
}

export default Theme;