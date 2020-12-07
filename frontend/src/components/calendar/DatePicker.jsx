import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Date_Picker (){
    const [selectedDate, setSelectedDate] = useState(null);
    return(
        <div className ="App">
        <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} 
        dateFormat= "dd/MM/yyyy"
        minDate ={new Date()}
        filterDate = {date => date.getDay() !== 6 && date.getDay()!== 0}
        />
        </div>        
    )
}