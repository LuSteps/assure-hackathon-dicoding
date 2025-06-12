import React from "react";
import { Button, IconButton, InputBase, Paper } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type ChatInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  placeholder?: string;
};

export default function ChatInput({
  value,
  onChange,
  onSubmit,
  placeholder = "Say something about your concern...",
}: ChatInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (value.trim()) {
        onSubmit(e);
      }
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        if (value.trim()) {
          onSubmit(e);
        }
      }}
      className="flex items-center px-4 py-2"
      elevation={0}
      sx={{
        marginX: "auto",
        borderRadius: "25px",
        backgroundColor: "#A8A8A8",
        width: "100%",
        // width: {sm: "100%", md: "60%"},
      }}
    >
      <InputBase
        className="flex-grow"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        multiline
        maxRows={4}
        inputProps={{ "aria-label": "chat input" }}
      />

      <Button
        type="submit"
        color="primary"
        disabled={!value.trim()}
        aria-label="send message"
        size="large"
        sx={{
          backgroundColor: "#D9D9D9",
          borderRadius: "25px",
          // padding: "12px",
          paddingY: "12px",
        }}
      >
        <ArrowForwardIcon />
      </Button>

      {/* <IconButton
        type="submit"
        color="primary"
        disabled={!value.trim()}
        aria-label="send message"
        size="large"
        sx={{
          backgroundColor: "#D9D9D9",
          padding: "8px"
        }}
      >
        <ArrowForwardIcon />
      </IconButton> */}
    </Paper>
  );
}
