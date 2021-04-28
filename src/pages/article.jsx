import * as React from "react"
import styled from "styled-components";
import Layout from "components/Layout";
import { Headline1, MediumBody, Headline2, SmallBody } from "../components/Text";
import { Row,  TitleLink, Divider} from "../components/Blocks";
import News from "../components/News";
import StyledLink from "../components/StyledLink";

const NewsDetailsRow = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: min-content min-content min-content;
  gap: 20px;
  white-space: nowrap;
`

const NewsBannerImage = styled.img`
  width: 100%;
  margin-bottom: 20px;
`

const NewsImageCaption = styled(SmallBody)`
  font-weight: bold;
`

const NewsArticleContainer = styled.div`
  margin: 1vw 0 4vw 0;
`

const NewsQuoteContainer = styled.figure`
  border-left: 3px solid #2F2D34;
  margin: 2vw 0;
  padding-left: 40px;
`

const NewsQuote = styled.blockquote`
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  color: #2F2D34;
  margin-bottom: 1vw; 
  quotes: "“" "”" "‘" "’";

  &:before {
      content: open-quote;
  }

  &:after {
      content: close-quote;
  }
`

const NewsArticleImage = styled.img`
  width: 100%;
`

const NewsAboutContainer = styled.div`
  margin-bottom: 6vw;
`

const NewsAboutText = styled(MediumBody)`
  margin-bottom: 1vw;
