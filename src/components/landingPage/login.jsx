import React, { Component } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  adminLogin,
  SaveInLocalStorage,
  isLoggedIn,
} from "../../services/AdminServices";

const MySwal = withReactContent(Swal);

const Toast = MySwal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
});

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      submitting: false,
    };
  }
  componentDidMount() {
    if (isLoggedIn()) {
      this.props.history.push("/dashboard");
    }
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = () => {
    this.setState({
      submitting: true,
    });
    const { email, password } = this.state;
    const data = {
      email,
      password,
    };

    adminLogin(data)
      .then((res) => {
        console.log("res==============>>>>>>>>>>>", res);
        const data = res.data;
        SaveInLocalStorage(data);
        this.props.history.push("/dashboard");
        this.setState({
          submitting: false,
        });
      })
      .catch((err) => {
        console.log(err.response);
        console.log("error==========>>>>>>>", err);
        this.setState({
          submitting: false,
        });
        Toast.fire({
          type: "error",
          title: "error",
        });
      });
  };
  render() {
    return (
      <div className='login-container'>
        <Container>
          <Row className='justify-content-center '>
            <Col
              md='5'
              style={{
                transform: "translateY(-50%)",
                top: "50%",
                position: "absolute",
              }}>
              <Card>
                <Card.Header>
                  <h3 className='text-primary text-center'>Admin Login</h3>
                </Card.Header>
                <Card.Body>
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                      <Form.Label>
                        <b>Email::</b>
                      </Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Email'
                        name='email'
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>
                        <b>Password:</b>
                      </Form.Label>
                      <Form.Control
                        type='password'
                        placeholder='Password'
                        name='password'
                        onChange={this.handleChange}
                      />
                    </Form.Group>

                    <Form.Group>
                      <Button
                        onClick={this.handleSubmit}
                        disabled={this.state.submitting}>
                        {this.state.submitting ? "Signing in ..." : "Singin"}
                      </Button>
                    </Form.Group>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
