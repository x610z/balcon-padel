import React, { Fragment, useState, useEffect } from 'react';
import './Schedule.css';

//Logic
import useSchedule from './subpages/schedule-logic/useSchedule'



const Schedule = () => {
    const { DaySchedule, WeekSchedule, MonthSchedule } = useSchedule();


    const [scheduleState, setScheduleState] = useState("month");
    
    function scheduleSwitch(scheduleState) {
        let scheduleDisplay = scheduleState;
        if (scheduleDisplay == 'day') {
            return <DaySchedule />
        } else if (scheduleDisplay == 'week'){
            return <WeekSchedule />
        } else if (scheduleDisplay == 'month'){
            return <MonthSchedule />
        } else if (scheduleDisplay == 'year'){
            return "year"
        }
    }
    
    
    return(
        <Fragment>
            <div className="schedule-container">
                <div className="select-container">
                    <select value={scheduleState} name="schedule-selector" className="schedule-selection" onChange={(e)=>{
                        const selectedSchedule = e.target.value;
                        setScheduleState(selectedSchedule);
                    }}>
                        <option value="day">Día</option>
                        <option value="week">Semana</option>
                        <option value="month">Mes</option>
                        <option value="year">Año</option>
                    </select>
                </div>
                
                {scheduleSwitch(scheduleState)}
                
                
            </div>
        </Fragment>
    );
};

export default Schedule;