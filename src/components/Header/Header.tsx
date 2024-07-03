import React from 'react';
import './Header.css';
import Icon from '../../images/icon.svg';
import NavigationElement from '../NavigationElement/NavigationElement';

interface NavigationProps {
  reference: string;
  label: string;
}

const navigationLinks: NavigationProps[] = [
  { reference: '#about_me', label: 'About me' },
  { reference: '#projects', label: 'Portfolio' },
  { reference: '#footer', label: 'Contact me' },
];

export default function Header() {
  return (
    <header className="header">
      <img id="icon" src={Icon} alt="icon" />
      <nav className="header_menu">
        {navigationLinks.map((navigationLink) => (
          <NavigationElement
            reference={navigationLink.reference}
            label={navigationLink.label}
          />
        ))}
      </nav>
    </header>
  );
}
