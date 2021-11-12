import React, { useState } from "react";
import { Article } from "../../types/article";
import { NewsArticle } from "../NewsArticle";
import styles from "./News.module.css";

interface NewsProps {
  articles: Array<Article>;
}

export const News = ({ articles }: NewsProps) => {
  const DEFAULT_SHOWN_ARTICLES = 5;
  const viewAllButtonText = "View All";

  const [shownArticles, setShownArticles] = useState(
    articles.splice(0, DEFAULT_SHOWN_ARTICLES)
  );
  const [showAllArticles, setShowAllArticles] = useState(false);

  const onLoadClick = () => {
    setShownArticles(articles);
    setShowAllArticles(true);
  };

  return (
    <>
      <p className={styles.articlesHeader}>Responsible AI News</p>
      <div className={styles.articlesContainer}>
        {shownArticles.map((article) => {
          return <NewsArticle article={article} key={article.id} />;
        })}
        {!showAllArticles && articles.length > 5 && (
          <div className={styles.viewButtonContainer}>
            <button
              className={styles.viewButton}
              type="button"
              onClick={() => onLoadClick()}
            >
              {viewAllButtonText}
            </button>
          </div>
        )}
      </div>
    </>
  );
};
