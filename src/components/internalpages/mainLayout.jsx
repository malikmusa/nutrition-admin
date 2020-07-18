import React, { Component } from "react";
import Dashboard from "./dashbord";
import { Container, Row, Button } from "react-bootstrap";
import { Link, Route } from "react-router-dom";
import { adminLogout, isLoggedIn } from "../../services/AdminServices";
import AddNutrition from "./nutritionManagement/addNutrition";
export class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      privileges: [],
    };
  }

  componentDidMount() {
    if (!isLoggedIn()) {
      this.props.history.push("/login");
    }
  }

  handleLogout = () => {
    adminLogout();
    this.props.history.push("/login");
  };

  handleOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const path = this.props.location.pathname;
    return (
      <Container fluid style={{ margin: 0, padding: 0 }}>
        <Row>
          <aside
            className={
              this.state.open
                ? "main-sidebar px-0 open col-12 col-md-3 col-lg-2"
                : "main-sidebar px-0 col-12 col-md-3 col-lg-2"
            }>
            <div className='main-navbar'>
              <nav className='align-items-stretch bg-white flex-md-nowrap border-bottom p-0 navbar navbar-light'>
                <Link
                  href='#'
                  className='w-100 mr-0 navbar-brand'
                  style={{ lineHeight: "25px" }}>
                  <div className='d-table m-auto'>
                    <span className='d-md-inline ml-1'>FOS Admin Panel</span>
                  </div>
                </Link>
                <Link
                  href='#'
                  className='toggle-sidebar d-sm-inline d-md-none d-lg-none'
                  onClick={this.handleClose}>
                  <i className='fas fa-times' />
                </Link>
              </nav>
            </div>
            <div className='nav-wrapper'>
              <ul className='nav--no-borders flex-column nav'>
                <li className='nav-item'>
                  <Link
                    className={
                      path === "/dashboard" ? "nav-link active" : "nav-link"
                    }
                    aria-current='page'
                    to='/dashboard'>
                    <div className='d-inline-block item-icon-wrapper'>
                      <i className='fas fa-home' />
                    </div>
                    <span>Dashboard</span>
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link
                    className={
                      path === "/dashboard/nutrition-management" ||
                      path === "/dashboard/nutrition-management/addNutrition/"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    aria-current='page'
                    to='/dashboard/nutrition-management'>
                    <div className='d-inline-block item-icon-wrapper'>
                      <i className='fas fa-address-card' />
                    </div>
                    <span>Nutrition Management</span>
                  </Link>
                </li>
                {/* <li className='nav-item'>
                  <Link
                    className={
                      path === "/dashboard/restaurant-management" ||
                      path === "/dashboard/restaurant-management/edit" ||
                      path ===
                        "/dashboard/restaurant-management/:id/editRestaurant"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    aria-current='page'
                    to='/dashboard/restaurant-management'>
                    <div className='d-inline-block item-icon-wrapper'>
                      <i className='fas fa-utensils' />
                    </div>
                    <span>Restaurant Management</span>
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link
                    className={
                      path === "/dashboard/order-and-delivery"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    aria-current='page'
                    to='/dashboard/order-and-delivery'>
                    <div className='d-inline-block item-icon-wrapper'>
                      <i className='fas fa-motorcycle' />
                    </div>
                    <span>Order / Delivery Management</span>
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link
                    className={
                      path === "/dashboard/driver-management"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    aria-current='page'
                    to='/dashboard/driver-management'>
                    <div className='d-inline-block item-icon-wrapper'>
                      <i className='fas fa-car-side' />
                    </div>
                    <span>Driver Management</span>
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link
                    className={
                      path === "/dashboard/finance"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    aria-current='page'
                    to='/dashboard/finance'>
                    <div className='d-inline-block item-icon-wrapper'>
                      <i className='fas fa-hand-holding-usd' />
                    </div>
                    <span>Finance Management</span>
                  </Link>
                </li>
            
             */}
              </ul>
            </div>
          </aside>
          <main className='main-content p-0 col-sm-12 col-md-9 offset-md-3 col-lg-10 offset-lg-2'>
            <div className='main-navbar bg-white sticky-top'>
              <div className='p-0 container-fluid d-flex'>
                <nav className='flex-md-nowrap ml-auto p-0 navbar navbar-light'>
                  <nav className='nav'>
                    <div className='logout-btn'>
                      <Button varient='dark' onClick={this.handleLogout}>
                        Logout
                      </Button>
                    </div>
                    <Link
                      href='#'
                      onClick={this.handleOpen}
                      className='nav-link nav-link-icon toggle-sidebar d-sm-inline d-md-inline d-lg-none text-center'>
                      <i className='fas fa-bars' />
                    </Link>
                  </nav>
                </nav>
              </div>
            </div>
            <div className='main-content-container px-4 container-fluid'>
              <Route
                path={`${this.props.match.path}/nutrition-management`}
                component={AddNutrition}
              />
              {/* <Route
                path={`${this.props.match.path}/order-and-delivery`}
                component={Dashboard}
              />
              <Route
                path={`${this.props.match.path}/driver-management`}
                component={Dashboard}
              />
              <Route path={`/dashboard/finance`} component={Dashboard} />
              <Route
                path={`${this.props.match.path}/admin-management`}
                component={Dashboard}
              />
              <Route exact path={this.props.match.path} component={Dashboard} /> */}
            </div>
          </main>
        </Row>
      </Container>
    );
  }
}

export default Layout;
