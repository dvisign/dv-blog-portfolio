import React from "react";
import Header from "@components/common/Header";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <footer>푸터영역</footer>
    </>
  );
};

export default AppLayout;
