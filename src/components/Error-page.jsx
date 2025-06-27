import { Button } from "@mui/material";
import { useRouteError } from "react-router-dom";
import Footer from "./Footer";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <>
      <main className="error-page">
        <h1 className="error-text">{error.status} error</h1>
        <h3>We can't find that page</h3>
        <p>Sorry, the page you are looking for doesn't exist</p>

        <div className="profile">
          <Button
            sx={{
              width: "8rem",
              textTransform: "none",
              backgroundColor: "#ffffff",
              fontWeight: "bold",
              color: "#262c35",
            }}
            href="/"
          >
            Go home
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
