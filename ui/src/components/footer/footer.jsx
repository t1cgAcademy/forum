import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      Copyright &copy; {new Date().getFullYear()} T1CG Forum
    </footer>
  );
};

export default Footer;
