import React from 'react';
import { Link } from "react-router-dom";

class Header extends React.Component {
    
    render() {
        return(
            <header className="mt-5 text-center" style={{ height: '100px' }}>
                <h1>ポートフォリオ</h1>
            </header>
        );
    }
}

export default Header;