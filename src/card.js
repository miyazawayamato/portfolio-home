import React from 'react';
import { Button, Card } from 'react-bootstrap';
import {useSpring, animated} from 'react-spring';

const Box = (props) => {
    
    const anime = useSpring({
        to: {opacity: 1},
        from: {opacity: 0}
    })
    
    const pageTransition = (link) => {
        if (link === "current") {
            window.location.href = "";
        } else {
            window.open( link, '_blank');
        }
    }
    
    return(
        <animated.div  style={anime} >
            <Card border="dark">
                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/img/${props.img}`} />
                <Card.Body className="brow">
                    <Card.Title>{props.title}</Card.Title>
                    <span className="text-info">フロントエンド</span>
                    <Card.Text className="mb-0 text-secondary text-truncate">{props.front}</Card.Text>
                    <span className="text-info">バックエンド</span>
                    <Card.Text className="mb-0 text-secondary text-truncate">{props.back}</Card.Text>
                    {/* <span className="text-info">説明</span>
                    <Card.Text className="mb-0 text-secondary  text-truncate">{props.text}</Card.Text> */}
                    <Card.Text>{props.link}</Card.Text>
                </Card.Body>
                <div >
                    <Button variant="primary" style={{ width: '50%'}} onClick={() => pageTransition(`${props.siteLink}`)}>サイトへ</Button>
                    <Button variant="info" style={{ width: '50%' }} onClick={() => pageTransition(`${props.gitLink}`)}>githubへ</Button>
                </div>
            </Card>
        </animated.div>
    );
}

export default Box;