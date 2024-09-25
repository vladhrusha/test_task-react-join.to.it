import {
  Calendar as BigCalendar,
  CalendarProps,
  momentLocalizer,
  DateLocalizer,
  Views,
} from "react-big-calendar";
import PropTypes from "prop-types";

import moment from "moment";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const events = [
  {
    start: moment("2024-09-18T10:00:00").toDate(),
    end: moment("2024-09-18T10:00:00").toDate(),
    title: "MRI Registration",
  },
  {
    start: moment("2023-03-18T14:00:00").toDate(),
    end: moment("2023-03-18T15:30:00").toDate(),
    title: "ENT Appointment",
  },
];

let allViews = Object.keys(Views).map((k) => Views[k]);

export default function Calendar(props: Omit<CalendarProps, "localizer">) {
  const [view, setView] = useState("month");
  const [date, setDate] = useState("2024-09-25");

  return (
    <BigCalendar
      {...props}
      localizer={localizer}
      events={events}
      date={date}
      view={view}
      onView={(view) => setView(view)}
      onNavigate={(date) => setDate(date)}
    />
  );
}

Calendar.propTypes = {
  localizer: PropTypes.instanceOf(DateLocalizer),
};
