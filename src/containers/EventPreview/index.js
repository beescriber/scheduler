
import { styled } from "@mui/material/styles";
import {connect} from 'react-redux';
import { styles } from './styles';
import Grid from '@mui/material/Grid';

const EventPreview = (props) => {

    return (
        <Grid container>

        </Grid>
    );
}

const mapStateToProps = state => ({
    testProp: state.testProp
});

export default styled(connect(mapStateToProps)(EventPreview))(styles);
