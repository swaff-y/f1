import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Home } from './pages/Home/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { OpenF1API } from './api/openF1API';
import { OpenF1Provider } from './context/openF1';
import { Container } from 'react-bootstrap';

const queryClient = new QueryClient();
const openF1 = new OpenF1API();

function App() {
  return (
    <Container fluid className="app-background">
      <OpenF1Provider value={openF1}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Routes>
              <Route 
                path="/"
                element={<Home />}
              >
              </Route>
              <Route 
                path="/home/meetings"
                element={<Home />}
              >
              </Route>
              <Route 
                path="/home/sessions"
                element={<Home />}
              >
              </Route>
              <Route 
                path="/home/drivers"
                element={<Home />}
              >
              </Route>
            </Routes>
          </Router>
        </QueryClientProvider>
      </OpenF1Provider>
    </Container>
  );
}

export default App;
