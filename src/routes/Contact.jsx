import { Box } from "@mui/material";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import Form from "../components/Form";

export default function Contact() {
  return (
    <>
      <Box className="contact-body">
        <Intro />
        <Form />
      </Box>
      <Footer />
    </>
  );
}
