import React from "react";
import Layout from "../components/Layout";
import {
  LargeBody,
  SmallBody,
  Headline1,
  Headline2,
  Headline3,
  Headline4,
  Headline5,
} from "../components/Text";
import {PrimaryBtn, SecondaryBtn} from "../components/Buttons";
import Link from "../components/Link";

// markup
const IndexPage = () => {
  return (
    <Layout title="Home">
      <Headline1>Head</Headline1>
      <Headline2>Head</Headline2>
      <Headline3>Head</Headline3>
      <Headline4>Head</Headline4>
      <Headline5>Head</Headline5>
      <LargeBody>Hello there</LargeBody>
      <SmallBody>Hello again</SmallBody>
      <p>home</p>
      <PrimaryBtn >Primary Button</PrimaryBtn>
      <PrimaryBtn small>
        Primary Button- Small
      </PrimaryBtn>
      <SecondaryBtn dark>Primary Button</SecondaryBtn>
      <SecondaryBtn dark small>
        Primary Button- Small
      </SecondaryBtn>
    </Layout>
  );
};

export default IndexPage;
