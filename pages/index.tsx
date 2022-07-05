import type { NextPage } from "next";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
// import axios from "axios";
import { lighten } from "color-blend";

import AppLayout from "@components/AppLayout";
import { getCommonData } from "@slice/commonSlice";
import { CommonType } from "@interface/common";
import { RootState } from "@slice/reducers";
import wrapper from "@store/storeConfig";
import { covertHexToRgb } from "@utils/index";

const MainStyles = styled.div<{ season?: string | null }>`
  width: 100%;
  background-color: ${({ theme, season }) => {
    const seasonType = season || "spring";
    return theme.season[seasonType].background;
  }};
  color: ${({ theme, season }) => {
    const seasonType = season || "spring";
    const colors = lighten(
      covertHexToRgb(theme.season[seasonType].background),
      covertHexToRgb("#fff", 0.6),
    );
    return `rgba(${colors.r}, ${colors.g}, ${colors.b}, ${colors.a})`;
  }};
  > #main_intro {
    height: 100vh;
  }
`;

const Index: NextPage = () => {
  const { season } = useSelector<RootState, CommonType>(
    (state) => state.common,
  );
  return (
    <AppLayout>
      <MainStyles season={season}>
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
