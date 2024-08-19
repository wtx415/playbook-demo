import './output.css';

import { PlayBookPage } from './pages/PlayBookPage';
import {
  PlayBookEditorPage
} from './pages/PlayBookEditorPage';

function App() {
  return (
    <div className="w-9/12 mx-auto">
      {/* <PlayBookPage /> */}
      <PlayBookEditorPage />
    </div>
  );
}

export default App;
