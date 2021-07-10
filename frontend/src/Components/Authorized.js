import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
<<<<<<< HEAD:src/Authorized.js
import axios from 'axios'
import './assets/css/Authorized.css'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Header from './Header'
import Sidebar from './Sidebar'
import { useDispatch, } from 'react-redux'
import { scheduledDataHandler } from './redux/actions/actions';
import SidebarComponent from './SidebarComponent';
let historyConst = []
=======
import Header from './Header'
>>>>>>> aece4939710b8bd0790398d12144749862ef1018:src/Components/Authorized.js
function Authorized() {

    const API = 'http://localhost:8080/api/v1/data'
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const [to, setTo] = React.useState('')
    const [subject, setSubject] = React.useState('')
    const [text, setText] = React.useState('')
    const [emails, setEmails] = React.useState([])
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [scheduledDate, setSheduledDate] = React.useState(0)
    const [currentDate, setCurrentDate] = React.useState(Date.now())
    const [mailToBeSent, setMailToBeSent] = React.useState(false)
    const [history, setHistory] = React.useState([])


    const fetchData = () => {
        axios.get('http://localhost:8080/api/v1/emails').then((res) => {
            console.log(res.data)
            setEmails(res.data)
        }).catch((err) => {
            console.log(err)
        })
        console.log(to)
        console.log(subject)
        console.log(text)
        axios.post(API, {
            to: to,
            from: 'shashankthakur232@gmail.com',
            subject: subject,
            text: text
        }).then((res) => {
            console.log(res)
        })

    }

    const toHandler = (e) => {
        setTo(e.target.value)

    }
    const subjectHandler = (e) => {
        setSubject(e.target.value)

    }
    const textHandler = (e) => {
        setText(e.target.value)

    }
    const handleClickOpen = () => {
        axios.get('http://localhost:8080/api/v1/emails').then((res) => {
            console.log(res.data)
            setEmails(res.data)
            setOpen(true);
        }).catch((err) => {
            console.log(err)
        })

    };

    const handleClose = () => {
        setOpen(false);
    };



    const handleClickOpen2 = () => {
        setOpen2(true);
    };

    const handleClose2 = () => {
        setOpen2(false);
    };
    const handleClickOpen3 = () => {
        setOpen3(true);
    };

    const handleClose3 = () => {
        setOpen3(false);
    };
    const appAuth = useSelector(({ auth }) => auth)

    const datePickerHandler = (e) => {
        console.log("Selected Date", e.target.valueAsNumber)
        console.log("Current Date", Date.now())
        setSheduledDate(e.target.valueAsNumber)
        if (e.timeStamp === Date.now()) {
            console.log("API SENT SUCCESSFULLY")
        }
        if (e.target.valueAsNumber > Date.now()) {
            console.log("Selected Date is greater")
        }
        if (e.target.valueAsNumber < Date.now()) {
            console.log("Current Date is greater")
        }
    }
    const dateChecker = () => {

    }
    const dispatch = useDispatch()

    const dateCheckerSch = () => {
        historyConst.push({
            to: to,
            from: 'itzmepratyush@gmail.com',
            subject: subject,
            text: text,
            date: scheduledDate
        })
        console.log(historyConst)
        setOpen2(false);
        dispatch(scheduledDataHandler(historyConst))

        const interval = setInterval(() => {
            if (Date.now() > scheduledDate) {
                console.log("Sending Mail")
                console.log("Mail Sent")

                // api call
                axios.post(API, {
                    to: to,
                    from: 'itzmepratyush@gmail.com',
                    subject: subject,
                    text: text
                }).then((res) => {
                    console.log(res)
                })

                clearInterval(interval)
            }
            else {
                console.log("Time yet to come")
            }
        }, 3600)



    }

    return (
<<<<<<< HEAD:src/Authorized.js
        <div className='App authorized'>
            <Header />
            {/* <Sidebar /> */}
            <div >
                {/* <Button>On Compose</Button> */}
                <Button onClick={handleClickOpen} >History</Button>
                <Button onClick={handleClickOpen3} >Compose</Button>
            </div>

            <Grid container >
                {/* <Sidebar /> */}

                <div className="emailsHistory scheduledTable">
                    <Table border="0" cellSpacing="3">

                        <TableHead>
                            <TableRow>
                                <TableCell class="tg-0lax"> <Typography variant="h7">Sl No.</Typography></TableCell>
                                <TableCell class="tg-0lax"><Typography variant="h7">To</Typography></TableCell>
                                <TableCell class="tg-0lax"><Typography variant="h7">From</Typography></TableCell>
                                <TableCell class="tg-0lax"><Typography variant="h7">Subject</Typography></TableCell>
                                <TableCell class="tg-0lax"><Typography variant="h7">Message</Typography></TableCell>
                                <TableCell class="tg-0lax"><Typography variant="h7">Date</Typography></TableCell>
                            
                                

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                appAuth.scheduledData.map((data, num) => (
                                    <TableRow>
                                        <TableCell >{num + 1}</TableCell>
                                        <TableCell >{data.to}</TableCell>
                                        <TableCell >{data.from}</TableCell>
                                        <TableCell >{data.subject}</TableCell>
                                        <TableCell >{data.text}</TableCell>
                                        <TableCell >{new Date(data.date).toDateString()}</TableCell>
                                        {/* <td> <DeleteIcon /></td> */}
                                    </TableRow>

                                ))
                            }


                        </TableBody>
                    </Table>


                </div>
            </Grid>

            {/* <Sidebar history={emails} /> */}
            <Dialog
                className="dialogBoxAuth"
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Emails Sent"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <div>
                            <Paper className="paper_auth">
                                <Grid className="grid" container  >
                                    <div className="emailsHistory">
                                        <Table border="0" cellSpacing="3">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell class="tg-0lax"> <Typography variant="h7">Sl No.</Typography></TableCell>
                                                    <TableCell class="tg-0lax"><Typography variant="h7">To</Typography></TableCell>
                                                    <TableCell class="tg-0lax"><Typography variant="h7">From</Typography></TableCell>
                                                    <TableCell class="tg-0lax"><Typography variant="h7">Subject</Typography></TableCell>
                                                    <TableCell class="tg-0lax"><Typography variant="h7">Message</Typography></TableCell>
                                                    <TableCell class="tg-0lax"><Typography variant="h7">Date</Typography></TableCell>
                                
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {
                                                    emails.map((data, num) => (
                                                        <TableRow>
                                                            <TableCell >{num + 1}</TableCell>
                                                            <TableCell >{data.to}</TableCell>
                                                            <TableCell >{data.from}</TableCell>
                                                            <TableCell >{data.subject}</TableCell>
                                                            <TableCell >{data.text}</TableCell>
                                                            <TableCell >{data.endTime}</TableCell>
                                                            
                                                            {/* <td> <DeleteIcon /></td> */}
                                                        </TableRow>

                                                    ))
                                                }


                                            </TableBody>
                                        </Table>


                                    </div>

                                </Grid>

                            </Paper>

                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>


            <div className="special">
                <Dialog fullWidth='lg' maxWidth='lg' className="composeDialg" open={open2} onClose={handleClose2} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Schedule a Mail</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Schedule a Mail by selecting the date and time and we will automatically send it!
                        </DialogContentText>
                        <TextField
                            onChange={datePickerHandler}
                            id="datetime-local"
                            label="Next appointment"
                            type="datetime-local"
                            defaultValue="2021-06-26T10:30"


                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose2} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={dateCheckerSch} color="primary">
                            Schedule
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>



            <Dialog open={open3} onClose={handleClose3} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Compose</DialogTitle>
                <DialogContent>
                    <Grid id="datagrid" className="gridParent" >
                        <Paper className="textGrid" container >
                            <Typography className="space-below" variant="h6">Send a Mail</Typography>

                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="To"
                                type="text"
                                onChange={toHandler}
                                fullWidth
                                variant="outlined"
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Subject"
                                type="text"
                                onChange={subjectHandler}
                                fullWidth
                                variant="outlined"
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"

                                className="messageInput"
                                label="Message"
                                type="text"
                                onChange={textHandler}
                                fullWidth
                                variant="outlined"
                            />

                            <Grid className="flex-end" > <Button className="space" color="primary" variant="outlined" onClick={fetchData} >Send Mail</Button>
                                <Button color="primary" variant="outlined" onClick={handleClickOpen2} >Schedule a Mail</Button>
                            </Grid>
                        </Paper>



                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose3} color="primary">
                        Cancel
                    </Button>

                </DialogActions>
            </Dialog>
            {/* <Button className="historyButton" color="primary" variant="outlined" onClick={handleClickOpen} >Show History</Button> */}




=======
        <div>
            <Header/>
>>>>>>> aece4939710b8bd0790398d12144749862ef1018:src/Components/Authorized.js
        </div>
    );
}

export default Authorized
