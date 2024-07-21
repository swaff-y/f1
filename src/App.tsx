import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { AppRouter } from './router/router';
import { AppProvider } from './providers/AppProvider';
import { FC } from 'react';

export const App: FC = () => {
  return (
    <AppProvider>
      <Container fluid className="app-background">
        <AppRouter />
      </Container>
    </AppProvider>
  );
}
