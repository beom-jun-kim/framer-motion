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
  width: 200px;
  height: 130px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  margin-bottom: 30px;
`;

const boxVars = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  leaving: {
    scale: 0,
    opacity: 0,
    y: 20,
  },
};

function App() {
  const [show, setShow] = useState(false);
  const toggle = () => setShow((prev) => !prev);
  return (
    <Wrapper>
      
      {/* AnimatePresence 내부에는 조건문이 있어야 함 */}
      {/* exit : ele가 사라질때 어떤 animation을 발생시킬지 */}
      <AnimatePresence>
        {show ? (
          <Box
            variants={boxVars}
            initial="initial"
            animate="visible"
            exit="leaving"
          />
        ) : null}
      </AnimatePresence>
      <button onClick={toggle}>click!</button>
    </Wrapper>
  );
}
export default App;
