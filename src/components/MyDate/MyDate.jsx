import React from 'react';

import DatePicker from 'react-date-picker';
import { useState } from 'react';

import './MyDate.scss';
import CalendarIcon from './CalendarIcon';

export default function MyDate() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <form>
        <DatePicker
          className="my-date-picker"
          onChange={setDate}
          value={date}
          clearIcon=""
          format="dd.MM.yyyy"
          calendarIcon={<CalendarIcon />}
        />
      </form>
    </div>
  );
}
