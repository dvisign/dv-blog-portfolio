import Head from "next/head";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "@slice/reducers";
import { CommonType, NavList } from "@interface/common";

const HeaderStyle = styled.header<{ season?: string }>`
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
  const { navList, season } = useSelector<RootState, CommonType>(
    (state) => state.common,
  );
  return (
    <HeaderStyle season={season}>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Pacifico"
        />
      </Head>
      <Navbar variant="dark" expand="lg">
        <Container>
          <Navbar.Brand id="logos" href="/">
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
              {navList.map((v: NavList) => {
                if (!v.dropDownList) {
                  return (
                    <Nav.Link key={v.name} href={v.url}>
                      {v.name}
                    </Nav.Link>
                  );
                }
                const lists = v.dropDownList;
                return (
                  <NavDropdown
                    key={v.name}
                    title={v.name}
                    id="basic-nav-dropdown"
                  >
                    {lists.map((value) => (
                      <NavDropdown.Item href={value.url} key={value.name}>
                        {value.name}
                      </NavDropdown.Item>
                    ))}
                    <NavDropdown.Divider />
                  </NavDropdown>
                );
              })}
              {/* <Nav.Link>Login</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderStyle>
  );
};

export default Header;
