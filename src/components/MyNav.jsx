import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Navbar } from "react-bootstrap";

const MyNav = () => {
  return (
    <Container>
      <Row>
        <Col xs={2}>
          <Navbar
            expand="md"
            className=" navbar-white bg-navbar fixed-left justify-content-between"
            id="sidebar"
          >
            <div className="nav-container">
              <a className="navbar-brand" href="index.html">
                <img
                  src="/Spotify_Logo.png"
                  alt="Spotify_Logo"
                  width="131"
                  height="40"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <ul>
                    <li>
                      <a className="nav-item nav-link" href="index.html">
                        <i className="fas fa-home fa-lg"></i>&nbsp; Home
                      </a>
                    </li>
                    <li>
                      <a className="nav-item nav-link" href="#">
                        <i className="fas fa-book-open fa-lg"></i>&nbsp; Your
                        Library
                      </a>
                    </li>
                    <li>
                      <div className="input-group mt-3">
                        {/* rierca */}
                        <input
                          type="text"
                          className="form-control mb-2"
                          id="searchField"
                          placeholder="Search"
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                        />
                        <div
                          className="input-group-append mb-1"
                          // style="margin-bottom: 4%"
                        >
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            type="button"
                            id="button-addon1"
                            onClick="search()"
                          >
                            GO
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="nav-btn ms-4">
              <Row>
                <button className="btn signup-btn" type="button">
                  Sign Up
                </button>
                <button className="btn login-btn" type="button">
                  Login
                </button>
              </Row>
              <Row>
                <Col>
                  {" "}
                  <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
                </Col>
              </Row>
            </div>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};
export default MyNav;
