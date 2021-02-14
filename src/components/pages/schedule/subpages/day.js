import React, { Fragment, useState } from 'react';
import useSchedule from './schedule-logic/useSchedule';
import './week.css';



const DaySchedule = () => {
    const { daysShort, getPrevDay, getNextDay, selectedDate, currentDayName } = useSchedule();

    return(
        <Fragment>
            <div>
                <button className="week-change-button" onClick={getPrevDay}>Prev</button>
                <button className="week-change-button" onClick={getNextDay}>Next</button>
            </div>
            <div className="week-schedule-container">
                <div className="week-schedule">
                    <div className="schedule-days">
                        <div className="week-days-container">
                        {
                            currentDayName
                        }
                        </div>
                    </div>
                    <div className="day-container">
                        {
                            selectedDate.getDate()
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    );
}



export default DaySchedule;