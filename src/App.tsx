import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

const Wrapper = styled(motion.div)`
  height: 300vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {

  // 값을 추적 (리랜더링x)
  const x = useMotionValue(0);

  // useTransform : 변경할 값 , 인풋출력 , 아웃풋 출력
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const background = useTransform(
    x,
    [-800, 800],
    [
      "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
      "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))",
    ]
  );

  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0,1], [1,5]);

  // console.log 확인
  useMotionValueEvent(scrollYProgress, "change", (lastest) => {
    console.log("scrollYProgress", lastest);
  });

  return (
    <Wrapper style={{ background }}>
      <Box style={{ x, rotateZ, scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}
export default App;
