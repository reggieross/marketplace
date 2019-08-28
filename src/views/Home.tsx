import React from 'react';
import Chrome from "../modules/chrome/Chrome";
import {Content, ArticleSection, Card, Row, Header} from "@rbross07/component-lib";

export class Home extends React.Component<{}> {
  render() {
    return (
      <Chrome selectedId={''}>
        <Row colSpan={12} offset={0}>
          <div />
        </Row>
        <Row colSpan={10} offset={2}>
          <Card
            size={"responsive"}
            href={'#'}
            backgroundImage={'https://content.asos-media.com/-/media/images/articles/women/2019/05/16-thurs/asos-mag-mabel/style-feed-article-asos-mag-mabel-03.jpg?h=1110&w=870&la=en-US&hash=1795FFCA4244F6EEA1172C359AC93F51'}
          >
            {{
              content: <Content>Some content</Content>,
              header:  <Header>Featured Category</Header>
            }}
          </Card>
          <Card
            size={"responsive"}
            href={'#'}
            backgroundImage={'https://content.asos-media.com/-/media/images/articles/women/2019/05/16-thurs/asos-mag-mabel/style-feed-article-asos-mag-mabel-03.jpg?h=1110&w=870&la=en-US&hash=1795FFCA4244F6EEA1172C359AC93F51'}
          >
            {{
              content: <Content>Some content</Content>,
              header:  <Header>Featured Category</Header>
            }}
          </Card>
          <Card
            size={"responsive"}
            href={'#'}
            backgroundImage={'https://content.asos-media.com/-/media/images/articles/women/2019/05/16-thurs/asos-mag-mabel/style-feed-article-asos-mag-mabel-01.jpg?h=1110&w=870&la=en-US&hash=7CA27C3A8D040F9627A49C6F11AFBB3E'}
          >
            {{
              content: <Content>Some content</Content>,
              header:  <Header>Featured Category</Header>
            }}
          </Card>
        </Row>
        <Row colSpan={12} offset={0}>
          <ArticleSection />
        </Row>
      </Chrome>
    )
  }
}