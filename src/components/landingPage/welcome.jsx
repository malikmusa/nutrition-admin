import React from "react";
import { isLoggedIn } from "../../services/AdminServices";
class Welcome extends React.Component {
  componentDidMount() {
    console.log(isLoggedIn());
    if (isLoggedIn()) {
      console.log("logged in successfull");
      this.props.history.push("/dashboard");
    } else {
      this.props.history.push("/login");
      console.log("logged in fail");
    }
  }
  render() {
    return <div> Loading... </div>;
  }
}
export default Welcome;
