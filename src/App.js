import './output.css';
import {
  PlayBookPageContainer,
  PlayBookEditorPageContainer,
} from './pages';
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="w-10/12 mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/playbook" />} />
          <Route path="playbook" element={<PlayBookPageContainer />} />
          <Route path="playbook/:playbookId" element={<PlayBookEditorPageContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
