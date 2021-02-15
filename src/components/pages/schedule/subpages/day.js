import React, { Fragment, useState } from 'react';
import './day.css';
import useSchedule from './schedule-logic/useSchedule';



const DaySchedule = () => {
    const { getPrevDay, getNextDay, getPrevMonth, getNextMonth, todayButton, selectedDate, getCurrentDate, dateDisplay, daysOfWeek } = useSchedule();
            

    return(
        <Fragment>
            <div className="month-info-container">
                <button className="month-change-button" onClick={getPrevMonth}>Prev</button>
                <button className="month-change-button" onClick={getNextMonth}>Next</button>
                <h1 className="date-display">{dateDisplay}</h1>
                <button className="today-button" onClick={todayButton}>Today</button>
            </div>
            <div>
                <button className="day-change-button" onClick={getPrevDay}>Prev</button>
                <button className="day-change-button" onClick={getNextDay}>Next</button>
            </div>
            <div className="day-schedule-container">
                <div className="day-schedule">
                    <div className="day-name-container">
                    {
                        <div className="week-day">{daysOfWeek[selectedDate.getDay()]}</div> 
                    }
                    </div>
                    <div className="day-container">
                    {
                        <div className="month-day">{selectedDate.getDate()}</div>
                    }
                    </div>
                </div>
            </div>
        </Fragment>
    );
}



export default DaySchedule;