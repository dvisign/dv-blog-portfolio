import type { NextPage } from "next";
import styled from "styled-components";
import AppLayout from "@components/AppLayout";
import { Container, Row, Col } from "react-bootstrap";
// import axios from "axios";
import { getCommonData } from "@slice/commonSlice";
import wrapper from "@store/storeConfig";

const MainStyles = styled.div`
  width: 100%;
  background-color: ${({ theme }) => {
    return theme.season.spring.background;
  }};
  > #main_intro {
    height: 100vh;
  }
`;

const Index: NextPage = () => {
  return (
    <AppLayout>
      <MainStyles>
        <section id="main_intro">
          <Container>
            <Row>
              <Col>1</Col>
            </Row>
          </Container>
        </section>
      </MainStyles>
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
