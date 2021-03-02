import React from 'react';
import { Button, Card } from 'react-bootstrap';

class Box extends React.Component {
    
    pageTransition(link) {
        
        if (link === "current") {
            
            window.location.href = "";
        } else {
            
            window.open( link, '_blank');
        }
        
    }
    
    render() {
        return(
            <div className="border">
                <Card >
                {/* <Card style={{ width: '21.5rem' }}> */}
                    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/img/${this.props.img}`} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <span>フロントエンド</span>
                        <Card.Text>{this.props.front}</Card.Text>
                        <span>バックエンド</span>
                        <Card.Text>{this.props.back}</Card.Text>
                        <Card.Text>{this.props.link}</Card.Text>
                    </Card.Body>
                </Card>
                <div>
                    <Button variant="primary" style={{ width: '50%'}} onClick={() => this.pageTransition(`${this.props.siteLink}`)}>サイトへ移動</Button>
                    <Button variant="info" style={{ width: '50%' }} onClick={() => this.pageTransition(`${this.props.gitLink}`)}>githubへ移動</Button>
                </div>
            </div>
        );
    }
}

export default Box;