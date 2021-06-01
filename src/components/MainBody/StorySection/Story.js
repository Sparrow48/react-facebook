import React from "react";

import StoryItem from "./StoryItem/SrotyItem";
import classes from "./Story.module.css";

import ProfilePicture0 from "../../../assets/nasib2.png";
import ProfilePicture2 from "../../../assets/nayeem.png";
import ProfilePicture3 from "../../../assets/rahat.png";
import ProfilePicture4 from "../../../assets/nasib3.png";
import ProfilePicture5 from "../../../assets/hridoy.png";

import Story1 from "../../../assets/story1.png";
import Story2 from "../../../assets/story2.png";
import Story3 from "../../../assets/story3.png";

function Story() {
  // const [isSticky, setSticky] = useState(false);
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollX > 25) {
  //       setSticky(true);
  //     } else {
  //       setSticky(false);
  //     }
  //   });
  // }, []);

  return (
    <div>
      {/* <div className={classes.storySection} onClick={() => window.scroll()}> */}
      <div className={classes.storySection}>
        <div>
          <StoryItem story={Story1} name='Hasib Sarkar' img={ProfilePicture0} />
        </div>
        <div>
          <StoryItem
            story={Story2}
            name='Nayeem M. Muzahid'
            img={ProfilePicture2}
          />
        </div>
        <div>
          <StoryItem
            story={Story3}
            name='Md. Rahat Hasan'
            img={ProfilePicture3}
          />
        </div>
        <div>
          <StoryItem
            story={Story2}
            name='Abir Talukdar'
            img={ProfilePicture4}
          />
        </div>
        <div>
          <StoryItem story={Story3} name='Md. Hridoy' img={ProfilePicture5} />
        </div>
      </div>

      {/*For mobile view */}
      <div className={classes.forMobile}>
        <button>Show All Stories</button>
      </div>

      {/* <div className={classes.forMobile}>
        {isSticky ? <button>Show All Stories</button> : null}
      </div> */}
    </div>
  );
}

export default Story;
