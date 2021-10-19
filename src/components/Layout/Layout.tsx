import React, { PropsWithChildren } from "react";
import { Helmet } from "react-helmet";
import { graphql, withPrefix, useStaticQuery } from "gatsby";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import styles from "./Layout.module.css";

interface LayoutProps {
  readonly title?: string;
  readonly description?: string;
  readonly headerTitle?: string;
  readonly headerDescription?: string;
}

export function Layout({
  title,
  description,
  headerTitle,
  headerDescription,
  children,
}: PropsWithChildren<LayoutProps>) {
  const { content } = useStaticQuery(graphql`
    query LayoutQuery {
      content: contentfulMicroContent(key: { eq: "Website Description" }) {
        value {
          raw
        }
      }
    }
  `);

  const defaultDesc = findAllByKey(JSON.parse(content?.value.raw), "value");

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>RAI | {title || "Responsible AI"}</title>
        <meta
          name="description"
          content={description ?? defaultDesc.join(",")}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          src={withPrefix("kindful.js")}
          data-embed-id="d1727a32-6c93-4808-a281-897960739db5"
          data-lookup-type="jquery-selector"
          data-lookup-value="#kindful-donate-btn-d1727a32-6c93-4808-a281-897960739db5"
        />
        <script src={withPrefix("mailerlite.js")} />
      </Helmet>

      <div className={styles.layout}>
        <a href="#main" className={styles.skip}>
          Skip to content
        </a>
        <Header title={headerTitle} description={headerDescription} />
        <main className={styles.main} id="main">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

function findAllByKey(
  obj: Record<string, unknown> | null,
  keyToFind: string
): Array<string | unknown> {
  // @ts-expect-error Expected error
  return Object.entries(obj).reduce(
    (acc, [key, value]) =>
      // eslint-disable-next-line no-nested-ternary
      key === keyToFind
        ? // @ts-expect-error Expected error
          acc.concat(value)
        : typeof value === "object"
        ? // @ts-expect-error Expected error
          acc.concat(findAllByKey(value, keyToFind))
        : acc,
    []
  );
}
