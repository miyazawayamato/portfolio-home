import React from 'react';
import { Link, useParams } from "react-router-dom";
import objs from './contents.js';
import { Image } from 'react-bootstrap';


const Indiv = () => {
    
    // パラメーター受け取り
    const location = useParams();
    
    // 多次元連想配列をからパラ番目を選択
    let obj ;
    switch (location.id) {
        case '0':
            obj = objs[0];
            break;
        case '1':
            obj = objs[1];
            break;
        case '2':
            obj = objs[2];
            break;
    }
    
    
    return (
        <div className="mx-auto" style={{ width: '75%' }} >
            <Link to="/">戻る</Link>
            <div className="py-5 border-bottom indiv-text d-md-flex" style={{marginBottom: '70px'}}>
                <div className="half">
                    <Image src={`${process.env.PUBLIC_URL}/img/${obj.img1}`} fluid />
                </div>
                <p className="ml-md-5 m-0 half">{obj.text1}</p>
            </div>
            <div className="py-5 border-bottom indiv-text d-md-flex" style={{marginBottom: '70px'}}>
                <div className="half">
                    <Image src={`${process.env.PUBLIC_URL}/img/${obj.img2}`} fluid />
                </div>
                <p className="ml-md-5 m-0 half">{obj.text2}</p>
            </div>
            <div className="py-5 border-bottom indiv-text d-md-flex"  style={{marginBottom: '70px'}}>
                <div className="half">
                    <Image src={`${process.env.PUBLIC_URL}/img/${obj.img3}`} fluid />
                </div>
                <p className="ml-md-5 m-0 half">{obj.text3}</p>
            </div>
            <Link to="/">home</Link>
        </div>
        
    );
}

export default Indiv;