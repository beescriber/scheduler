
import { styled } from "@mui/material/styles";
import {connect} from 'react-redux';
import {styles} from './styles';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {AppointmentForm,} from '@devexpress/dx-react-scheduler-material-ui';

const EventDetails = ({ onFieldChange, appointmentData, ...restProps }) => {
    const {classes} = restProps;
    const onCustomFieldChange = (nextValue) => {
      onFieldChange({ customField: nextValue });
    };
  
    return (
      <AppointmentForm.BasicLayout
        appointmentData={appointmentData}
        onFieldChange={onFieldChange}
        {...restProps}
      >
        <AppointmentForm.Label
          text="Custom Field"
          type="title"
        />
        <AppointmentForm.TextEditor
          value={appointmentData.customField}
          onValueChange={onCustomFieldChange}
          placeholder="Custom field"
        />
        <TextField
          className='testClasssss'
          fullWidth
          margin="dense"
          variant="outlined"
          value={""}
          onChange={(event) => {

          }}
        />

      </AppointmentForm.BasicLayout>
    );
  };


const mapStateToProps = state => ({
    testProp: state.testProp
});

//export default styled(connect(mapStateToProps)(EventDetails))(styles);
export default styled(EventDetails)(styles);
