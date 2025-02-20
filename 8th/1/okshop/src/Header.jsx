import React from 'react';
import { Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2>NavBar</h2>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/us"}>Us</Link>
                <Link to={"/user"}>User</Link>
                <Link to={"/posts"}>Posts</Link>
            </nav>
            <h1>uwu baka</h1>
        </div>
    );
};

export default Header;