import React, { Fragment } from 'react';
import './year.css';
import useSchedule from './schedule-logic/useSchedule';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const YearSchedule = () => {
    const { getPrevMonth, getNextMonth, todayButton, daysShort, selectedDate, setSelectedDate, getCurrentDate,  monthDaysArr, monthNames, dateDisplay, prevDaysArr, nextDaysArr, yearCreate, monthDaysArrCreate } = useSchedule();
    
  
    return(
        <Fragment>
            <div className="month-info-container">
                <button className="today-button" onClick={todayButton}>Hoy</button>
                <button className="month-change-button" onClick={getPrevMonth}><FontAwesomeIcon icon={faAngleLeft} className="angle-icon" /></button>
                <button className="month-change-button" onClick={getNextMonth}><FontAwesomeIcon icon={faAngleRight} className="angle-icon" /></button>
                <h1 className="date-display">{dateDisplay}</h1>
            </div>
            {
                
            }
        </Fragment>
    );
}

export default YearSchedule;