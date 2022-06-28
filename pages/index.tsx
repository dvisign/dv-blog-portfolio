import type { NextPage } from "next";
import AppLayout from "@components/AppLayout";
import { Container, Row, Col } from "react-bootstrap";

const Index: NextPage = () => {
  return (
    <AppLayout>
      <Container>
        <Row>
          <Col sm={12} md={12} lg={4}>
            1
          </Col>
          <Col sm={12} md={6} lg={4}>
            2
          </Col>
          <Col sm={12} md={6} lg={4}>
            3
          </Col>
        </Row>
      </Container>
    </AppLayout>
  );
};

export default Index;
