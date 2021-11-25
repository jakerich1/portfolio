import { React } from 'react';
import { Carousel } from 'react-responsive-carousel';
import {
  ProjectWrap, Project,
  Card, CardImage,
  CardInfo, ReposLink,
} from './Projects.style';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

function Projects() {
  return (
    <ProjectWrap id="projects">
      <Project>
        <Card>
          <CardImage tabIndex="0" alt="Certi" src="./images/certi/certi.png" />
          <CardInfo>
            <p>
              Certi is an upcoming music app which promotes your local artists.
              I was tasked with building the landing page for the project and
              was fortunate enough to be provided with professional design
              assets via Adobe xd from their lead designer.
            </p>
            <div>
              <ReposLink href="#">
                Live page
              </ReposLink>
              <ReposLink href="#">
                Repository
              </ReposLink>
            </div>
          </CardInfo>
        </Card>
        <Carousel transitionTime="1500" useKeyboardArrows autoPlay interval="4000" infiniteLoop showThumbs={false}>
          <div>
            <img alt="certi intro" src="./images/certi/certi-intro.png" />
            <p className="legend">Intro screen</p>
          </div>
          <div>
            <img alt="certi app view" src="./images/certi/certi-app-view.png" />
            <p className="legend">App view</p>
          </div>
          <div>
            <img alt="certi signup" src="./images/certi/certi-signup.png" />
            <p className="legend">Sign up</p>
          </div>
          <div>
            <img alt="certi footer" src="./images/certi/certi-footer.png" />
            <p className="legend">Footer</p>
          </div>
        </Carousel>
      </Project>

      <Project>
        <Card>
          <CardImage tabIndex="0" alt="Certi" src="./images/odinbook/odinbook.png" />
          <CardInfo>
            <p>
              OdinBook is my capstone piece for The Odin Project.
              The task was to replicate some of the core features of a
              social media site, my chosen one being Facebook
            </p>
            <div>
              <ReposLink target="_blank" href="https://jakerich1.github.io/odinbook">
                Live page
              </ReposLink>
              <ReposLink href="#">
                Repository
              </ReposLink>
            </div>
          </CardInfo>
        </Card>
        <Carousel transitionTime="1500" useKeyboardArrows autoPlay interval="4000" infiniteLoop showThumbs={false}>
          <div>
            <img alt="odinbook log in" src="./images/odinbook/Log-in.png" />
            <p className="legend">Log in screen</p>
          </div>
          <div>
            <img alt="odinbook profile" src="./images/odinbook/Profile.png" />
            <p className="legend">Profile view</p>
          </div>
          <div>
            <img alt="odinbook timeline" src="./images/odinbook/Timeline.png" />
            <p className="legend">Timeline view</p>
          </div>
          <div>
            <img alt="odinbook mobile view" src="./images/odinbook/MobileView.png" />
            <p className="legend">Mobile view</p>
          </div>
        </Carousel>
      </Project>
    </ProjectWrap>
  );
}

export default Projects;
