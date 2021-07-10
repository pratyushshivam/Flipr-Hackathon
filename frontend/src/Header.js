import React from 'react';
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu"
import { Avatar, IconButton } from "@material-ui/core";
// import weMail_logo from "../img/wemail.jpg";
import weMail_logo2 from "./img/WeMailLogo7.png";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className="header">

            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src={weMail_logo2} />
                <h2>WeMail</h2>
            </div>

            <div className="header__middle">
                <IconButton>
                    <SearchIcon />
                </IconButton>

                <input placeholder="Search mail" type="text" />
                <IconButton>
                    <ArrowDropDownIcon classNmae="header__inputCaret" />
                </IconButton>

            </div>

            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar />
            </div>
        </div>
    )
}

export default Header