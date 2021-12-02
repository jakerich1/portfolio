import { React } from 'react';
import {
  IconBrandLinkedin, IconBrandGithub, IconBrandCodepen, IconArrowNarrowDown,
} from '@tabler/icons';
import { FlexContainer, NavArrow } from '../../Style/Utility.style';
import {
  NameTitle, SubHead, SocialCont, IntroWrap,
} from './Intro.style';
import useWindowSize from '../../Hooks/useWindowSize';

function Intro() {
  const size = useWindowSize();

  function delayNav(URL) {
    setTimeout(() => { window.location = URL; }, 50);
  }

  return (
    <IntroWrap justify="center" align="center" height="100vh" padding={size.width < 500 ? '0.5em' : '2em'}>
      <FlexContainer column={size.width < 500 ? 1 : 0} align="center" gap="2em">
        <FlexContainer column justify="center">
          <NameTitle>Jacob Riches</NameTitle>
          <SubHead>Front-end web developer</SubHead>
          <FlexContainer align="center" gap="0.75em" justify={size.width < 500 ? 'center' : 'flex-start'} padding="10px 0 0 0">
            <SocialCont href="https://uk.linkedin.com/in/jacob-riches" target="_blank">
              <IconBrandLinkedin size={size.width > 500 ? 36 : 24} color="#212529" stroke={1.4} strokeLinejoin="miter" />
            </SocialCont>
            <SocialCont href="https://github.com/jakerich1" target="_blank">
              <IconBrandGithub size={size.width > 500 ? 36 : 24} color="#212529" stroke={1.4} strokeLinejoin="miter" />
            </SocialCont>
            <SocialCont href="https://codepen.io/jriches" target="_blank">
              <IconBrandCodepen size={size.width > 500 ? 36 : 24} color="#212529" stroke={1.4} strokeLinejoin="miter" />
            </SocialCont>
            <SocialCont href="https://stackoverflow.com/users/9318217/jacob-riches" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width={size.width > 500 ? 24 : 24} height={size.width > 500 ? 24 : 14}>
                <path d="M28.16 32H2.475V20.58H5.32v8.575h19.956V20.58h2.884z" fill="#212529" />
                <path d="M8.477 19.8l13.993 2.923.585-2.806-13.993-2.923zm1.832-6.704l12.94 6.04 1.208-2.572-12.94-6.08zm3.586-6.353l10.99 9.12 1.832-2.183-10.99-9.12zM20.99 0l-2.3 1.715 8.536 11.46 2.3-1.715zM8.166 26.27H22.43v-2.845H8.166v2.845z" fill="#212529" />
              </svg>
            </SocialCont>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
      <NavArrow onClick={() => { delayNav('#stack'); }}>
        <IconArrowNarrowDown size={size.width > 500 ? 36 : 24} color="#cecece" stroke={1.4} strokeLinejoin="miter" />
      </NavArrow>
    </IntroWrap>
  );
}

export default Intro;
