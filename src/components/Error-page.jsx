import { Button } from "@mui/material";
import { useRouteError } from "react-router-dom";
import Footer from "./Footer";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <>
      <main className="container">
        <p className="error-text">{error.status} error</p>
        <h1>We can't find that page</h1>
        <p>Sorry, the page you are looking for doesn't exist</p>
        <div>
          <Button variant="outlined" href="/">
            Go back{" "}
          </Button>
          <Button variant="contained" href="/">
            Take me home
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
