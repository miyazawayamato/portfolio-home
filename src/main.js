import React from 'react';
import Box from './card.js';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

class Main extends React.Component {
    
    render() {
        return(
            <Container>
                <Row className=" row-height">
                    <Col className="col-lg-4 col-md-6 col-12 mt-3">
                        <Box 
                            img="qiitatop.png"
                            title="qiita風サイト" 
                            front="html/css,bootstrap,jquery" 
                            back="php,laravel,(aws,docker,circleci)"
                            siteLink="http://35.72.100.242/site/laravel/public/index.php"
                            gitLink="https://github.com/miyazawayamato/laravel"
                            link={<Link to="/indiv/0">詳しい説明</Link>}
                        />
                    </Col>
                    <Col className="col-lg-4 col-md-6 col-12 mt-3">
                        <Box 
                            img="spring1.png"
                            title="在庫管理システム"
                            front="react,typescript" 
                            back="java,springboot,(heroku)"
                            text=""
                            siteLink="https://miyazawayamato.github.io/front/"
                            gitLink="https://github.com/miyazawayamato/spring-boot"
                            link={<Link to="/indiv/1">詳しい説明</Link>}
                        />
                    </Col>
                    <Col className="col-lg-4 col-md-6 col-12 mt-3">
                        <Box 
                            img="todotop.png"
                            title="予定表カレンダー" 
                            front="vue" 
                            back="python,(aws)"
                            siteLink="https://miyazawayamato.github.io/vue-todo/dist/index.html#/"
                            gitLink="https://github.com/miyazawayamato/vue-todo"
                            link={<Link to="/indiv/2">詳しい説明</Link>}
                        />
                    </Col>
                    <Col className="col-lg-4 col-md-6 col-12 mt-3">
                        <Box 
                            img="covidtop.png"
                            title="コロナ人数確認サイト、bot"
                            front="react,scss" 
                            back="laravel,(heroku)"
                            text="コロナウイルスの状況確認とTwitterBotです"
                            siteLink="https://glacial-sierra-22254.herokuapp.com/"
                            gitLink="https://github.com/miyazawayamato/laravel-react"
                            link={<Link to="/indiv/3">詳しい説明</Link>}
                        />
                    </Col>
                    <Col className="col-lg-4 col-md-6 col-12 mt-3">
                        <Box 
                            img="rpgtop.png"
                            title="ロールプレイングゲーム(rpg)"
                            front="html/css,javascript" 
                            back="php"
                            siteLink="http://yamatosite.php.xdomain.jp/game/rpg/index.html"
                            gitLink="https://github.com/miyazawayamato/rpg"
                            link={<Link to="/indiv/4">詳しい説明</Link>}
                        />
                    </Col>
                    <Col className="col-lg-4 col-md-6 col-12 mt-3">
                        <Box 
                            img="blogtop.png"
                            title="簡易cms（ブログ）"
                            front="html/css,scss,javascript" 
                            back="php"
                            siteLink="http://yamatosite.php.xdomain.jp/blog/portfolio-blog/public/index.html"
                            gitLink="https://github.com/miyazawayamato/portfolio-blog/tree/master"
                            //数字注意
                            link={<Link to="/indiv/5">詳しい説明</Link>}
                        />
                    </Col>
                    {/* <Col className="col-lg-4 col-md-6 col-12 mt-3">
                        <Box 
                            img="hometop.png"
                            title="ポートフォリオ紹介サイト" 
                            front="html/css,reatct,react-bootstrap" 
                            back="なし"
                            siteLink="current"
                            gitLink="https://github.com/miyazawayamato/portfolio-home"
                            link={<Link to="/indiv/0">詳しい説明</Link>}
                        />
                    </Col> */}
                </Row>
            </Container>
        );
    }
}

export default Main;