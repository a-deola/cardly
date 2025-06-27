import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
export default function Form() {
  return (
    <form
      className="my-form"
      action="mailto:meetprecious1403@gmail.com"
      method="post"
      autoComplete="on"
    >
      <div className="names">
        <label className="form-fields mobile-text">
          First name
          <input
            className="my-inputs"
            id="fName"
            type="text"
            placeholder="Enter your first name"
          />
        </label>

        <label className="form-fields right-link mobile-text">
          Last name
          <input
            className="my-inputs right-link "
            type="text"
            placeholder="Enter your last name"
          />
        </label>
      </div>

      <label className="form-fields mobile-text">
        Email
        <input
          className="my-inputs"
          type="email"
          placeholder="yourname@email.com"
        />
      </label>
      <label className="form-fields mobile-text">
        Message
        <TextField
          multiline
          rows={4}
          InputProps={{ className: "moblie-text" }}
          margin="dense"
          label="Send a message"
          placeholder="Send me a message and I'll reply you as soon as possible..."
        />
      </label>
      <div className="my-check">
        <label className="mobile-text">
          <input type="checkbox" />
          You agree to providing your data to <span>Adeola</span> who may
          contact you.
        </label>
      </div>

      <Button
        sx={{
          textTransform: "none",
          mb: 2,
          backgroundColor: "#f3c0cb",
          hover: {
            backgroundColor: "#f3c0cb",
          },
          color: "#262c35",
        }}
        endIcon={<SendIcon />}
      >
        Send message
      </Button>
    </form>
  );
}
