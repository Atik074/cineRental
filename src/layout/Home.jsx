import { useContext } from "react";
import MovieList from "../pages/cinema/MovieList";
import Header from "../pages/header/Header";
import SideBar from "../pages/sideBar/Sidebar";
import { ThemeContext } from "../context";

export default function Home() {
    const {darkMode} = useContext(ThemeContext)
     
  return (
    <div className={darkMode ? "dark":""}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />
          <MovieList />
        </div>
      </main>
    </div>
  );
}
