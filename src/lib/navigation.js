// Navigation utilities for Astro/React hybrid
// These utilities work in both SSR and client-side contexts

export const navigate = (path) => {
  if (typeof window !== 'undefined') {
    window.location.href = path;
  }
};

export const scrollToSection = (id) => {
  if (typeof window !== 'undefined') {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

// Safe Link component that works without React Router
import React from 'react';

export const Link = ({ to, children, className, ...props }) => {
  return (
    <a href={to} className={className} {...props}>
      {children}
    </a>
  );
};

export default { navigate, scrollToSection, Link };
