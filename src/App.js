import Header from "./components/header/Header";
import "./App.scss";
import Main from "./components/main/Main";
import Cards from "./components/main/Cards";
// import data from "./helpers/data";



function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Cards/>
    </div>
  );
}

export default App;
