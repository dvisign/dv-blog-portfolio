import Head from "next/head";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import styled from "styled-components";

const HeaderStyle = styled.header`
  width: 100%;
  background-color: #3c3c3c;
  #logos {
    #logo-text {
      font-family: "Pacifico";
      font-size: 1rem;
    }
  }
  #header-navs {
    * {
      font-size: 0.8rem;
    }
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Pacifico"
        />
      </Head>
      <Navbar variant="dark" expand="lg">
        <Container>
          <Navbar.Brand id="logos" href="#home">
            <img
              alt="퍼블리셔 dvisign의 포트폴리오 입니다."
              src="/img/common/nav_logo.png"
              className="d-inline-block align-center"
            />{" "}
            <span id="logo-text">dvisign</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="header-navs" />
          <Navbar.Collapse id="header-navs" className="justify-content-end">
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Aptitute</Nav.Link>
              <Nav.Link href="#link">Work</Nav.Link>
              <NavDropdown title="Board" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">
                  Reference
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Log</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderStyle>
  );
};

export default Header;
