import React from "react";
import Layout from "../components/Layout";
import { Row, Jumbotron, JumboText } from "../components/Blocks";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import StyledLink from "../components/StyledLink";
import News from "../components/News";

import {
  Headline1,
  Headline2,
  MediumBody,
  LargeBody,
  Heading1,
} from "../components/Text";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
`;

export const JumboImage = styled.div`
  @media screen and (max-width: 1190px) {
    img {
      margin-top: ${(props) => (props.first ? "1200px" : "600px")};
      right: 0;
      width: 100vw;
      height: auto;
    }
  }

  @media screen and (max-width: 600px) {
    img {
      margin-top: 500px;
    }
  }
`;
function Fellowship() {
  return (
    <Layout title="Fellowship">
      <Jumbotron>
        <JumboText>
          <Headline1>
            Responsible AI
            <br /> Fellowship Program
            <br /> 2021
          </Headline1>
          <MediumBody>
            Responsible AI Institute (RAI) is establishing a 2021 cohort of
            Fellows from
            <br />
            leading universities to help advance the design and development of
            an
            <br />
            independent certification for the Responsible use of AI systems. The
            cohort
            <br />
            will include students from diverse fields of study including
            computer science,
            <br /> ethics, political science, and business.
          </MediumBody>
          <br />
        </JumboText>
        <JumboImage className="hero-image">
          <StaticImage
            src="../images/rai-icons/Fellowship.png"
            style={{
              position: "absolute",
              zIndex: "1",
              right: "183px",
              top: "262px",
            }}
            width={326}
            height={326}
            alt="Fellowship Icon"
          />
        </JumboImage>
      </Jumbotron>
      <Jumbotron gray>
        <JumboText>
          <Headline2>RAI Research Fellow</Headline2>
          <MediumBody>
            The RAI Research Fellowship is an intensive, eight-week
            <br /> development program for graduates, grad students and
            <br /> researchers that helps bridge the gap to a full-time career
            in
            <br /> data & AI-related fields.
          </MediumBody>
        </JumboText>
        <Column>
          <MediumBody
            style={{
              borderLeftColor: "#2F2D34",
              borderLeftWidth: "3px",
              borderLeftStyle: "solid",
              paddingLeft: "10px",
              marginBottom: "40px",
            }}
          >
            Career paths include data scientist, machine learning
            <br /> engineer, data analyst or niche AI expert (NLP, Computer
            <br />
            Vision, etc.).
          </MediumBody>
          <MediumBody
            style={{
              borderLeftColor: "#2F2D34",
              borderLeftWidth: "3px",
              borderLeftStyle: "solid",
              paddingLeft: "10px",
              marginBottom: "40px",
            }}
          >
            Technical Fellows come from a mix of data driven STEM fields,
            including physics, math, engineering, statistics,
            <br /> computer science, machine & deep learning, computer vision,
            <br /> NLP, quantitative finance, genomics, biology, neuroscience,
            <br /> and others.
          </MediumBody>
          <MediumBody
            style={{
              borderLeftColor: "#2F2D34",
              borderLeftWidth: "3px",
              borderLeftStyle: "solid",
              paddingLeft: "10px",
              marginBottom: "40px",
            }}
          >
            Fellows work collaboratively with RAI’s leadership and its
            <br /> ecosystem of Member and Partner organizations to focus on
            <br /> specific technically related challenges in designing,
            <br /> implementing, scaling, and sustaining a variety of processes
            <br /> that enable RAI to certify AI applications as trustworthy.
          </MediumBody>
        </Column>
      </Jumbotron>

      <Jumbotron>
        <JumboText>
          <Headline2>RAI Business Fellow</Headline2>
          <MediumBody>
            The RAI Business Fellowship is an intensive, hands-on,
            <br />
            community-based experience for business executives (CXO,
            <br /> Senior Managers, Board Level) to assist in their entry into
            <br /> designing and managing Responsible AI systems. It helps
            <br /> business leaders gain valuable understandings and deeper
            <br /> insights into the various economic, geo-social, and technical
            <br /> facets of implementing effective, trustworthy AI applications
            <br /> within their businesses and industries.
          </MediumBody>
        </JumboText>
        <Column>
          <MediumBody
            style={{
              borderLeftColor: "#2F2D34",
              borderLeftWidth: "3px",
              borderLeftStyle: "solid",
              paddingLeft: "10px",
              marginBottom: "40px",
            }}
          >
            Business Fellows come from all areas of corporate
            <br /> leadership, including business unit executives, executive
            <br /> officers, serial entrepreneurs, corporate board members,
            <br /> and/or senior-level managers that are seeking to further
            their
            <br /> knowledge and capabilities regarding AI as it applies to
            their
            <br /> companies and industries.
          </MediumBody>
          <MediumBody
            style={{
              borderLeftColor: "#2F2D34",
              borderLeftWidth: "3px",
              borderLeftStyle: "solid",
              paddingLeft: "10px",
              marginBottom: "40px",
            }}
          >
            Fellows work collaboratively with RAI’s leadership and its
            <br /> ecosystem of Member and Partner organizations to focus
            <br /> on specific business-related challenges pertinent to the
            <br /> Fellow’s specific business foci (cost/benefit justifications,
            <br />
            geo-social impacts, brand protections, prevention of bias,
            <br /> etc.) in designing, implementing, scaling, and sustaining
            <br /> Certifiable and Trustworthy AI applications within their
            <br />
            companies and industries.
          </MediumBody>
        </Column>
      </Jumbotron>
      <Jumbotron gray>
        <JumboText>
          <Headline2>
            RAI Professional/
            <br /> Government Fellow
            <br /> (Law, Government,
            <br /> Health, Audit, Design)
          </Headline2>
          <MediumBody>
            The RAI Professional/Government Followship is an intensive,
            <br />
            hands-on, community-based eight-week development program
            <br /> for Professional and Government Fellows. It helps deliver
            <br /> valuable understandings and deeper insights into a wide range
            <br /> of legal, governmental, health, regulatory, audit and other
            <br /> professional facets of designing, verifying, and implementing
            <br /> effective, trustworthy AI applications.
          </MediumBody>
        </JumboText>
        <Column>
          <MediumBody
            style={{
              borderLeftColor: "#2F2D34",
              borderLeftWidth: "3px",
              borderLeftStyle: "solid",
              paddingLeft: "10px",
              marginBottom: "40px",
            }}
          >
            Professional/Government Fellows come from all areas of
            <br /> professional leadership, including attorneys, doctors, CPAs,
            <br /> design specialists, government leaders, etc. that are seeking
            <br /> to further their knowledge and gain new capabilities
            <br /> regarding AI as it applies to their practices and
            <br /> constituencies.
          </MediumBody>
          <MediumBody
            style={{
              borderLeftColor: "#2F2D34",
              borderLeftWidth: "3px",
              borderLeftStyle: "solid",
              paddingLeft: "10px",
              marginBottom: "40px",
            }}
          >
            Fellows work collaboratively with RAI’s leadership and its
            <br /> ecosystem of Member and Partner organizations to focus on
            <br /> specific professional-related challenges pertinent to both
            the
            <br /> Fellow’s and RAI’s foci in designing, implementing, scaling,
            <br /> and sustaining processes that enable RAI to Certify AI
            <br /> applications as Trustworthy across all industries globally.
          </MediumBody>
        </Column>
      </Jumbotron>
      <Jumbotron>
        <JumboText>
          <Headline2>RAI Community Fellow</Headline2>
          <MediumBody>
            The RAI Community Fellowship is an intensive, hands-on,
            <br />
            community-based 8–26-week experience for
            <br /> community-focused Fellows. It is geared to provide hands-on
            <br /> valuable understandings and deeper insights into a wide
            <br /> range of individual, social, and community-related facets of
            <br /> designing and implementing effective, trustworthy AI
            <br /> applications in all walks of daily life.
          </MediumBody>
        </JumboText>
        <Column>
          <MediumBody
            style={{
              borderLeftColor: "#2F2D34",
              borderLeftWidth: "3px",
              borderLeftStyle: "solid",
              paddingLeft: "10px",
              marginBottom: "40px",
            }}
          >
            Community Fellows come from many areas of community
            <br /> leadership, including non-profits, community working groups,
            <br /> NGOs, social platforms, etc. where the Fellow is seeking to
            <br /> further their skillsets in understanding and applying AI to
            <br /> address community needs.
          </MediumBody>
          <MediumBody
            style={{
              borderLeftColor: "#2F2D34",
              borderLeftWidth: "3px",
              borderLeftStyle: "solid",
              paddingLeft: "10px",
              marginBottom: "40px",
            }}
          >
            Fellows work collaboratively with RAI’s leadership and its
            <br /> ecosystem of Member and Partner organizations to focus on
            <br /> social-related opportunities and challenges pertinent to both
            <br /> the Fellow’s and RAI’s foci in designing, implementing,
            <br /> scaling, and sustaining processes that enable RAI to Certify
            <br /> AI applications as Trustworthy across communities
            <br /> worldwide.
          </MediumBody>
        </Column>
      </Jumbotron>
      <Jumbotron gray>
        <JumboText>
          <Headline2>RAI Youth Fellow</Headline2>
          <MediumBody>
            The RAI Youth Fellowship is a community-based learning
            <br /> experience for high school and undergraduate Fellows that
            <br /> helps deliver a world class AI environment for Fellows to
            <br /> harness their boundless creativity and energy in envisioning,
            <br /> understanding, designing and applying trustworthy AI
            <br /> applications in new areas of focus.
          </MediumBody>
        </JumboText>
        <Column>
          <MediumBody
            style={{
              borderLeftColor: "#2F2D34",
              borderLeftWidth: "3px",
              borderLeftStyle: "solid",
              paddingLeft: "10px",
              marginBottom: "40px",
            }}
          >
            Youth Fellows are juniors or seniors in high school and/or
            undergraduates in accredited colleges or universities, where
            <br /> the Fellow is seeking to further their knowledge and skillset
            <br /> in AI technologies across new or innovative applications and
            <br /> improve their skills and qualifications.
          </MediumBody>
          <MediumBody
            style={{
              borderLeftColor: "#2F2D34",
              borderLeftWidth: "3px",
              borderLeftStyle: "solid",
              paddingLeft: "10px",
              marginBottom: "40px",
            }}
          >
            Fellows work collaboratively with RAI’s leadership and its
            <br /> ecosystem of Member and Partner organizations to focus on
            <br /> green-field opportunities for the use of AI and the various
            <br /> issues in designing, implementing, scaling, and sustaining
            <br /> the myriad processes that enable trustworthy and certifiable
            <br /> AI applications.
          </MediumBody>
        </Column>
      </Jumbotron>
      <Jumbotron dark style={{ justifyContent: "center" }}>
        <StaticImage
          src="../images/rai-icons/rail-badge-white.png"
          style={{ alignSelf: "center" }}
        />
        <JumboText>
          <Heading1 dark>About RAI</Heading1>
          <LargeBody dark>
            RAI is a non-profit dedicated to the development of
            <br /> tangible governance tools for the responsible use of AI.
            <br /> Our tools are widely adopted in industry, academia, civil
            <br /> society, and government, as they have been among the
            <br /> first to translate principles into practice, helping
            <br /> practitioners of all backgrounds. With a wealth of
            <br />
            experience in both the development of AI policy and
            <br /> systems, RAI is uniquely positioned to partner with
            <br />
            organizations across public, private, and academic sectors
            <br /> to guide and inform responsible AI governance.
          </LargeBody>
        </JumboText>
      </Jumbotron>

      <Row gray>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: "40px",
          }}
        >
          <Headline2>News</Headline2>
          <StyledLink text="More News" link="/" />
        </div>
        <News />
      </Row>
    </Layout>
  );
}

export default Fellowship;
