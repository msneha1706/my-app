import React from "react";
import "./Logo.css";

function Logo() {
    return (
        <div className="logo">
            <div className="logoName">
                <h1>Sneha</h1>
            </div>

            <div className="logoLink">
                <div className="logoImg">
                    <div>
                        <img src="https://www.shutterstock.com/image-vector/three-lines-show-hidden-objects-260nw-1464146915.jpg" />
                    </div>
                    {/* <div>
                        <img src="https://previews.123rf.com/images/fokaspokas/fokaspokas1809/fokaspokas180900164/108564673-hamburger-menu-web-icon-white-icon-with-shadow-on-transparent-background.jpg" />
                    </div> */}
                </div>
                <ul>
                    <li>
                        <a href="/about">ABout</a>
                    </li>
                    <li>
                        <a href="/about">ABout</a>
                    </li>
                    <li>
                        <a href="/about">ABout</a>
                    </li>
                    <li>
                        <a href="/about">ABout</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Logo;
