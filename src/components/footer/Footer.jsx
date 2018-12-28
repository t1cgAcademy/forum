import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      Copyright &copy; {new Date().getFullYear()} T1CG Forum
    </footer>
  );
}
