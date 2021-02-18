import React, { Fragment, useState } from 'react';
import './day.css';
import useSchedule from './schedule-logic/useSchedule';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';



const DaySchedule = () => {
    const { getPrevDay, getNextDay, getPrevMonth, getNextMonth, todayButton, selectedDate, getCurrentDate, dateDisplay, daysOfWeek } = useSchedule();
            

    return(
        <Fragment>
            <div className="month-info-container">
                <button className="today-button" onClick={todayButton}>Hoy</button>
                <button className="month-change-button" onClick={getPrevMonth}><FontAwesomeIcon icon={faAngleLeft} className="angle-icon" /></button>
                <button className="month-change-button" onClick={getNextMonth}><FontAwesomeIcon icon={faAngleRight} className="angle-icon" /></button>
                <h1 className="date-display">{dateDisplay}</h1>
            </div>
            <div className="day-week-change-container">
                <button className="day-week-change-button" onClick={getPrevDay}>Prev</button>
                <button className="day-week-change-button" onClick={getNextDay}>Next</button>
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