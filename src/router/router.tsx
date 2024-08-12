import { FC } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Home } from '../pages/Home/Home';
import { Meetings } from "../components/Meetings/Meetings";
import { Sessions } from "../components/Sessions/Sessions";
import { Drivers } from "../components/Drivers/Drivers";

export const AppRouter: FC = () => {
  return (
    <Router>
      <Routes>
        <Route 
          path="/"
          element={
            <Home>
              <Meetings />
            </Home>
          }
        />
        <Route 
          path="/home/meetings"
          element={
            <Home>
              <Meetings />
            </Home>
          }
        />
        <Route 
          path="/home/sessions"
          element={
            <Home>
              <Sessions />
            </Home>
          }
        />
        <Route 
          path="/home/drivers"
          element={
            <Home>
              <Drivers />
            </Home>
          }
        />
      </Routes>
    </Router>
  );
};