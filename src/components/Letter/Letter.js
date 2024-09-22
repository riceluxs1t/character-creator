import React from "react";

import MaxWidthWrapper from "../MaxWidthWrapper";
import FlipPage from "react-flip-page";
import Page1 from "../Page1";
import Page2 from "../Page2";
import Page3 from "../Page3";

import styled from "styled-components";
import styles from "./Letter.module.css";

function Letter() {
  return (
    <main className={styles.characterEditor}>
      <MaxWidthWrapper className={styles.maxWidthWrapper}>
        <Wrapper>
          <FlipPage
            pageBackground={"black"}
            height={1200}
            width={2000}
            orientation={"horizontal"}
            flipOnTouch={true}
            disableSwipe={true}
            showTouchHint={true}
            animationDuration={1000}
          >
            <Page1 />
            <Page2 />
            <Page3 />
          </FlipPage>
        </Wrapper>
      </MaxWidthWrapper>
    </main>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

export default Letter;
