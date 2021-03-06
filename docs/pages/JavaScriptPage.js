import React from 'react';
import { Container, Row, Col, Jumbotron, Fa, Badge } from 'mdbreact';
const NavLink = require('react-router-dom').NavLink;

class JavaScriptPage extends React.Component {
  render(){
    return(
      <Container>
        <Row>
          <Col md="8" className="mt-3 mx-auto">
            <Jumbotron>
              <h1><Fa icon="code" className="grey-text" /> JavaScript</h1>
              <ul className="list-unstyled example-components-list">
                <li>
                  <NavLink to="/javascript/pro/datepicker">Date picker <Badge pill color="red">NEW</Badge><Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/javascript/pro/timepicker">Time picker <Badge pill color="red">NEW</Badge><Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/javascript/pro/select">Material Select <Badge pill color="red">NEW</Badge><Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/javascript/modal">Modal <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/javascript/collapse">Collapse <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/javascript/pro/collapse">Collapse PRO <Badge pill color="red">NEW</Badge><Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/javascript/scrollspy">ScrollSpy <Badge pill color="red">NEW</Badge><Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/javascript/sidenav">SideNav <Badge pill color="red">NEW</Badge> <Fa icon="angle-right" /></NavLink>
                </li>
              </ul>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default JavaScriptPage;
