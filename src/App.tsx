import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Home } from './pages/Home/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { OpenF1API } from './api/openF1API';
import { OpenF1Provider } from './context/openF1';

const queryClient = new QueryClient();
const openF1 = new OpenF1API();

function App() {
  return (
    <OpenF1Provider value={openF1}>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route 
            path="/"
            element={<Home />}
          >
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
    </OpenF1Provider>
  );
}

export default App;
