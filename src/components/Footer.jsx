import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
    {/* dynanically assign year property */}
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
