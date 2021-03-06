import React, { Fragment, useState } from 'react';
import './month.css';
import useSchedule from './schedule-logic/useSchedule';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const MonthSchedule = () => {
    const { getPrevMonth, getNextMonth, todayButton, daysShort, selectedDate, getCurrentDate,  monthDaysArr, dateDisplay, prevDaysArr, nextDaysArr, monthDaysArrCreate } = useSchedule();
    
  
    return(
        <Fragment>
            <div className="month-info-container">
                <button className="today-button" onClick={todayButton}>Hoy</button>
                <button className="month-change-button" onClick={getPrevMonth}><FontAwesomeIcon icon={faAngleLeft} className="angle-icon" /></button>
                <button className="month-change-button" onClick={getNextMonth}><FontAwesomeIcon icon={faAngleRight} className="angle-icon" /></button>
                <h1 className="date-display">{dateDisplay}</h1>
            </div>
            <div className="month-schedule-container">
                <div className="month-schedule">
                    <div className="day-name-container">
                    { 
                        daysShort.map(day => 
                            <div key={day} className="week-day">{day}</div>
                        ) 
                    }
                    </div>
                    <div className="month-container">
                    {
                        monthDaysArrCreate()
                    }
                    {
                        //For Prev Days
                        Object.values(prevDaysArr.reverse()).map(month => {
                            return <div key={`${month.prevMonthDays}/${month.month}/${month.year}`} className="month-day in-prev-month">{month.day}</div>
                        })
                    }   
                    {
                        //For Current Days
                        Object.values(monthDaysArr).map(month => {if(`${month.day}/${month.month}/${month.year}` === getCurrentDate){
                            return <div key={`${month.day}/${month.month}/${month.year}`} className="month-day today-highlight">{month.day}</div>
                        } else {
                            return <div key={`${month.day}/${month.month}/${month.year}`} className="month-day">{month.day}</div>
                        }
                        })
                    }
                    {
                        //For Next Days
                        Object.values(nextDaysArr).map(month => {
                            return <div key={`${month.nextMonthDays}/${month.month}/${month.year}`} className="month-day in-next-month">{month.day}</div>
                        })
                    } 
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default MonthSchedule;