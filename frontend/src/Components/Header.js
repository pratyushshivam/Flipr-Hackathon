import React from 'react';
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu"
import { IconButton } from "@material-ui/core";
import weMail_logo from "../img/wemail.jpg";
import weMail_logo2 from "../img/WeMailLogo7.png";
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Header() {
    return (
        <div className="header">
            
            <div className="header__left">
                <IconButton>
                    <MenuIcon/>
                    
                </IconButton>
                <img src={weMail_logo2}/>
            </div> 
            <h2>WeMail</h2>
            <div className="header__middle">
                <SearchIcon/>
                {/* <ArrowDropDownIcon classNmae="header__inputCaret"> */}
            </div>

            <div className="header__right">

            </div>
        </div>
    )
}

export default Header
