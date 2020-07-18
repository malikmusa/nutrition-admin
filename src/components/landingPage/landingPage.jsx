import React from "react";
import Login from "./login";
class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <div className="bgImage">
          <Login />
        </div>{" "}
      </div>
    );
  }
}
export default LandingPage;
