import { React } from 'react';
import { useInView } from 'react-intersection-observer';
import { IconArrowNarrowDown } from '@tabler/icons';
import { FlexContainer, NavArrow } from '../../Style/Utility.style';
import {
  StackWrap, Grid, Title,
} from './Stack.style';
import Tile from '../Tile/Tile';

function Stack() {
  const { ref, inView } = useInView();

  function delayNav(URL) {
    setTimeout(() => { window.location = URL; }, 50);
  }

  return (
    <StackWrap
      id="stack"
      justify="center"
      align="center"
      height="100vh"
      column
    >
      <FlexContainer
        width="max-content"
        align="center"
        justify="center"
      >
        <Title>
          MERN Stack focussed
        </Title>
      </FlexContainer>
      <Grid inView={inView ? 1 : 0} ref={ref}>
        <Tile source="./images/logo/html.png" alt="HTML" size="80%" />
        <Tile source="./images/logo/css.png" alt="CSS" size="57%" />
        <Tile source="./images/logo/JavaScript.png" alt="Javascript" size="70%" />
        <Tile source="./images/logo/react.png" alt="React" size="cover" />
        <Tile source="./images/logo/StyledComponets.png" alt="Styled Components" size="80%" />
        <Tile source="./images/logo/sass.png" alt="SASS" size="70%" />
        <Tile source="./images/logo/Node.svg" alt="Node JS" span size="90%" />
        <Tile source="./images/logo/mongo.png" alt="MongoDB" size="90%" />
        <Tile source="./images/logo/Expressjs.png" alt="Express" span size="105%" />
        <Tile source="./images/logo/aws-s3.svg" alt="AWS S3" size="65%" />
      </Grid>
      <NavArrow onClick={() => { delayNav('#stack'); }}>
        <IconArrowNarrowDown color="white" stroke={1.4} strokeLinejoin="miter" />
      </NavArrow>
    </StackWrap>
  );
}

export default Stack;
