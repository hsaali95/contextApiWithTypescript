import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home-page";
import AboutPage from "./pages/about-page";
import Todo from "./pages/todo";
import GlobalContext from "./store/context";

function App() {
  return (
    <>
      <GlobalContext>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
        </Routes>
      </GlobalContext>
    </>
  );
}

export default App;
