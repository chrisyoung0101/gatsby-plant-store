import React from 'react';

export default function Footer(fullYear) {
  return (
    <footer className="center">
      <p>&copy; The Plant Shop {new Date().getFullYear()}</p>
    </footer>
  );
}
