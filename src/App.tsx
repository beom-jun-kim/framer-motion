import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 250px;
  height: 150px;
  position: absolute;
  top: 40px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const NextBtn = styled.button`
  /* position: absolute;
  top: 220px;
  right: 310px; */
`;

const PrevBtn = styled.button`
  /* position: absolute;
  top: 220px;
  left: 300px; */
`;

// variant를 function으로 바꿈
// 이 function은 한 arg를 가지고 이 arg는 cutom prop에서 온다
const box = {
  entry: (back: boolean) => {
    return {
      x: back ? -500 : 500,
      opacity: 0,
      scale: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.5,
    },
  }),
};

function App() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const next = () => {
    setBack(false);
    setVisible((prev) => (prev === 5 ? 1 : prev + 1));
  };
  const prev = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 5 : prev - 1));
  };
  return (
    <Wrapper>

      {/* AnimatePresence에도 cutom선언 */}
      <AnimatePresence mode="wait" custom={back}>
        <Box
          custom={back}
          variants={box}
          initial="entry"
          animate="center"
          exit="exit"
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <PrevBtn onClick={prev}>prev</PrevBtn>
      <NextBtn onClick={next}>next</NextBtn>
    </Wrapper>
  );
}
export default App;
