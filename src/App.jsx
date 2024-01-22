
import { HeroSection } from "./components/HeroSection"
import { Navbar } from "./components/Navbar"
import { SideNav } from "./components/SideNav"

function App() {

  return (
    <div className="w-screen " >
      <div className="flex flex-col h-full">
        <Navbar />
        <div className="flex flex-1 ">
          <SideNav />
          <HeroSection />
        </div>
      </div>


    </div>
  )
}

export default App
