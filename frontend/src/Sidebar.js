import React from 'react';
import "./Sidebar.css";
import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import SidebarOption from "./SidebarOption";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import DuoIcon from "@material-ui/icons/Duo";
import { useSelector } from 'react-redux'



function Sidebar({ handleClickOpen, handleClose }) {
    const appAuth = useSelector(({ auth }) => auth)
    return (
        <div className="sidebar">
            <Button
                onClick={() => {
                    document.getElementById('datagrid').classList.toggle("mystyle")
                }}
                startIcon={<AddIcon fontSize="large" />}
                className="sidebar__compose">
                on
                Compose
            </Button>


            <SidebarOption Icon={InboxIcon} title="Scheduled Mails" number={appAuth.scheduledData.length} selected={true} />
            <SidebarOption Icon={AccessTimeIcon} title="History" number={45} />

            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>

                </div>

            </div>
        </div>

    );
}
export default Sidebar