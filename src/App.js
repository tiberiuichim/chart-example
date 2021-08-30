import logo from './logo.svg';
import './App.css';
import { MyResponsiveBar } from './Barchart';
import data from './barchart-data.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Daca vrei.
        </p>
        <div style={{height: '300px', width: '300px'}}>
          <MyResponsiveBar data={data} />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
