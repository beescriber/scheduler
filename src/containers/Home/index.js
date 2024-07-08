import React, {useState} from 'react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import { styles } from './styles';
import { styled } from "@mui/material/styles";
import {
  Scheduler,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  WeekView,
  EditRecurrenceMenu,
  AllDayPanel,
  ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';
import { AgGridReact } from "ag-grid-react";
import {LicenseManager} from "ag-grid-enterprise";
import { appointments } from '../../demo-data/appointments';
import EventDetails from '../EventDetails';
import TextEditor from '../../components/TextEditor';
import Grid from '@mui/material/Grid';
import {connect} from 'react-redux';

const App = (props) => {
    const [currentDate, setCurrentDate] = useState('2018-06-27');
    const [data, setData] = useState(appointments);
    const [addedAppointment, setAddedAppointment] = useState({});
    const [appointmentChanges, setAppointmentChanges] = useState({});
    const [editingAppointment, setEditingAppointment] = useState(undefined);

    const [rowData, setRowData] = useState([
        { actionDueDate: "2025-1-1", frequency: "MONTHLY", theme: 'RATE SET', description: 'Set Rate manually based on offline calculation for all accounts in PGCI.', submitter: 'Keeler, Ken', actionStepOwner: 'Jane or John Doe, TSA',
            actionStepBackUp: 'Paul or Paula Doe TSA team member', uploadSupport: 'include screenshot of system, email, etc', completedByDate: '2025-1-1', completedByPerson: 'Jane Doe, TSA', status: 'CLOSED'},

        { actionDueDate: "2025-3-1", frequency: "MONTHLY", theme: 'RATE SET', description: 'Set Rate manually based on offline calculation for all accounts in PGCI.', submitter: 'Keeler, Ken', actionStepOwner: 'Jane or John Doe, TSA',
            actionStepBackUp: 'Paul or Paula Doe TSA team member', uploadSupport: 'include screenshot of system, email, etc', completedByDate: '2025-1-1', completedByPerson: 'Jane Doe, TSA', status: 'OPEN'},
        {actionDueDate: "2025-5-1", frequency: "MONTHLY", theme: 'RATE SET', description: 'Set Rate manually based on offline calculation for all accounts in PGCI.', submitter: 'Keeler, Ken', actionStepOwner: 'Jane or John Doe, TSA',
            actionStepBackUp: 'Paul or Paula Doe TSA team member', uploadSupport: 'include screenshot of system, email, etc', completedByDate: '2025-1-1', completedByPerson: 'Jane Doe, TSA', status: 'CLOSED'},
    ]);

    const [colDefs, setColDefs] = useState([
        { field: "actionDueDate" },
        {field: "frequency" },
        { field: "theme" },
        { field: "description" },
        { field: "submitter" },
        {field: "actionStepOwner" },
        {field: "actionStepBackUp" },
        {field: "uploadSupport" },
        {field: "completedByDate" },
        {field: "completedByPerson" },
        { field: "status" }
    ]);

    const defaultColDef = {
        flex: 1,
    }

    const changeAddedAppointment = (addedAppointment) => {
        setAddedAppointment(addedAppointment);
    }

    const changeAppointmentChanges = (appointmentChanges) => {
        setAppointmentChanges(appointmentChanges);
    }

    const changeEditingAppointment = (editingAppointment) => {
        setEditingAppointment(editingAppointment);
    }

    const commitChanges = ({ added, changed, deleted }) => {
      if (added) {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map(appointment => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
      }
      if (deleted !== undefined) {
        data = data.filter(appointment => appointment.id !== deleted);
      }
      setData(data);
  }

    return (
        <Grid container spacing={1}>
            <Grid item sm={12}>
                <div className='ag-theme-quartz' style={{height: 300, width: '100%'}}>
                    <AgGridReact
                        rowData={rowData}
                        columnDefs={colDefs}
                        defaultColDef={defaultColDef}
                        sideBar
                    />
                </div>
            </Grid>
            <Grid item sm={12}>
                <Scheduler data={data}>
                    <ViewState
                        currentDate={currentDate}
                    />
                    <EditingState
                        onCommitChanges={commitChanges}
                        addedAppointment={addedAppointment}
                        onAddedAppointmentChange={changeAddedAppointment}
                        appointmentChanges={appointmentChanges}
                        onAppointmentChangesChange={changeAppointmentChanges}
                        editingAppointment={editingAppointment}
                        onEditingAppointmentChange={changeEditingAppointment}
                    />
                    <WeekView
                        startDayHour={9}
                        endDayHour={17}
                    />
                    <AllDayPanel />
                    <EditRecurrenceMenu />
                    <ConfirmationDialog />
                    <Appointments />
                    <AppointmentTooltip
                        showOpenButton
                        showDeleteButton
                    />
                    <AppointmentForm basicLayoutComponent={EventDetails} textEditorComponent={TextEditor}/>
                </Scheduler>
            </Grid>
        </Grid>
    );
}

const mapStateToProps = state => ({
    testProp: state.testProp
});

export default styled(connect(mapStateToProps)(App))(styles);


