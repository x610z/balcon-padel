import React, { Fragment } from 'react';
import useSchedule from './schedule-logic/useSchedule';
import './month.css';

const MonthSchedule = () => {
    const { calendarRows, todayFormatted, daysShort } = useSchedule();
  
    const dateClickHandler = date => {
      console.log(date);
    }
  
    return(
        <Fragment>
            <div className="month-table-container">
                <table className="month-table">
                    <thead className="scheduler-days">
                        <tr className="week-days-container">
                        {daysShort.map(day => (
                            <th key={day} className="week-days">{day}</th>
                        ))}
                        </tr>
                    </thead>
                    <tbody className="month-days-container">
                        {
                        Object.values(calendarRows).map(cols => {
                            return <tr key={cols[0].date} className="month-days-rows">
                            {cols.map(col => (
                                col.date === todayFormatted
                                ? <td key={col.date} className={`${col.classes} today-highlight`} onClick={() => dateClickHandler(col.date)}>
                                    {col.value}
                                </td>
                                : <td key={col.date} className={col.classes} onClick={() => dateClickHandler(col.date)}>{col.value}</td>
                            ))}
                            </tr>
                        })
                        }
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
}

export default MonthSchedule;