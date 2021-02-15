import React from 'react';
import { useState } from 'react';
import DaySchedule from '../day';
import WeekSchedule from '../week';
import MonthSchedule from '../month';

export const daysOfWeekArr = [
    /* 'Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab' */
    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
]

export const daysShortArr = [
    /* 'Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab' */
    'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'
];

export const monthNamesArr = [
  /* 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' */
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];


const useSchedule = (daysShort = daysShortArr, monthNames = monthNamesArr, daysOfWeek = daysOfWeekArr) => {
    const today = new Date();
    const todayFormatted = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
    const [selectedDate, setSelectedDate] = useState(today);

    //Current Date
    const getCurrentDate = `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`;

    //Date Display
    const dateDisplay = `${monthNames[selectedDate.getMonth()]} - ${selectedDate.getFullYear()}`;
    const todayButton = ()=>{
        setSelectedDate(selectedDate => new Date(today.getFullYear(), today.getMonth(), today.getDate()));
    };

    //Day Generator
    const getDay = today.getDate();
        
        //Day Function
            //Prev Day
            const getPrevDay = ()=>{
                setSelectedDate(prevValue => new Date(prevValue.getFullYear(), prevValue.getMonth(), prevValue.getDate() - 1))
            }
            //Prev Day
            const getNextDay = ()=>{
                setSelectedDate(prevValue => new Date(prevValue.getFullYear(), prevValue.getMonth(), prevValue.getDate() + 1))
            }
    
    //Week Generator
    const getDayOfWeek = today.getDay();
    
        //First Day in Week
        const firstDayInWeek = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate() + (getDayOfWeek == 0 ? - 6 : 1) - getDayOfWeek).getDate();
        //Last Day in Week
        const lastDayInWeek = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate() + (getDayOfWeek == 0 ? 0 : 7) - getDayOfWeek).getDate();

        //Week Function
        const weekDaysArr = [];
        const weekDaysArrCreate = ()=>{
            for(let i = firstDayInWeek; i <= lastDayInWeek; i++){
                weekDaysArr.push({
                    day: i,
                    month: `${selectedDate.getMonth()}`,
                    year: `${selectedDate.getFullYear()}`,
                    fullDate: `${selectedDate.getDate()}/${selectedDate.getMonth()}/${selectedDate.getFullYear()}` 
                })
            }
        }
        weekDaysArrCreate();
        
            //Prev Prev Week
            const getPrevWeek = () => {
                setSelectedDate(prevValue => new Date(prevValue.getFullYear(), prevValue.getMonth(), prevValue.getDate() - 7));
            } 
            //Prev Next Week
            const getNextWeek = () => {
                setSelectedDate(prevValue => new Date(prevValue.getFullYear(), prevValue.getMonth(), prevValue.getDate() + 7));
            }       

    //Month Generator

        //First Day in Month
        const firstDayInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDate();
        //Last Day in Month
        const lastDayInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();

        //Month Function
            //Prev Next Month
            const getPrevMonth = () => {
                setSelectedDate(prevValue => new Date(prevValue.getFullYear(), prevValue.getMonth() - 1, selectedDate.getDate()));
            }
            const getNextMonth = () => {
                setSelectedDate(prevValue => new Date(prevValue.getFullYear(), prevValue.getMonth() + 1, selectedDate.getDate()));
            }
            
    
    
    
    return {
        //Schedules
        DaySchedule,
        WeekSchedule,
        MonthSchedule,
        //Prev/Next/Current
        getPrevDay,
        getNextDay,
        getPrevWeek,
        getNextWeek,
        getPrevMonth,
        getNextMonth,
        getCurrentDate,
        dateDisplay,
        //Selected Date
        selectedDate,
        //Days/Months
        daysOfWeek,
        daysShort,
        monthNames,
        weekDaysArr,
        today,
        todayButton,
        //
        firstDayInWeek,
        lastDayInWeek,
        
    }


}

export default useSchedule;