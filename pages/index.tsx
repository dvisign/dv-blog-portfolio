import type { NextPage } from "next";
import styled from "styled-components";

const TestStyle = styled.div`
  color: red;
`;

const Index: NextPage = () => {
  return <TestStyle>hello next</TestStyle>;
};
export default Index;
