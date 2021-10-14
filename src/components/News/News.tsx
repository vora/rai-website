import React from "react";
import { Article } from "../../types/article";
import { NewsArticle } from "../NewsArticle";
import styles from "./News.module.css";

interface NewsProps {
  articles: Array<Article>;
}

export const News = ({ articles }: NewsProps) => {
  return (
    <>
      <p className={styles.articlesHeader}>Responsible AI News</p>
      <div className={styles.articlesContainer}>
        {articles.map((article) => {
          return <NewsArticle article={article} key={article.id} />;
        })}
      </div>
    </>
  );
};
