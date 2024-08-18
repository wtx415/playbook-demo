import logo from './logo.svg';
import './App.css';
import './output.css';
import { PlaybookCard } from './components/playbook/PlaybookCard';
import { PlayBookPage } from './pages/PlayBookPage';
import {
  PlayBookEditor
} from './pages/PlayBookEditor';

function App() {
  return (
    <div className="App">
      {/* <PlayBookPage /> */}
      <PlayBookEditor />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
