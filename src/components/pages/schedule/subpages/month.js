import React, { Fragment, useState } from 'react';
import './month.css';

const MonthSchedule = () => {

    
  
    return(
        <Fragment>
            <div className="week-schedule-container">
                <div className="week-schedule">
                    <div className="schedule-days">
                        <div className="week-days-container">
                        {/* {daysShort.map(day => (
                            <div key={day} className="week-days">{day}</div>
                        ))} */}
                        </div>
                    </div>
                    <div className="week-row-container">
                        {
                        /* weekDaysArr.map(week => {if(week == today.getDate()){ 
                            return <div key={week} className="today-highlight">{week}</div>}
                        else{
                            return <div key={week} className="month-day">{week}</div>
                        }}) */
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default MonthSchedule;