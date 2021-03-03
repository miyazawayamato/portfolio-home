import React from 'react';
import Box from './card.js';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

class Main extends React.Component {
    
    render() {
        return(
            <Container>
                <Row className="justify-content-md-center">
                    <Col className="col-md-4">
                        <Box 
                            img="meadow-hogweed-4530921_640.jpg"
                            title="ポートフォリオ紹介サイト" 
                            front="html/css,reatct,react-bootstrap" 
                            back="なし"
                            siteLink="current"
                            gitLink="https://github.com/miyazawayamato/portfolio-home"
                            link={<Link to="/indiv/0">詳しい説明</Link>}
                        />
                    </Col>
                    <Col className="col-md-4">
                        <Box 
                            img="meadow-hogweed-4530921_640.jpg"
                            title="qiita風サイト" 
                            front="html/css,bootstrap,jquery" 
                            back="php,laravel"
                            siteLink="http://35.72.100.242/site/laravel/public/index.php"
                            gitLink="https://github.com/miyazawayamato/laravel"
                            link={<Link to="/indiv/1">詳しい説明</Link>}
                        />
                    </Col>
                    <Col className="col-md-4">
                        <Box 
                            img="meadow-hogweed-4530921_640.jpg"
                            title="簡易cms（ブログ）"
                            front="html/css,scss,bootstrap,jquery" 
                            back="php,laravel"
                            siteLink="https://dokusika.deca.jp/site/portfolio-blog/public/"
                            gitLink="https://github.com/miyazawayamato/portfolio-blog/tree/master"
                            link={<Link to="/indiv/2">詳しい説明</Link>}
                        />
                    </Col>
                    <Col >
                    </Col>
                    <Col >
                    </Col>
                    <Col >
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Main;