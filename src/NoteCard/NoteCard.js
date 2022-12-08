import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Avatar, IconButton, Typography } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export default function NoteCard({ note, handleDelete }) {
  const AvatarColor = (note) => {
    if (note.category === "work") {
      return "work";
    }
    if (note.category === "money") {
      return "money";
    }
    if (note.category === "todo") {
      return "todo";
    }
    return "reminder";
  };
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={<Avatar>{note.category[0].toUpperCase()}</Avatar>}
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
