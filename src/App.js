/* eslint-disable no-unused-vars */
import About from "./components/About";
import NavBar from "./components/NavBar";
import Resume from "./components/Resume";
import SideBar from "./components/SideBar";
import './scripts/index';

function App() {
  return (
    <main>
      <SideBar/>
      <div className="main-content">
        <NavBar />
        <About />
        <Resume />
      </div>
    </main>
  );
}

export default App;
