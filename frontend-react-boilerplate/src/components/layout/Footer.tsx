function Footer() {
  return (
    <footer
      style={{
        padding: "1rem",
        borderTop: "1px solid #ccc",
        marginTop: "auto",
        textAlign: "center",
      }}
    >
      <p>
        &copy; {new Date().getFullYear()} HP Solutions. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
