import "./App.css";
import Users from "./pages/Users";
import Comments from "./pages/Comments";
import Posts from "./pages/Posts";
import SelectedPost from "./pages/SelectedPost";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./style/globalStyles";
import { darkTheme } from "./style/darkTheme";
import { lightTheme } from "./style/lightTheme";
import { useDarkMode } from "./components/DarkMode/useDarkMode";

function App() {
  const [theme, themeToggler] = useDarkMode();
  let themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Layout themeToggler={themeToggler} theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id/comments" element={<SelectedPost />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
