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
                            img="noimage.jpg"
                            title="ポートフォリオ紹介サイト" 
                            front="html/css,reatct,react-bootstrap" 
                            back="なし"
                            text="現在のページです"
                            siteLink="current"
                            gitLink="https://github.com/miyazawayamato/portfolio-home"
                            link={<Link to="/indiv/0">詳しく</Link>}
                        />
                    </Col>
                    <Col className="col-md-4">
                        <Box 
                            img="qiitatop.png"
                            title="qiita風サイト" 
                            front="html/css,bootstrap,jquery" 
                            back="php,laravel"
                            text="一番力を入れた制作物ですです。dockerで開発し、cicleciで自動テスト、成功したらAWSにデプロイ。"
                            siteLink="http://35.72.100.242/site/laravel/public/index.php"
                            gitLink="https://github.com/miyazawayamato/laravel"
                            link={<Link to="/indiv/1">詳しく</Link>}
                        />
                    </Col>
                    <Col className="col-md-4">
                        <Box 
                            img="blogtop.png"
                            title="簡易cms（ブログ）"
                            front="html/css,scss,javascript" 
                            back="php"
                            text="フレームワークやライブラリは未使用で、言語の理解を深めるために目的で制作しました。"
                            siteLink="https://dokusika.deca.jp/site/portfolio-blog/public/"
                            gitLink="https://github.com/miyazawayamato/portfolio-blog/tree/master"
                            link={<Link to="/indiv/2">詳しく</Link>}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Main;