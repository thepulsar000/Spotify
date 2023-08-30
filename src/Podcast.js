import skipleft from './imgs/skipleft.svg';
import skipright from './imgs/skipright.svg';
import play from './imgs/play.svg';
import pause from './imgs/pause.svg';
import podcast from './imgs/podcast.jpg';
import sideleft from './imgs/left.svg';
import sideright from './imgs/right.svg';
import { Title } from './Title';
import { PodcastName } from './Title';





function Podcast() {
  return (
    <section>
      <div className="podcast scroll-margin" id="pod">
        <Title title="Podcast" />
        <div className="pod-display">
          <div className="go-left">
            <img src={sideleft} alt="swipe-left" />
          </div>

          <div className="pod-img">
            <img src={podcast} alt="A microphone" />
          </div>

          <div className="go-left">
            <img src={sideright} alt="swipe-right" />
          </div>
        </div>
        <PodcastName />
        <div className="pod-icons">
          <div className="pod-icon">
            <img src={skipleft} alt="left-skip" />
          </div>
          <div className="pod-icon" id="pause">
            <img src={pause} alt="pause" />
          </div>
          <div
            className="pod-icon"
            id="play"
            onClick={(e) => {
              let animateEl = document.querySelector(".bars");
              let animateChild = animateEl.children;
              let pauseEl = document.querySelector("#pause");
              let show = 1;
              let hide = 0;

              for (let i = 0; animateChild[i]; i++) {
                if (animateChild[i].style.animationPlayState !== "running") {
                  animateChild[i].style.animationPlayState = "running";
                  pauseEl.style.opacity = show;
                  e.target.style.opacity = hide;
                  // console.log("hey");
                } else if (
                  animateChild[i].style.animationPlayState === "running"
                ) {
                  animateChild[i].style.animationPlayState = "paused";
                  pauseEl.style.opacity = hide;
                  e.target.style.opacity = show;
                  // console.log("there");
                }
              }
            }}
          >
            <img src={play} alt="play" />
          </div>
          <div className="pod-icon">
            <img src={skipright} alt="right-skip" />
          </div>
        </div>

        <div className="bars">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
}



export default Podcast;