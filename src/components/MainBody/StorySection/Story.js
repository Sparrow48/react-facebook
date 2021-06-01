import React from "react";

import StoryItem from "./StoryItem/SrotyItem";
import classes from "./Story.module.css";

import ProilePic1 from "../../../assets/nasib.png";

import Story1 from "../../../assets/story1.png";
import Story2 from "../../../assets/story2.png";
import Story3 from "../../../assets/story3.png";
import { Link } from "react-router-dom";

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
        <Link to='/#'>
          <StoryItem story={Story1} name='Nasib Sarkar' img={ProilePic1} />
        </Link>
        <Link to='/#'>
          <StoryItem story={Story2} name='Nasib Sarkar' img={ProilePic1} />
        </Link>
        <Link to='/#'>
          <StoryItem story={Story3} name='Nasib Sarkar' img={ProilePic1} />
        </Link>
        <Link to='/#'>
          <StoryItem story={Story2} name='Nasib Sarkar' img={ProilePic1} />
        </Link>
        <Link to='/#'>
          <StoryItem story={Story3} name='Nasib Sarkar' img={ProilePic1} />
        </Link>
      </div>
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
