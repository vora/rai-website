import React, { PropsWithChildren } from "react";
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";

import { WebsiteBanner } from "@/components/WebsiteBanner";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import styles from "./Layout.module.css";

interface LayoutProps {
  readonly title?: string;
  readonly description?: string;
}
export function Layout({
  title,
  description,
  children,
}: PropsWithChildren<LayoutProps>) {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>RAI | {title || "Responsible AI"}</title>
        <meta
          name="description"
          content={
            description ||
            "The Responsbile Artificial Intelligence Institute (RAI) is the premier organization seeking to bring repsonsibility to the exploding field of AI."
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          src={withPrefix("kindful.js")}
          data-embed-id="d1727a32-6c93-4808-a281-897960739db5"
          data-lookup-type="jquery-selector"
          data-lookup-value="#kindful-donate-btn-d1727a32-6c93-4808-a281-897960739db5"
        />
      </Helmet>

      <div className={styles.layout}>
        <WebsiteBanner />
        <Navigation />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
