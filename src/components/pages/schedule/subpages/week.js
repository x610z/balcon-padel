import React, { Fragment, useState } from 'react';
import './week.css';
import useSchedule from './schedule-logic/useSchedule';

const WeekSchedule = () => {
    const { daysShort, selectedDate, monthNames, getPrevMonth, getNextMonth, getCurrentDate, getPrevWeek, getNextWeek, weekDaysArr, dateDisplay, todayButton } = useSchedule();
    
    const today = new Date();


    return(
        <Fragment>
            <div className="month-info-container">
                <button className="month-change-button" onClick={getPrevMonth}>Prev</button>
                <button className="month-change-button" onClick={getNextMonth}>Next</button>
                <h1 className="date-display">{dateDisplay}</h1>
                <button className="today-button" onClick={todayButton}>Today</button>
            </div>
            <div>
                <button className="day-change-button" onClick={getPrevWeek}>Prev</button>
                <button className="day-change-button" onClick={getNextWeek}>Next</button>
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
                            weekDaysArr.map(week => {if(week == (today.getDate())){ 
                                return <div key={week} className="today-highlight">{week}</div>
                            } else {
                                return <div key={week} className="month-day">{week}</div>
                            }
                            })
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    );
}



export default WeekSchedule;