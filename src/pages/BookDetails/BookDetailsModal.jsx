import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import BookCard from "../../components/BookCard/BookCard";
import FavoriteButton from "../../components/FavoriteButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "black",
  width: { xs: "90%", sm: 400, md: 500 },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal({ book }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        onClick={handleOpen}
        color="inherit"
        sx={{
          backgroundColor: "#1a1a1a;",
          color: "white",
          "&:hover": {
            backgroundColor: "#1a1a1a;",
            color: "white",
          },
          "&:focus": { outline: "none" },
          "&:focus-visible": { outline: "none" },
        }}
      >
        Read summary
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
          <h2 id="child-modal-title">{book.title}</h2>
          <p id="child-modal-description">{book.summaries}</p>
          <Button
            onClick={handleClose}
            color="inherit"
            sx={{
              color: "black",
              "&:hover": {
                backgroundColor: "transparent",
                color: "black",
              },
              "&:focus": { outline: "none" },
              "&:focus-visible": { outline: "none" },
            }}
          >
            Close summary
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function BookModal({ book }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        color="inherit"
        sx={{
          color: "black",
          "&:hover": {
            backgroundColor: "transparent",
            color: "black",
          },
          "&:focus": { outline: "none" },
          "&:focus-visible": { outline: "none" },
        }}
      >
        {book.title}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">{book.title}</h2>
          <img src={book.formats["image/jpeg"]} alt={book.title} width={200} />
          <p>By: {book.authors?.map((a) => a.name).join(", ")}</p>
            <ChildModal book={book} />
            <br/>
            <FavoriteButton {...book} />
        </Box>
      </Modal>
    </div>
  );
}
