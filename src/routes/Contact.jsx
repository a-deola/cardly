import { Box } from "@mui/material";
import Intro from "../components/contact-intro";
import Footer from "../components/Footer"
import Form from "../components/Form";

export default function Contact() {
return <div>
        <Box className="contact-body">
            <Intro />
            <Form />
        </Box>
        <hr />
        <Footer />
    </div>
}