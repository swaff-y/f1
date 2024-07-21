import { FC } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Home } from '../pages/Home/Home';

export const AppRouter: FC = () => {
  return (
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
  );
};