import styled from "styled-components";
import { motion, AnimatePresence, m } from "framer-motion";
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

const Button = styled.button`
  position: absolute;
  top: 220px;
`;

const box = {
  invisible: {
    x: 500,
    opacity: 0,
    scale:0,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale:1,
    transition: {
      duration: .5,
    },
  },
  exit: {
    x: -500,
    opacity: 0,
    scale:0,
    transition: {
      duration: .5,
    },
  },
};

function App() {
  const [visible, setVisible] = useState(1);
  const next = () => setVisible((prev) => (prev === 10 ? 1 : prev + 1));
  return (
    <Wrapper>
      <AnimatePresence>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>
          i === visible ? (
            <Box
              variants={box}
              initial="invisible"
              animate="visible"
              exit="exit"
              key={i}
            >
              {i}
            </Box>
          ) : null
        )}
      </AnimatePresence>
      <Button onClick={next}>next</Button>
    </Wrapper>
  );
}
export default App;
