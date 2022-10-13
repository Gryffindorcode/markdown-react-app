// my components
import { createContext, useState } from "react";
import Header from "./components/Header";
import Post from "./components/Post";



// create context

export const ThemeContext = createContext()
function App() {

  const [isDark, setIsDark] = useState(true);

  const value = {
    isDark, setIsDark
  }
  return (
    <>
      <ThemeContext.Provider value={value}>
        <Header />
        <Post />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
