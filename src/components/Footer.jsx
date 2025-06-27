export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <hr />
      <p>Made with ❤️ &copy;{year}</p>
    </footer>
  );
}
