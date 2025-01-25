import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default calendar styles

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function Calendarc() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Select a Date</h1>
      <div className="bg-white shadow-md p-4 rounded">
        <Calendar onChange={onChange} value={value} />
      </div>
      <p className="mt-4 text-lg">
        Selected Date:{" "}
        {value instanceof Date
          ? value.toDateString()
          : value
          ? `${value[0]?.toDateString()} to ${value[1]?.toDateString()}`
          : "None"}
      </p>
    </div>
  );
}

export default Calendarc;
