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
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
function App() {
  return (
    <Wrapper>

      <Box

        /* initial : 초기 상태 설정 */
        initial={{ scale: 0 }}

        /* animate : 최종 상태 설정 */
        animate={{ scale: 1, rotateZ: 360 }}

        /* transition : 동착 형태 설정 */
        transition={{ type: "spring", /* stiffness:10 */ /* damping:1 */ }}
      />
    </Wrapper>
  );
}
export default App;
