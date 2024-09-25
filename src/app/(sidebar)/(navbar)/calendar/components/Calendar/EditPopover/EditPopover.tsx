import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Popover, Stack, TextField } from "@mui/material";
import { DesktopDatePicker, DesktopTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import React from "react";
import * as colors from "@/styles/colors";

const EditPopover = ({ modalInfo, formData, handleClose, setFormData, handleEdit, handleDelete }) => {
  return (
    <Popover
      open={modalInfo.visible && modalInfo.type === "event"}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        position: "absolute",
        top: modalInfo.top,
        left: modalInfo.left,
        backgroundColor: "white",
        width: "230px",
        height: "320px",
      }}
    >
      <Stack
        sx={{
          width: "201px",
          height: "275px",
          padding: "16px",
        }}
      >
        <FontAwesomeIcon
          icon={faCircleXmark}
          onClick={handleClose}
          style={{ color: colors.primary.icons, alignSelf: "end" }}
        />
        <TextField
          label="event name"
          variant="standard"
          size="small"
          value={formData.title}
          onChange={(event) => setFormData((prev) => ({ ...prev, title: event.target.value }))}
        />

        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DesktopDatePicker
            value={formData.date}
            slotProps={{ textField: { variant: "standard", size: "medium" } }}
            onChange={(value) => setFormData((prev) => ({ ...prev, date: value }))}
          />
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DesktopTimePicker
            value={formData.time}
            slotProps={{ textField: { variant: "standard" } }}
            onChange={(value) => setFormData((prev) => ({ ...prev, time: value }))}
          />
        </LocalizationProvider>

        <TextField
          label="notes"
          variant="standard"
          size="small"
          value={formData.description}
          onChange={(event) => setFormData((prev) => ({ ...prev, description: event.target.value }))}
        />

        <Stack flexDirection="row" justifyContent="space-between" paddingTop="50px">
          <Button
            variant="text"
            sx={{ color: colors.status.error, textTransform: "none" }}
            onClick={handleDelete}
          >
            Cancel
          </Button>
          <Button variant="text" sx={{ textTransform: "none" }} color="inherit" onClick={handleEdit}>
            Save
          </Button>
        </Stack>
      </Stack>
    </Popover>
  );
};

export default EditPopover;
