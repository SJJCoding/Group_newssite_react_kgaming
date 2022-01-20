import React from 'react';

import logo1 from '../images/31k059knbf821.jpg';

function Showcase(){
    return(
        <section class="featured_article" style={{ backgroundImage: `url(${logo1})`}}>
        <div class="featured">
          <span class="tech_pill pill">Technology</span>
          <h2>Reality can be whatever you want!</h2>
          <p>
            when we bind ourself to truth we will be cursed to lead boring
            unmeaningful lives. at u news we strive to not only bring you the
            truth but to bring you the entertaining truth, something that aspires
            to be more than true we compell our readers to act boldly on the
            belifs that they have an change the world by daring to act on enhanced
            facts. -more truth, faster truth, better truth (sun sour)
          </p>
          <a class="Learn_more" href="#">Learn more</a>
        </div>
      </section>
    )
}

export default Showcase;
