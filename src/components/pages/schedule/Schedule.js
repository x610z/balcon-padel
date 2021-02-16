import React, { Fragment, useState, useEffect } from 'react';
import './Schedule.css';

//Logic
import useSchedule from './subpages/schedule-logic/useSchedule'



const Schedule = () => {
    const { DaySchedule, WeekSchedule, MonthSchedule } = useSchedule();


    const [scheduleState, setScheduleState] = useState("month");
    
    function scheduleSwitch(scheduleState) {
        let scheduleTest = scheduleState;
        if (scheduleTest == 'day') {
            return <DaySchedule />
        } else if (scheduleTest == 'week'){
            return <WeekSchedule />
        } else if (scheduleTest == 'month'){
            return <MonthSchedule />
        } else if (scheduleTest == 'year'){
            return "year"
        }
    }
    
    
    return(
        <Fragment>
            <div className="schedule-container">
                <div className="top-date-container">
                    
                    <select value={scheduleState} name="schedule-selector" className="schedule-selection" onChange={(e)=>{
                        const selectedSchedule = e.target.value;
                        setScheduleState(selectedSchedule);
                    }}>
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                        <option value="year">Year</option>
                    </select>
                </div>
                <div>
                    {scheduleSwitch(scheduleState)}
                </div>
                
            </div>
        </Fragment>
    );
};

export default Schedule;