
import React, { useEffect } from 'react'; 
import { styled } from "@mui/material/styles";
import {styles} from './styles';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Notification = (props) => {
    const [open, setOpen] = React.useState(false);
    const {classes} = props;
    
    useEffect(() => {
        if (props.message) {
            setOpen(true);
        }
        
    }, [props.message]);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            setOpen (false);
        }
    }
    
    return (
        <Snackbar open={open} autoHideDuration={props.severity === 'error'? null: 6000} onClose={handleClose}>
            <Alert elevation={6} variant="filled" onClose={handleClose} severity={props.severity} className='notificationText'> 
                {props.message}
            </Alert>
        </Snackbar>
    );
}

export default styled(Notification)(styles);