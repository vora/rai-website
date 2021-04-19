import React from "react";
import Layout from "../components/Layout";
import { Headline1, MediumBody } from "../components/Text";
import { PrimaryBtn } from "../components/Buttons";
import { StaticImage } from "gatsby-plugin-image";

// markup
const IndexPage = () => {
  return (
    <Layout title="Home">
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "50%",
            zIndex: "5",
            margin: "0px 0px 0px 100px",
          }}
        >
          <Headline1>
            Working Together <br /> for AI We Can Trust
          </Headline1>
          <MediumBody>
            Artificial Intelligence holds great potential and great peril. As
            practitioners <br /> and stakeholders, our choice is to build a
            future that either will — or will <br /> not — be trusted by
            everyone. The Responsible AI Institute is working to <br /> define
            responsible AI with practical tools and expert guidance on data
            <br />
            rights, privacy, security, explainability, and fairness.
          </MediumBody>
          <br />
          <PrimaryBtn dark>Learn About RAIL Certification</PrimaryBtn>
        </div>
        <StaticImage
          src="../images/pictures/patient-1.png"
          style={{
            position: "absolute",
            zIndex: "4",
            left: "160px",
            top: "134px",
          }}
          width={1479}
          height={709}
        />
        <StaticImage
          src="../images/pictures/patient-2.png"
          style={{
            position: "absolute",
            zIndex: "3",
            left: "700px",
            top: "162px",
          }}
          width={1177}
          height={618}
        />
        <StaticImage
          src="../images/pictures/patient-3.png"
          style={{
            position: "absolute",
            zIndex: "2",
            left: "40px",
            top: "125px",
          }}
          width={1530}
          height={695}
        />
      </div>
    </Layout>
  );
};

export default IndexPage;
