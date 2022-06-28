import { Container, Nav } from "react-bootstrap";
import styled from "styled-components";

const HeaderStyle = styled.header`
  position: fixed;
  width: 100%;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <Container>
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Profile</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </HeaderStyle>
  );
};

export default Header;
