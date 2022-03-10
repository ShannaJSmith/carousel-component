import './App.css';
import Carousel from 'react-elastic-carousel';
import Item from './components/Item';

function App() {
  return (
    <>
      <div className="App">
        <h1>Carousel</h1>
        <Carousel>
          <Item></Item>
        </Carousel>
      </div>
    </>
  );
}

export default App;
