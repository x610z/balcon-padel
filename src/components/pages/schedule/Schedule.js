import React, { Fragment, useState, useEffect } from 'react';
import './Schedule.css';
//Schedules
import DaySchedule from './subpages/day';
import WeekSchedule from './subpages/week';
/* import MonthSchedule from "./subpages/month"; */
//Schedule Logic
import useSchedule from './subpages/schedule-logic/useSchedule';


const Schedule = () => {
    const { monthNames, getNextMonth, getPrevMonth, selectedDate, currentDayName } = useSchedule();
  
    const dateClickHandler = date => {
      console.log(date);
    }
    
    const [scheduleState, setScheduleState] = useState("day");
    
    function scheduleSwitch(scheduleState) {
        let scheduleTest = scheduleState;
        if (scheduleTest == 'day') {
            return <DaySchedule />
        } else if (scheduleTest == 'week'){
            return <WeekSchedule />
        } else if (scheduleTest == 'month'){
            return "month"
        } else if (scheduleTest == 'year'){
            return "year"
        }
    }
    console.log(selectedDate)
    return(
        <Fragment>
            <div className="scheduler-container">
                <div className="top-date-container">
                    <div className="month-info-container">
                        <button className="month-change-button" onClick={getPrevMonth}>Prev</button>
                        <button className="month-change-button" onClick={getNextMonth}>Next</button>
                        <h1>{`${monthNames[selectedDate.getMonth()]} - ${selectedDate.getFullYear()}`}</h1>
                        {currentDayName}
                    </div>
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