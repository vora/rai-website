import React from "react";
import { Article } from "../../types/article";
import styles from "./NewsArticle.module.css";

interface ArticleProps {
  article: Article;
  key: string;
}

export const NewsArticle = ({ article, key }: ArticleProps) => {
  return (
    <div className={styles.articleBox} key={key}>
      <div style={{ height: "80px" }}>
        <a href={article.url} className={styles.articleTitle}>
          {article.title}
        </a>
      </div>
      <div style={{ height: "60px" }} />
      {article.publicationDate && (
        <div className={styles.publicationDateBox}>
          <p className={styles.publicationDateText}>
            {article.publicationDate}
          </p>
        </div>
      )}
    </div>
  );
};
