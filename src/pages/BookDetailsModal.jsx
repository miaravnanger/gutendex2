import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Chip, Stack } from "@mui/material";
import FavoriteButton from "../components/FavoriteButton";
import { Typography, Link } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useBookDetails } from "../hooks/useBookQuery";

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
const buttonStyle = {
  textTransform: "none",
  borderRadius: "8px",
  border: "1px solid transparent",
  padding: "0.6em 1.2em",
  fontSize: "1em",
  fontWeight: 500,
  fontFamily: "inherit",
  backgroundColor: "#1a1a1a",
  cursor: "pointer",
  transition: "border-color 0.25s",
  color: "white",
  "&:hover": {
    borderColor: "#646cff",
    backgroundColor: "#1a1a1a",
  },

  "&:focus, &:focus-visible": {
    outline: "4px auto -webkit-focus-ring-color",
  },
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
      <Button onClick={handleOpen} color="inherit" sx={{ ...buttonStyle }}>
        Read summary
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 500}}>
          <h2 id="child-modal-title">{book.title}</h2>
          <br />
          <p id="child-modal-description">{book.summaries}</p>
          <br />
          <Button
            onClick={handleClose}
            color="inherit"
            sx={{ ...buttonStyle, fontSize: ".9rem" }}
          >
            Close summary
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function BookModal() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const { data: book, isLoading, isError } = useBookDetails(bookId);

  const handleClose = () => {
    navigate(-1);
  };
  if (isLoading) return <h3>Loading...</h3>;
  if (isError || !book) return <h3>Book not found</h3>;

  return (
    <div>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <Button
            onClick={handleClose}
            color="inherit"
            sx={{ ...buttonStyle, fontSize: "10px" }}
          >
            Close
          </Button>
          <Typography
            id="parent-modal-title"
            variant="h2"
            sx={{ fontWeight: "bold", fontSize: "1.8rem" }}
          >
            {book.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
              gap: "1rem",
              paddingBottom: "1rem",
              paddingTop: "1rem",
              textAlign: "left",
            }}
          >
            <img
              src={book.formats["image/jpeg"]}
              alt={book.title}
              width={200}
            />
            <Typography
              id="parent-modal-desc"
              variant="caption"
              fontSize=".9rem"
            >
              <p>Written by: {book.authors?.map((a) => a.name).join(", ")}</p>
              <p>Download count: {book.download_count}</p>
              <p>Languages: {book.languages}</p>
              <br />
              <Link
                href={book.formats["text/html"]}
                target="_blank"
                rel="noopener"
                sx={{
                  color: "black",
                  "&:hover": {
                    color: "blue",
                  },
                  textDecoration: "underline",
                }}
              >
                Click here to open the book in digital format
              </Link>
            </Typography>
          </Box>
          <Typography
            id="sub"
            variant="caption"
            sx={{ textAlign: "left", fontSize: "0.9rem" }}
          >
            <p>Subjects:</p>{" "}
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {book.subjects?.map((subject, i) => (
              <Chip key={i} label={subject} size="small" />
            ))}
          </Stack>
          <br />
          <Typography
            id="buttons"
            variant="button"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <ChildModal book={book} />
            <FavoriteButton {...book} />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
