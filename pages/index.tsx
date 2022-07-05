import { useRef } from "react";
import type { NextPage } from "next";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
// import axios from "axios";

import AppLayout from "@components/AppLayout";
import wrapper from "@store/storeConfig";
import { getCommonData } from "@slice/commonSlice";
import { CommonType } from "@interface/common";
import { RootState } from "@slice/reducers";

import useInteraction from "@src/hooks";

const MainStyles = styled.div<{
  season?: string | null;
}>`
  width: 100%;
  .scroll-section {
    position: relative;
    padding-top: 50vh;
    overflow-x: hidden;
  }
  #scroll-section-0 h1 {
    position: relative;
    top: -10vh;
    z-index: 5;
    font-size: 4rem;
    text-align: center;
  }
  .main-message {
    display: flex;
    align-items: center;
    justify-content: center;
    top: 35vh;
    margin: 5px 0;
    height: 3em;
    font-size: 2.5rem;
    opacity: 0;
  }
  .main-message p {
    font-weight: bold;
    text-align: center;
    line-height: 1.2;
  }
  .main-message small {
    display: block;
    margin-bottom: 0.5em;
    font-size: 1.2rem;
  }
  #scroll-section-2 .main-message {
    font-size: 3.5rem;
  }
  .description {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 1rem;
    font-size: 1.2rem;
    color: #888;
  }
  .description strong {
    float: left;
    margin-right: 0.2em;
    font-size: 3rem;
    color: rgb(29, 29, 31);
  }
  .sticky-elem.desc-message {
    width: 45%;
    font-weight: bold;
    opacity: 0;
  }
  .pin {
    width: 1px;
    height: 100px;
    background: rgb(29, 29, 31);
  }
  #scroll-section-2 .b {
    top: 10%;
    left: 40%;
  }
  #scroll-section-2 .c {
    top: 15%;
    left: 45%;
  }
  .mid-message {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 1rem;
    font-size: 2rem;
    color: #888;
  }
  .mid-message strong {
    color: rgb(29, 29, 31);
  }
  .canvas-caption {
    max-width: 1000px;
    margin: -24rem auto 0;
    padding: 0 1rem;
    font-size: 1.2rem;
    color: #888;
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 7rem;
    color: white;
    background: darkorange;
  }
  .sticky-elem {
    display: none;
    position: fixed;
    left: 0;
    width: 100%;
  }
  #show-scene-0 #scroll-section-0 .sticky-elem,
  #show-scene-1 #scroll-section-1 .sticky-elem,
  #show-scene-2 #scroll-section-2 .sticky-elem,
  #show-scene-3 #scroll-section-3 .sticky-elem {
    display: block;
    will-change: transform, opacity;
  }
  .scroll-effect-end .sticky-elem {
    /* 스크롤 효과가 모두 끝나고, 아래 일반 콘텐츠 영역에서는 sticky-elem들을 모두 안보이도록 */
    display: none !important;
  }
  .sticky-elem-canvas {
    top: 0;
    height: 100%;
  }
  .sticky-elem-canvas canvas {
    position: absolute;
    top: 50%;
    left: 50%;
  }
  #scroll-section-3 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .image-blend-canvas.sticky {
    position: fixed;
    top: 0;
    z-index: 10;
  }
`;
const Index: NextPage = () => {
  const { season } = useSelector<RootState, CommonType>(
    (state) => state.common,
  );
  return (
    <AppLayout>
      <MainStyles season={season}>
        <section className="scroll-section" id="scroll-section-0">
          <h1>AirMug Pro</h1>
          <div className="sticky-elem sticky-elem-canvas">
            <canvas id="video-canvas-0" width="1920" height="1080" />
          </div>
          <div className="sticky-elem main-message a">
            <p>
              온전히 빠져들게 하는
              <br />
              최고급 세라믹
            </p>
          </div>
          <div className="sticky-elem main-message b">
            <p>
              주변 맛을 느끼게 해주는
              <br />
              주변 맛 허용 모드
            </p>
          </div>
          <div className="sticky-elem main-message c">
            <p>
              온종일 편안한
              <br />
              맞춤형 손잡이
            </p>
          </div>
          <div className="sticky-elem main-message d">
            <p>
              새롭게 입가를
              <br />
              찾아온 매혹
            </p>
          </div>
        </section>
        <section className="scroll-section" id="scroll-section-1">
          <p className="description">
            <strong>보통 스크롤 영역</strong>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae est
            ipsa minima, eligendi error cum vel dolorum pariatur officia facilis
            ipsam voluptatibus ad quasi porro quod quisquam quidem tempora
            accusantium accusamus, quaerat aliquam velit exercitationem
            incidunt? Id vitae quisquam saepe quasi accusantium tempore enim!
            Aperiam dolorum a vero repellat dolor, inventore ab odit totam
            molestias expedita? Enim quia dolor maiores veniam ea! Quam illo,
            est incidunt ipsa reiciendis modi quisquam reprehenderit fuga velit
            dolorem odit sequi autem blanditiis, ullam commodi quibusdam.
            Accusamus repellat aperiam quis neque laudantium, dignissimos hic
            nisi magnam praesentium enim beatae sint architecto cum numquam
            inventore rerum animi sed nostrum quae delectus, voluptas molestiae
            placeat aliquid! Vel quaerat error officiis magnam dolorum iste
            aspernatur at est! Quo, consequuntur? Reiciendis, dolor. Quo at
            cupiditate in iure obcaecati voluptatum vel ea! Ab vel harum facere
            hic fuga ducimus sapiente dolore dolorem, nobis sint perferendis
            cumque esse! Omnis fugiat sint error laborum eveniet labore nam
            ducimus quisquam in repudiandae impedit excepturi dignissimos
            tenetur libero placeat rerum maxime tempore, aut nihil. Qui, quam?
            Voluptate fuga possimus itaque quas nesciunt iste, facilis mollitia
            illo qui placeat temporibus inventore obcaecati. Recusandae, sequi
            dignissimos in natus eum maiores dolorem, deleniti nobis
            accusantium, aspernatur beatae.
          </p>
        </section>
        <section className="scroll-section" id="scroll-section-2">
          <div className="sticky-elem sticky-elem-canvas">
            <canvas id="video-canvas-1" width="1920" height="1080" />
          </div>
          <div className="sticky-elem main-message a">
            <p>
              <small>편안한 촉감</small>
              입과 하나 되다
            </p>
          </div>
          <div className="sticky-elem desc-message b">
            <p>
              편안한 목넘김을 완성하는 디테일한 여러 구성 요소들, 우리는 이를
              하나하나 새롭게 살피고 재구성하는 과정을 거쳐 새로운 수준의 머그,
              AirMug Pro를 만들었습니다. 입에 뭔가 댔다는 감각은 어느새 사라지고
              오롯이 당신과 음료만 남게 되죠.
            </p>
            <div className="pin" />
          </div>
          <div className="sticky-elem desc-message c">
            <p>
              디자인 앤 퀄리티 오브 스웨덴,
              <br />
              메이드 인 차이나
            </p>
            <div className="pin" />
          </div>
        </section>
        <section className="scroll-section" id="scroll-section-3">
          <p className="mid-message">
            <strong>Retina 머그</strong>
            <br />
            아이디어를 광활하게 펼칠
            <br />
            아름답고 부드러운 음료 공간.
          </p>
          <canvas className="image-blend-canvas" width="1920" height="1080" />
          <p className="canvas-caption">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet at
            fuga quae perspiciatis veniam impedit et, ratione est optio porro.
            Incidunt aperiam nemo voluptas odit quisquam harum in mollitia.
            Incidunt minima iusto in corporis, dolores velit. Autem, sit dolorum
            inventore a rerum distinctio vero illo magni possimus temporibus
            dolores neque adipisci, repudiandae repellat. Ducimus accusamus
            similique quas earum laborum. Autem tempora repellendus asperiores
            illum ex! Velit ea corporis odit? Ea, incidunt delectus. Sapiente
            rerum neque error deleniti quis, et, quibusdam, est autem voluptate
            rem voluptas. Ratione soluta similique harum nihil vel. Quas
            inventore perferendis iusto explicabo animi eos ratione obcaecati.
          </p>
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
