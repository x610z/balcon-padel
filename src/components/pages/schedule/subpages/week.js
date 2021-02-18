import React, { Fragment, useState } from 'react';
import './week.css';
import useSchedule from './schedule-logic/useSchedule';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const WeekSchedule = () => {
    const { getPrevWeek, getNextWeek, getPrevMonth, getNextMonth, todayButton, daysShort, selectedDate, getCurrentDate,  weekDaysArr, dateDisplay } = useSchedule();
    
    const today = new Date();


    return(
        <Fragment>
            <div className="month-info-container">
                <button className="today-button" onClick={todayButton}>Hoy</button>
                <button className="month-change-button" onClick={getPrevMonth}><FontAwesomeIcon icon={faAngleLeft} className="angle-icon" /></button>
                <button className="month-change-button" onClick={getNextMonth}><FontAwesomeIcon icon={faAngleRight} className="angle-icon" /></button>
                <h1 className="date-display">{dateDisplay}</h1>
            </div>
            <div className="day-week-change-container">
                <button className="day-week-change-button" onClick={getPrevWeek}>Prev</button>
                <button className="day-week-change-button" onClick={getNextWeek}>Next</button>
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
                            Object.values(weekDaysArr).map(week => {if(`${week.day}/${week.month}/${week.year}` === getCurrentDate){
                                return <div key={`${week.day}/${week.month}/${week.year}`} className="month-day today-highlight">{week.day}</div>
                            } else {
                                return <div key={`${week.day}/${week.month}/${week.year}`} className="month-day">{week.day}</div>
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