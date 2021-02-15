import React, { Fragment, useState } from 'react';
import './month.css';
import useSchedule from './schedule-logic/useSchedule';

const MonthSchedule = () => {
    const { getPrevWeek, getNextWeek, getPrevMonth, getNextMonth, todayButton, daysShort, selectedDate, getCurrentDate,  weekDaysArr, dateDisplay } = useSchedule();
    
  
    return(
        <Fragment>
            <div className="month-info-container">
                <button className="month-change-button" onClick={getPrevMonth}>Prev</button>
                <button className="month-change-button" onClick={getNextMonth}>Next</button>
                <h1 className="date-display">{dateDisplay}</h1>
                <button className="today-button" onClick={todayButton}>Today</button>
            </div>
            <div className="week-schedule-container">
                <div className="week-schedule">
                    <div className="day-name-container">
                    { 
                        daysShort.map(day => 
                            <div key={day} className="week-day">{day}</div>
                        ) 
                    }
                    </div>
                    <div className="week-row-container">
                        {
                            
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default MonthSchedule;