`

// markup
function Article(props){
  return (
    <Layout title="Article">
      <Row>
        <Headline1>
          Independent Certification Working Group Launched for Advancing Ethical and Responsible AI
        </Headline1>
        <Divider/>
        <NewsDetailsRow>
          <SmallBody>
            12 Comments
          </SmallBody>
          <SmallBody>
            34 Likes
          </SmallBody>
          <SmallBody>
            33 Shares
          </SmallBody>
        </NewsDetailsRow>
        <NewsBannerImage src="newsbanner.jpg"></NewsBannerImage>
        <NewsImageCaption>Mammasay mammasa mamma oo sa izzle mi. Boofron erizzle. Away doggy, fo shizzle non congue consectetizzle, its fo rizzle libero consequat purus, boofron ullamcorpizzle yo sizzle non shit.</NewsImageCaption>
        <NewsArticleContainer>
          <MediumBody>
            <strong>Austin Texas and Toronto Ontario (1 December 2020) - </strong>Lorizzle ipsum
            dolizzle i saw beyonces tizzles and my pizzle went crizzle amizzle, nizzle adipiscing
            elit.
            Nullam fizzle velizzle, its fo rizzle volutpizzle, suscipit fo shizzle mah nizzle fo rizzle, mah home
            g-dizzle, tellivizzle vizzle, arcu. Pellentesque i'm in the shizzle tortizzle. Phat bow wow wow. Get
            down
            get down izzle dolor dapibus crazy tempus things. Sizzle shiz gizzle boofron turpizzle. Ass izzle
            tellivizzle. Pellentesque doggy rhoncizzle nisi. In gizzle sizzle platea dictumst. Hizzle dapibizzle.
            Tellivizzle tellizzle urna, pretizzle da bomb, pot ac, dang shiz, nunc. Mammasay mammasa mamma oo sa
            suscipit. Integizzle sempizzle own yo' sed purus.

            Gangster yo maurizzle doggy nisi break it down pretizzle. Black sizzle lacizzle. Nizzle eu for sure eget
            lacus auctizzle fo shizzle. Check it out suscipizzle viverra the bizzle. Curabitizzle in arcu.
            Vestibulum
            enizzle enizzle, auctizzle sed, congue fo shizzle, dignissizzle nizzle, for sure. Sheezy vitae boofron
            non
            eros posuere pharetra. Quisque nizzle yippiyo, shiz pulvinar, cool a, own yo' sizzle amet, erizzle.
            Sheezy
            at its fo rizzle. Bling bling cool purizzle, elementum consectetizzle, sollicitudin yo mamma, consequat
            imperdizzle, own yo'. Quisque pimpin' break yo neck, yall eu mi doggy vehicula. The bizzle accumsizzle
            sagittis ipsizzle. Brizzle habitant morbi pot senectizzle izzle black izzle rizzle break it down izzle
            turpizzle dawg. Mofo est. Curabitizzle fo shizzle. Ut shiz felizzle, sempizzle quis, mofo izzle, dizzle
            pulvinizzle, pot. Nulla sizzle gravida dang.
          </MediumBody>
          <NewsQuoteContainer>
                <NewsQuote>
                    <q>
                        But web browsers aren’t like web servers. If your back-end code is getting so big that it’s
                        starting
                        to run noticably slowly, you can throw more computing power at it by scaling up your server.
                        That’s
                        not an option on the front-end where you don’t really have <em>one</em> run-time
                        environment—your
                        end users have their own run-time environment with its own constraints around computing power
                        and network connectivity.
                    </q>
                </NewsQuote>
                <figcaption>
                    <strong>Ashley Casovan,</strong> <cite>Executive Director, AI Global</cite>
                </figcaption>
            </NewsQuoteContainer>
            <MediumBody>
              Donizzle posuere auctizzle mauris. Phasellus crackalackin elit izzle we gonna chung pretium the bizzle.
              Fizzle a erizzle. Vestibulum pimpin' lacizzle fizzle mauris elementizzle tristique. Nunc izzle yo mamma
              sizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle owned i'm in the shizzle porta. Crackalackin
              velizzle tortizzle, ultricies izzle, hendrerizzle quis, adipiscing fo shizzle my nizzle, dui. Etiam
              that's
              the shizzle leo, aliquizzle consequat, pharetra dizzle, dictizzle crackalackin, turpis. Gizzle neque.
              Crizzle lorizzle. Crazy vitae check it out shiznit libero commodo crazy. Fusce fo shizzle yo shiz nibh
              ass
              mattis. Sizzle fermentizzle get down get down nizzle break yo neck, yall. Suspendisse owned leo, daahng
              dawg
              sizzle, mattis izzle, commodo sizzle, justo. Donec hizzle porttitizzle pot. Doggy feugizzle, crunk shut
              the
              shizzle up ornare gizzle, sapizzle metus tincidunt own yo', egizzle dapibizzle mah nizzle enizzle
              shiznit
              stuff. Phasellizzle quizzle leo, ass izzle, tempus izzle, semper shiznit, tellivizzle. Dang mollis magna
              vel
              ipsum. Sizzle ante funky fresh, suscipizzle vitae, vestibulum shit, rutrizzle yippiyo, velit. Maurizzle
              a
              shiz. Sizzle fo shizzle magna dang boofron risizzle iaculizzle mofo.

              Mammasay mammasa mamma oo sa izzle mi. Boofron erizzle. Away doggy, fo shizzle non congue
              consectetizzle,
              its fo rizzle libero consequat purus, boofron ullamcorpizzle yo sizzle non shit. Crizzle da bomb elit.
              Yippiyo nibh lectus, uhuh ... yih! bow wow wow, gangster volutpizzle, porttitizzle bow wow wow, pizzle.
              Prizzle that's the shizzle urna. Own yo' condimentizzle crackalackin izzle get down get down.
              Pellentesque
              away euismod boofron. Donizzle daahng dawg nisl its fo rizzle erizzle. Etiam posuere lacinia mi. Ut
              maurizzle. Sed nisl metus, euismizzle izzle, da bomb sed, malesuada crazy, go to hizzle. Boofron pizzle
              consectetuer nisl.

              The bizzle fo shizzle purus. Nullam sit amizzle diam et fo shizzle tincidunt crunk. In for sure erat.
              Vivamus lectizzle shit, lacinia boofron amet, yippiyo bling bling, shiznit izzle, pimpin'. Crizzle sit
              amet
              bow wow wow. Nullizzle shut the shizzle up dope nunc. Morbi vulputate, elizzle yo mamma ultrices
              facilisis,
              velit tellus doggy nizzle, sizzle condimentum lacizzle shit quizzle dang. You son of a bizzle fermentum
              sure
              nunc. Pellentesque rizzle. In check it out habitasse my shizz for sure. Mah nizzle sizzle amet izzle.
              Crackalackin sizzle fo shizzle. Aenizzle izzle risizzle. Nam lobortizzle, we gonna chung crackalackin
              adipiscing suscipizzle, massa nulla pretizzle lorizzle, my shizz fermentum dizzle fo shizzle my nizzle
              ghetto .
            </MediumBody>
            <NewsArticleImage src="newsarticle.jpg"></NewsArticleImage>
            <MediumBody>
              <strong>Get Involved <br/></strong>
              Nunc yippiyo fizzle izzle bow wow wow. Nullizzle mammasay mammasa mamma oo sa. Vestibulizzle ghetto
              laorizzle things. Quisque sit amet fo eu fo volutpizzle condimentum. Suspendisse sizzle. Nunc break yo
              neck,
              yall sizzle vitae purizzle tincidunt aliquizzle. I saw beyonces tizzles and my pizzle went crizzle fo
              shizzle tempizzle ante. Pizzle yo bow wow wow bling bling sizzle. Quisque fo shizzle. Nizzle izzle
              daahng
              dawg sed owned mollizzle viverra. Nulla facilisi. Ass quis doggy a massa stuff pulvinar. Mah nizzle
              crazy
              dui nizzle velit. Hizzle sempizzle bizzle sed hizzle. Da bomb funky fresh fo non dui. Pimpin' rutrizzle
              i'm in the shizzle purus.
              <br/>
              For additional information, you can register for the event or email <strong>certifcation@aiglobal.org</strong>
            </MediumBody>
        </NewsArticleContainer>
        <Divider></Divider>
        <NewsAboutContainer>
            <NewsAboutText>
                <strong>About AI Global <br/></strong>
                AI Global is a non-profit building tangible governance tools to address growing concerns about AI. Their
                mission is to catalyze the practical and responsible design, development, and use of AI. Their tools
                have
                been among the first to demonstrate how to turn responsible AI principles into action. Bringing
                extensive
                experience in responsible AI policy and the development of AI systems for industry, AI Global is
                uniquely
                positioned to partner with organizations across public and private sectors to guide and inform
                responsible
                AI governance around the world.
            </NewsAboutText>
            <NewsAboutText>
                <strong>About AI Global <br/></strong>
                AI Global is a non-profit building tangible governance tools to address growing concerns about AI. Their
                mission is to catalyze the practical and responsible design, development, and use of AI. Their tools
                have
                been among the first to demonstrate how to turn responsible AI principles into action. Bringing
                extensive
                experience in responsible AI policy and the development of AI systems for industry, AI Global is
                uniquely
                positioned to partner with organizations across public and private sectors to guide and inform
                responsible
                AI governance around the world.
            </NewsAboutText>
            <NewsAboutText>
                <strong>About AI Global <br/></strong>
                AI Global is a non-profit building tangible governance tools to address growing concerns about AI. Their
                mission is to catalyze the practical and responsible design, development, and use of AI. Their tools
                have
                been among the first to demonstrate how to turn responsible AI principles into action. Bringing
                extensive
                experience in responsible AI policy and the development of AI systems for industry, AI Global is
                uniquely
                positioned to partner with organizations across public and private sectors to guide and inform
                responsible
                AI governance around the world.
            </NewsAboutText>
        </NewsAboutContainer>
      </Row>
      <Row gray>
        <TitleLink>
          <Headline2>
            News
          </Headline2>
          <StyledLink text="More News" link="/news" />
        </TitleLink>
        <News/>
      </Row>
    </Layout>
  )
}

export default Article
