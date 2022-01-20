import React from 'react';
import ArticleGrid from './ArticleGrid';
import articles from '../data/articles.js'

function ArticleCard({article}){
    return(
        <div className="artical-box">
          <img src={article.imageURL} alt="" />
          <div className="pill rasist">rasist</div>
          <h2>{article.title}</h2>
          <p>{article.abstract}
          </p>
        </div>
    )
}

export default ArticleCard;