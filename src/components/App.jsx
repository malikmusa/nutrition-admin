import React from "react";
import "../landing.css";
import "react-bootstrap";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from "./landingPage/login";
import Welcome from "./landingPage/welcome";
import { isLoggedIn } from "../services/AdminServices";
import MainLayout from "./internalpages/mainLayout";
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn() ? <Component {...props} /> : <Redirect to='/login' />
    }
  />
);
class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route path='/' exact component={Welcome} />
          <Route path='/login' exact component={Login} />
          <Route path='/welcome' component={Welcome} />
          <PrivateRoute path='/dashboard' component={MainLayout} />
        </Router>
      </div>
    );
  }
}

export default App;
