import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/loadingScreen";
import './index.css';
import { Navbar } from "./components/navbar";

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}{""}
        <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
          
          <Navbar/>

        </div>
    </>
  );
}

export default App;
