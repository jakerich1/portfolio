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
              <ReposLink target="_blank" href="https://jakerich1.github.io/certi-dev/">
                Live page
              </ReposLink>
              <ReposLink target="_blank" href="https://github.com/jakerich1/certi-dev">
                Repository
              </ReposLink>
            </div>
          </CardInfo>
        </Card>
        <Carousel transitionTime="1500" useKeyboardArrows autoPlay interval="4000" infiniteLoop showThumbs={false}>
          <div>
            <img loading="lazy" alt="certi intro" src="./images/certi/certi-intro.png" />
          </div>
          <div>
            <img loading="lazy" alt="certi app view" src="./images/certi/certi-app-view.png" />
          </div>
          <div>
            <img loading="lazy" alt="certi signup" src="./images/certi/certi-signup.png" />
          </div>
          <div>
            <img loading="lazy" alt="certi footer" src="./images/certi/certi-footer.png" />
          </div>
        </Carousel>
      </Project>

      <Project>
        <Card>
          <CardImage tabIndex="0" alt="Odinbook" src="./images/odinbook/odinbook.png" />
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
              <ReposLink target="_blank" href="https://github.com/jakerich1/odinbook">
                Repository
              </ReposLink>
            </div>
          </CardInfo>
        </Card>
        <Carousel transitionTime="1500" useKeyboardArrows autoPlay interval="4000" infiniteLoop showThumbs={false}>
          <div>
            <img loading="lazy" alt="odinbook log in" src="./images/odinbook/Log-in.png" />
          </div>
          <div>
            <img loading="lazy" alt="odinbook profile" src="./images/odinbook/Profile.png" />
          </div>
          <div>
            <img loading="lazy" alt="odinbook timeline" src="./images/odinbook/Timeline.png" />
          </div>
          <div>
            <img loading="lazy" alt="odinbook mobile view" src="./images/odinbook/MobileView.png" />
          </div>
        </Carousel>
      </Project>

      <Project>
        <Card>
          <CardImage tabIndex="0" alt="Postcode Heatmap" src="./images/postcode/postcode.png" />
          <CardInfo>
            <p>
              Work in progress. This tool was built with vanilla JS and is
              used to generate a customizable heat-map of UK postcode areas.
              <br />
              <br />
              I plan on refactoring this tool with React and adding authentication to
              allow for saved maps and styling.
            </p>
            <div>
              <ReposLink target="_blank" href="https://jakerich1.github.io/Postcode-Heatmap/">
                Live page
              </ReposLink>
              <ReposLink target="_blank" href="https://github.com/jakerich1/Postcode-Heatmap">
                Repository
              </ReposLink>
            </div>
          </CardInfo>
        </Card>
        <Carousel transitionTime="1500" useKeyboardArrows autoPlay interval="4000" infiniteLoop showThumbs={false}>
          <div>
            <img loading="lazy" alt="postcode light" src="./images/postcode/light.png" />
          </div>
          <div>
            <img loading="lazy" alt="postcode dark" src="./images/postcode/dark.png" />
          </div>
        </Carousel>
      </Project>

      <Project>
        <Card>
          <CardImage tabIndex="0" alt="TNW Replication" src="./images/TNW/TNW.png" />
          <CardInfo>
            <p>
              This was project was part of the HTML & CSS practice in The Odin Project.
              The task was to replicate the front page, and it&apos;s responsiveness, of TNW
              with vanilla CSS.
            </p>
            <div>
              <ReposLink target="_blank" href="https://jakerich1.github.io/TOP-TNW/">
                Live page
              </ReposLink>
              <ReposLink target="_blank" href="https://github.com/jakerich1/TOP-TNW/">
                Repository
              </ReposLink>
            </div>
          </CardInfo>
        </Card>
        <Carousel transitionTime="1500" useKeyboardArrows autoPlay interval="4000" infiniteLoop showThumbs={false}>
          <div>
            <img loading="lazy" alt="TNW Main" src="./images/TNW/Main.png" />
          </div>
          <div>
            <img loading="lazy" alt="TW Second" src="./images/TNW/Second.png" />
          </div>
          <div>
            <img loading="lazy" alt="TNW Third" src="./images/TNW/third.png" />
          </div>
        </Carousel>
      </Project>

      <Project>
        <Card>
          <CardImage tabIndex="0" alt="Portfolio" src="./images/portfolio/portfolio.png" />
          <CardInfo>
            <p>
              This portfolio is built on React and styled with Styled Components.
              The very simple back end makes use of NodeJS with MongoDB.
            </p>
            <div>
              <ReposLink target="_blank" href="https://jakerich1.github.io/portfolio">
                Live page
              </ReposLink>
              <ReposLink target="_blank" href="https://github.com/jakerich1/portfolio">
                Repository
              </ReposLink>
            </div>
          </CardInfo>
        </Card>
        <Carousel transitionTime="1500" useKeyboardArrows autoPlay interval="4000" infiniteLoop showThumbs={false}>
          <div>
            <img loading="lazy" alt="Portfolio" src="./images/portfolio/portfolio.png" />
          </div>
          <div>
            <img loading="lazy" alt="portfolio stack" src="./images/portfolio/stack.png" />
          </div>
        </Carousel>
      </Project>

    </ProjectWrap>
  );
}

export default Projects;
