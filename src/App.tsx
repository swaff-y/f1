import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { AppRouter } from './router/router';
import { AppProvider } from './providers/AppProvider';

function App() {
  return (
    <AppProvider>
      <Container fluid className="app-background">
        <AppRouter />
      </Container>
    </AppProvider>
  );
}

export default App;
