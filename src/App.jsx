import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import HomePage from './pages/HomePage/HomePage';









function App() {

  return (
	 <div className="container w-full mx-auto">

<div className="App">
      <Header/>



      <main className="flex mx-auto"> 
		<Sidebar/>
		<HomePage/>


        
      </main>
    </div>

	 </div>
  );
}

export default App;