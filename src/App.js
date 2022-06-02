
import './App.css';
import ProductList from './components/ProductsList';
import HomeStore from './containers/HomeStore';

function App() {
  return (
    <div className="App">
      <h1>
        hola
      </h1>
      <HomeStore>
        <ProductList></ProductList>
      </HomeStore>
    </div>
  );
}

export default App;
