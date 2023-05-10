import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: "white";
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  height: 50px;
  width: 50px;
  border-radius: 50%;
  place-self: center;
`;

const boxVars = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity: 1,
    scale: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const circleVars = {
  start: {
    opacity: 0,
    y: -10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

function App() {
  return (
    <Wrapper>
      {/* 부모 컴포넌트 initial과 animate는 자식에게 상속된다 */}
      <Box variants={boxVars} initial="start" animate="end">
        <Circle variants={circleVars} />
        <Circle variants={circleVars} />
        <Circle variants={circleVars} />
        <Circle variants={circleVars} />
      </Box>
    </Wrapper>
  );
}
export default App;
