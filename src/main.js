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
                            img="noimage.jpg"
                            title="ポートフォリオ紹介サイト" 
                            front="html/css,reatct,react-bootstrap" 
                            back="なし"
                            text="現在のページです"
                            siteLink="current"
                            gitLink="https://github.com/miyazawayamato/portfolio-home"
                            link={<Link to="/indiv/0">詳しい説明</Link>}
                        />
                    </Col>
                    <Col className="col-lg-4 col-md-6 col-12 mt-3">
                        <Box 
                            img="qiitatop.png"
                            title="qiita風サイト" 
                            front="html/css,bootstrap,jquery" 
                            back="php,laravel,(aws,docker,circleci)"
                            text="一番力を入れた制作物ですです。dockerで開発し、cicleciで自動テスト、成功したらAWSにデプロイ。"
                            siteLink="http://35.72.100.242/site/laravel/public/index.php"
                            gitLink="https://github.com/miyazawayamato/laravel"
                            link={<Link to="/indiv/1">詳しい説明</Link>}
                        />
                    </Col>
                    <Col className="col-lg-4 col-md-6 col-12 mt-3">
                        <Box 
                            img="blogtop.png"
                            title="簡易cms（ブログ）"
                            front="html/css,scss,javascript" 
                            back="php"
                            text="フレームワークやライブラリは未使用で、言語の理解を深めるために目的で制作しました。"
                            siteLink="https://dokusika.deca.jp/site/portfolio-blog/public/"
                            gitLink="https://github.com/miyazawayamato/portfolio-blog/tree/master"
                            link={<Link to="/indiv/2">詳しい説明</Link>}
                        />
                    </Col>
                    <Col className="col-lg-4 col-md-6 col-12 mt-3">
                        <Box 
                            img="rpgtop.png"
                            title="ロールプレイングゲーム(rpg)"
                            front="html/css,javascript" 
                            back="php"
                            text="phpとjavascriptで制作したrpgです。マップとキャラはjavascriptで、バトルのテキストはphp側で処理をしています。"
                            siteLink="https://dokusika.deca.jp/game/rpg/"
                            gitLink="https://github.com/miyazawayamato/rpg"
                            link={<Link to="/indiv/3">詳しい説明</Link>}
                        />
                    </Col>
                    <Col className="col-lg-4 col-md-6 col-12 mt-3">
                        <Box 
                            img="apitop.png"
                            title="お問い合わせフォーム、api"
                            front="html/css,react" 
                            back="なし"
                            text="laravelをapiサーバーとして利用して、外部から叩きました。"
                            siteLink="https://miyazawayamato.github.io/react-api/"
                            gitLink="https://github.com/miyazawayamato/react-api"
                            link={<Link to="/indiv/4">詳しい説明</Link>}
                        />
                    </Col>
                    <Col className="col-lg-4 col-md-6 col-12 mt-3">
                        <Box 
                            img="noimage.jpg"
                            title="laravel×React(開発中)"
                            front="react" 
                            back="laravel"
                            text="開発中です"
                            siteLink="current"
                            gitLink="https://github.com/miyazawayamato"
                            link={<Link to="/indiv/5">詳しい説明</Link>}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Main;