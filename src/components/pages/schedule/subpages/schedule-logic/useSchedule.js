import React from 'react';
import { useState } from 'react';

const daysShortArr = [
    /* 'Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab' */
    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' 
];

const monthNamesArr = [
  /* 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' */
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];

const useSchedule = (daysShort = daysShortArr, monthNames = monthNamesArr) => {
    const today = new Date();
    const todayFormatted = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
    const [selectedDay, setSelectedDay] = useState(today);
    const [selectedWeek, setSelectedWeek] = useState(today);
    const [selectedMonth, setSelectedMonth] = useState(today);
    const [selectedDate, setSelectedDate] = useState(today);
    const weekDaysArr = [];
    
    

    //Day Generator
    const getDayOfWeek = today.getDay();
    const getDay = today.getDate();
        //First Day in Month
        const firstDayInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDate();
        //Last Day in Month
        const lastDayInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
        //Day Function
            //Prev Day
            const getPrevDay = ()=>{
                setSelectedDate(prevValue => new Date(prevValue.getFullYear(), prevValue.getMonth(), prevValue.getDate() - 1))
            }
            //Prev Day
            const getNextDay = ()=>{
                setSelectedDate(prevValue => new Date(prevValue.getFullYear(), prevValue.getMonth(), prevValue.getDate() + 1))
            }
            //Day Name
            const currentDayName = daysShort[selectedDate.getDay()];

    //Week Generator
        //First Day in Week
        const firstDayInWeek = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate() + (getDayOfWeek == 0 ? -6 : 1) - getDayOfWeek).getDate();
        //Last Day in Week
        const lastDayInWeek = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate() + (getDayOfWeek == 0 ? 0 : 7) - getDayOfWeek).getDate();
        //Week Function
        const weekDaysArrCreate = ()=>{
            for(let i = firstDayInWeek; i <= lastDayInWeek; i++){
                weekDaysArr.push(i)
            }
        }
        weekDaysArrCreate();
            //Prev Next Week
            const getPrevWeek = () => {
                setSelectedDate(prevValue => new Date(prevValue.getFullYear(), prevValue.getMonth() - 1, 1));
            }
        

        
    //Month Generator
        //Month Function
            //Prev Next Month
            const getPrevMonth = () => {
                setSelectedDate(prevValue => new Date(prevValue.getFullYear(), prevValue.getMonth() - 1, selectedDate.getDate()));
            }
            const getNextMonth = () => {
                setSelectedDate(prevValue => new Date(prevValue.getFullYear(), prevValue.getMonth() + 1, selectedDate.getDate()));  
            }

    //Year Generator

    // console.log("First day in week: " + firstDayInWeek)
    // console.log("Last day in week: " + lastDayInWeek)
    // console.log("First day in month: " + firstDayInMonth)
    // console.log("Last day in month: " + lastDayInMonth)

    

    

    return {
        todayFormatted,
        weekDaysArr,
        daysShort,
        monthNames,
        today,
        currentDayName,
        //Selected Dates
        selectedDay,
        selectedWeek,
        selectedMonth,
        selectedDate,
        //Prev Next Functions
        getPrevDay,
        getNextDay,
        getPrevMonth,
        getNextMonth,
    }
}

export default useSchedule;