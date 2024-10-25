import { useState } from "react"
import { MovieContext } from "./context"
import MovieList from "./pages/cinema/MovieList"
import Header from "./pages/header/Header"
import SideBar from "./pages/sideBar/Sidebar"


function App() {
  const [cartData , setCartData]  = useState([])
  
  return (
    <MovieContext.Provider  value={{cartData, setCartData}}>
     <Header/>
     <main>
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <SideBar/>
       <MovieList/>
      </div>
     </main>
    </MovieContext.Provider>
  )
}

export default App
