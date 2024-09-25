import {
  Calendar as BigCalendar,
  CalendarProps,
  momentLocalizer,
  DateLocalizer,
  Views,
} from "react-big-calendar";
import PropTypes from "prop-types";

import moment from "moment";
import { Fragment, useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  InputAdornment,
  Modal,
  Popover,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCircle,
  faCircleXmark,
  faClock,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DatePicker, DesktopDatePicker, DesktopTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import SavePopover from "./SavePopover";
import EditPopover from "./EditPopover";

const localizer = momentLocalizer(moment);

let idCounter = 1000000;

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

type Event = {
  id: string;
  date: Date;
  time: Date;
  title: string;
  description: string;
  color: string;
};

const initialEvents: Event[] = [
  {
    id: "1",
    date: moment("2024-09-18T10:00:00").toDate(),
    time: moment("2024-09-18T10:00:00").toDate(),
    title: "MRI Registration",
    description: "MRI Registration",
    color: "white",
  },
  {
    id: "2",
    date: moment("2023-03-18T14:00:00").toDate(),
    time: moment("2023-03-18T15:30:00").toDate(),
    title: "ENT Appointment",
    description: "ENT Appointment",
    color: "white",
  },
];

const initialFormData = {
  title: "",
  date: moment("2024-09-25T15:30"),
  time: moment("2024-09-25T15:30"),
  description: "",
};

export default function Calendar(props: Omit<CalendarProps, "localizer">) {
  const [view, setView] = useState("month");
  const [date, setDate] = useState("2024-09-25");
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [modalInfo, setModalInfo] = useState({
    visible: false,
    top: 0,
    left: 0,
    event: null,
    type: "slot",
  });
  const [formData, setFormData] = useState(initialFormData);

  const handleClose = () => {
    setModalInfo((prev) => ({ ...prev, visible: false }));
    setFormData(initialFormData);
  };

  const onSave = () => {
    setModalInfo((prev) => ({ ...prev, visible: false }));

    const { title, date, time, description } = formData;

    setEvents((prev) => [
      ...prev,
      {
        title,
        date: moment(date).toDate(),
        time: moment(time).toDate(),
        description,
        color: "white",
        id: String(idCounter + -1),
      },
    ]);
    idCounter--;
    handleClose();
  };

  const onDelete = () => {
    setEvents((prevEvents) => {
      // Find the index of the event to delete
      const index = prevEvents.findIndex((event) => event.id === selectedEventId);

      if (index !== -1) {
        // Create a new array excluding the selected event
        return prevEvents.filter((event) => event.id !== selectedEventId);
      } else {
        console.log("Event not found with ID:", selectedEventId);
        return prevEvents; // Return previous state if event is not found
      }
    });
    handleClose();
  };
  const onEdit = (event) => {
    console.log(formData);

    setEvents((prevEvents) =>
      prevEvents.map((e) =>
        e.id === selectedEventId
          ? {
              ...e,
              title: formData.title,
              date: moment(formData.date).toDate(),
              time: moment(formData.time).toDate(),
              description: formData.description,
            }
          : e
      )
    );
    handleClose();
  };

  const handleEventClick = (event, e) => {
    console.log(event);
    const rect = e.target.getBoundingClientRect();

    setFormData({
      title: event.title,
      date: moment(event.start),
      time: moment(event.end),
      description: event.description,
    });

    setSelectedEventId(event.id);
    setModalInfo({
      visible: true,
      top: rect.bottom + window.scrollY, // Position below the event
      left: rect.left + window.scrollX, // Align horizontally with the event
      event,
      type: "event",
    });
  };

  const handleSlotClick = (slotInfo) => {
    setModalInfo({
      visible: true,
      top: slotInfo.box.x + window.scrollY, // Position below the event
      left: slotInfo.box.y + window.scrollX, // Align horizontally with the event
      event: undefined,
      type: "slot",
    });
  };

  return (
    <Fragment>
      <SavePopover
        modalInfo={modalInfo}
        formData={formData}
        handleClose={handleClose}
        setFormData={setFormData}
        handleSave={onSave}
      />
      <EditPopover
        modalInfo={modalInfo}
        formData={formData}
        handleClose={handleClose}
        setFormData={setFormData}
        handleEdit={onEdit}
        handleDelete={onDelete}
      />

      <BigCalendar
        {...props}
        localizer={localizer}
        events={events.map((event) => ({
          id: event.id,
          start: event.time,
          end: event.date,
          title: event.title,
        }))}
        date={date}
        view={view}
        onView={(view) => setView(view)}
        onNavigate={(date) => setDate(date)}
        selectable={true}
        onSelectSlot={handleSlotClick}
        onSelectEvent={handleEventClick}
      />
    </Fragment>
  );
}

Calendar.propTypes = {
  localizer: PropTypes.instanceOf(DateLocalizer),
};
