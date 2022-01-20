import React from 'react';

import articles from '../data/articles.js'
import ArticleCard from './ArticleCard.js';


function ArticleGrid(){
    return(
        <div class="cool">
            <div class="inter-cool">
                {
                articles.map((x, index)=><ArticleCard key={index} article={x} />)
                }   
            </div>
      </div> 
    )
}

export default ArticleGrid;
