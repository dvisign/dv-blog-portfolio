import type { NextPage } from "next";
import AppLayout from "@components/AppLayout";
import { Container, Row, Col } from "react-bootstrap";
// import axios from "axios";
import { getCommonData } from "@slice/commonSlice";
import wrapper from "@store/storeConfig";

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
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    // const cookie = context.req ? context.req.headers.cookie : "";
    // axios.defaults.headers.common.Cookies = "";
    await store.dispatch(getCommonData());
    // console.log(store.getState().common);
    return {
      props: {},
    };
  },
);

export default Index;
