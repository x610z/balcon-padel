import React from 'react';
import { useState } from 'react';
import DaySchedule from '../day';
import WeekSchedule from '../week';
import MonthSchedule from '../month';

export const daysOfWeekArr = [
    'Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'
    /* 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' */
]

export const daysShortArr = [
    'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'
    /* 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' */
];

export const monthNamesArr = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  /* 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' */
];


const useSchedule = (daysShort = daysShortArr, monthNames = monthNamesArr, daysOfWeek = daysOfWeekArr) => {
    const today = new Date();
    const todayFormatted = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
    const [selectedDate, setSelectedDate] = useState(today);

    //Current Date
    const getDay = today.getDate();
    const getDayOfWeek = selectedDate.getDay();
    const getCurrentDate = `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`;

    //Date Display
    let dateDisplay = `${monthNames[selectedDate.getMonth()]}  ${selectedDate.getFullYear()}`;
    const todayButton = ()=>{
        setSelectedDate(selectedDate => new Date(today.getFullYear(), today.getMonth(), today.getDate()));
    };

    //First/Last Day
        //First Day in Week
        let firstDayInWeekDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate() + (getDayOfWeek == 0 ? - 6 : 1) - getDayOfWeek).getDate();

        let firstDayInWeekFullDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate() + (getDayOfWeek == 0 ? - 6 : 1) - getDayOfWeek);
        //Last Day in Week
        let lastDayInWeekDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate() + (getDayOfWeek == 0 ? 0 : 7) - getDayOfWeek).getDate();

        let lastDayInWeekFullDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate() + (getDayOfWeek == 0 ? 0 : 7) - getDayOfWeek);

        //First Day in Month
        const firstDayInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDate();
        const firstDayInNextMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1).getDate();
        //Last Day in Month
        const lastDayInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
        const lastDayInPrevMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() , 0).getDate();

    //Start/End
    let monthStartingPoint = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();
    let monthEndingPoint = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDay();

    //Day Generator
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
        //Week Function
        const weekDaysArr = [];
        const weekDaysArrCreate = ()=>{
            //If Week Is Between 2 Months
            if(firstDayInWeekDate > lastDayInWeekDate){
                //If Week Starts In Last Day Of Month
                if(firstDayInWeekDate <= lastDayInPrevMonth && firstDayInWeekDate >= 30){
                    //Push Last Day In Month To Arr
                    for(let i = firstDayInWeekDate; i <= lastDayInPrevMonth; i++){
                        weekDaysArr.push({
                            day: i,
                            month: `${selectedDate.getMonth()}`,
                            year: `${selectedDate.getFullYear()}`,
                            fullDate: `${selectedDate.getDate()}/${selectedDate.getMonth()}/${selectedDate.getFullYear()}` 
                        })
                    }
                    //Push Rest Of Week To Arr
                    for(let i = firstDayInMonth; i <= lastDayInWeekDate; i++){
                        weekDaysArr.push({
                            day: i,
                            month: `${selectedDate.getMonth()}`,
                            year: `${selectedDate.getFullYear()}`,
                            fullDate: `${selectedDate.getDate()}/${selectedDate.getMonth()}/${selectedDate.getFullYear()}` 
                        })
                    }
                    if(firstDayInWeekFullDate.getFullYear() !== lastDayInWeekFullDate.getFullYear()){
                        dateDisplay = `${monthNames[firstDayInWeekFullDate.getMonth()]} ${firstDayInWeekFullDate.getFullYear()} - ${monthNames[lastDayInWeekFullDate.getMonth()]}  ${lastDayInWeekFullDate.getFullYear()}`;
                    } else {
                        dateDisplay = `${monthNames[selectedDate.getMonth() - 1]} - ${monthNames[selectedDate.getMonth()]}  ${selectedDate.getFullYear()}`;
                    }
                } else {
                    for(let i = firstDayInWeekDate; i <= lastDayInMonth; i++){
                        weekDaysArr.push({
                            day: i,
                            month: `${selectedDate.getMonth()}`,
                            year: `${selectedDate.getFullYear()}`,
                            fullDate: `${selectedDate.getDate()}/${selectedDate.getMonth()}/${selectedDate.getFullYear()}` 
                        })
                    }
                    for(let i = firstDayInNextMonth; i <= lastDayInWeekDate; i++){
                        weekDaysArr.push({
                            day: i,
                            month: `${selectedDate.getMonth()}`,
                            year: `${selectedDate.getFullYear()}`,
                            fullDate: `${selectedDate.getDate()}/${selectedDate.getMonth()}/${selectedDate.getFullYear()}` 
                        })
                    }
                    if(firstDayInWeekFullDate.getFullYear() !== lastDayInWeekFullDate.getFullYear()){
                        dateDisplay = `${monthNames[firstDayInWeekFullDate.getMonth()]} ${firstDayInWeekFullDate.getFullYear()} - ${monthNames[lastDayInWeekFullDate.getMonth()]}  ${lastDayInWeekFullDate.getFullYear()}`;
                    } else {
                        dateDisplay = `${monthNames[selectedDate.getMonth()]} - ${monthNames[selectedDate.getMonth() + 1]}  ${selectedDate.getFullYear()}`;
                    }
                } 
            } else {
                //Normal Week
                for(let i = firstDayInWeekDate; i <= lastDayInWeekDate; i++){
                    weekDaysArr.push({
                        day: i,
                        month: `${selectedDate.getMonth()}`,
                        year: `${selectedDate.getFullYear()}`,
                        fullDate: `${selectedDate.getDate()}/${selectedDate.getMonth()}/${selectedDate.getFullYear()}` 
                    })
                }
            }
        }
        weekDaysArrCreate();
        
            //Prev Prev Week
            const getPrevWeek = () => {
                setSelectedDate(firstDayInWeekDate => new Date(firstDayInWeekDate.getFullYear(), firstDayInWeekDate.getMonth(), firstDayInWeekDate.getDate() - 7));
            } 
            //Prev Next Week
            const getNextWeek = () => {
                //setSelectedDate(prevValue => new Date(prevValue.getFullYear(), prevValue.getMonth(), prevValue.getDate() + 7));
                setSelectedDate(firstDayInWeekDate => new Date(firstDayInWeekDate.getFullYear(), firstDayInWeekDate.getMonth(), firstDayInWeekDate.getDate() + 7));
            }       

    //Month Generator 
        //Month Function
        const monthDaysArr = [];
        const prevDaysArr = [];
        const nextDaysArr = [];
        let getPrevMonthDays = lastDayInPrevMonth;
        let getNextMonthDays = firstDayInNextMonth;
        
        const monthDaysArrCreate = ()=>{
            //For Prev Days
            if(monthStartingPoint == 0){
                for(let a = 1; a < (monthStartingPoint + 7); a++){
                    prevDaysArr.push({
                        prevMonthDays: a,
                        day: `${getPrevMonthDays}`,
                        month: `${(selectedDate.getMonth() - 1)}`,
                        year: `${selectedDate.getFullYear()}`,
                        fullDate: `${selectedDate.getDate()}/${(selectedDate.getMonth() - 1)}/${selectedDate.getFullYear()}`
                    })
                    getPrevMonthDays--;
                }
            } else {
                for(let a = 1; a < monthStartingPoint; a++){
                    prevDaysArr.push({
                        prevMonthDays: a,
                        day: `${getPrevMonthDays}`,
                        month: `${(selectedDate.getMonth() - 1)}`,
                        year: `${selectedDate.getFullYear()}`,
                        fullDate: `${selectedDate.getDate()}/${(selectedDate.getMonth() - 1)}/${selectedDate.getFullYear()}`
                    })
                    getPrevMonthDays--;
                }
            }
            //For Current Days
            for(let i = firstDayInMonth; i <= lastDayInMonth; i++){
                monthDaysArr.push({
                    day: i,
                    month: `${selectedDate.getMonth()}`,
                    year: `${selectedDate.getFullYear()}`,
                    fullDate: `${selectedDate.getDate()}/${selectedDate.getMonth()}/${selectedDate.getFullYear()}` 
                })
            }
            //For Next Days
            for(let b = 0; b < (7 - monthEndingPoint); b++){
                if(monthEndingPoint != 0){
                nextDaysArr.push({
                    nextMonthDays: b,
                    day: `${getNextMonthDays}`,
                    month: `${selectedDate.getMonth() + 1}`,
                    year: `${selectedDate.getFullYear()}`,
                    fullDate: `${selectedDate.getDate()}/${selectedDate.getMonth() + 1}/${selectedDate.getFullYear()}`
                })
                getNextMonthDays++;
            }}
        }
        monthDaysArrCreate();
        
        
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
        monthDaysArr,
        prevDaysArr,
        nextDaysArr,
        today,
        todayButton,
        //
        firstDayInWeekDate,
        lastDayInWeekDate,
        
    }


}

export default useSchedule;