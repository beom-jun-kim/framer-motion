import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapBox = styled.div`
  width: 500px;
  height: 500px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  overflow: hidden;
  display:flex;
  justify-content: center;
  align-items:center;
`;

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

// const Circle = styled(motion.div)`
//   background-color: white;
//   height: 70px;
//   width: 70px;
//   place-self: center;
//   border-radius: 35px;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
// `;

const boxVars = {
  drag: {
    backgroundColor: "rgba(215,156,222,)",
    transition: { duration: 0.2, delay: 0 },
  },
};

function App() {
  const wrapBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <WrapBox ref={wrapBoxRef}>
        <Box
          variants={boxVars}

          // 드래그
          drag
          // dragConstraints : 제약이 있는 영역 설정
          dragConstraints={wrapBoxRef}

          // 중앙으로 돌아옴
          dragSnapToOrigin

          // 중앙에서 당기는 힘 디폴트는 0.5
          dragElastic={0.7}
          
          whileDrag="drag"
        />
      </WrapBox>
    </Wrapper>
  );
}
export default App;
