import './App.css';
import Header from "./components/Header"
import Cards from "./components/Cards"
import requests from './components/requests';

function App() {

  

  return (
    <div className="App">
      <Header />
    
      <Cards title="Popular Movies" fetchUrl={requests.fetchPopularMovies} />   
    
    </div>
  );
}

export default App; 
