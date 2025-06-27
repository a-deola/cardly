export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Made with ❤️ &copy;{year}</p>
    </footer>
  );
}
