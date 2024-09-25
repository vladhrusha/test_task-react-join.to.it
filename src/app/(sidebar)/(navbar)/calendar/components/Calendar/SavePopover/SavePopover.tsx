import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Popover, Stack, TextField } from "@mui/material";
import { DesktopDatePicker, DesktopTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import React from "react";

const SavePopover = ({ modalInfo, formData, handleClose, setFormData, handleSave }) => {
  return (
    <Popover
      open={modalInfo.visible && modalInfo.type === "slot"}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        position: "absolute",
        top: modalInfo.top,
        left: modalInfo.left,
        backgroundColor: "white",
        width: "230px",
        height: "300px",
      }}
    >
      <Stack
        sx={{
          width: "201px",
          height: "255px",
          padding: "7px",
        }}
      >
        <FontAwesomeIcon icon={faCircleXmark} onClick={handleClose} />
        <TextField
          label="event name"
          variant="standard"
          size="small"
          value={formData.title}
          onChange={(event) => setFormData((prev) => ({ ...prev, title: event.target.value }))}
        />

        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DesktopTimePicker
            value={formData.time}
            onChange={(value) => setFormData((prev) => ({ ...prev, time: value }))}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DesktopDatePicker
            value={formData.date}
            onChange={(value) => setFormData((prev) => ({ ...prev, date: value }))}
          />
        </LocalizationProvider>

        <TextField
          label="notes"
          variant="standard"
          size="small"
          value={formData.description}
          onChange={(event) => setFormData((prev) => ({ ...prev, description: event.target.value }))}
        />

        <Stack flexDirection="row" justifyContent="space-around">
          <Button variant="text" color="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="text" color="primary" onClick={handleSave}>
            Save
          </Button>
        </Stack>
      </Stack>
    </Popover>
  );
};

export default SavePopover;
