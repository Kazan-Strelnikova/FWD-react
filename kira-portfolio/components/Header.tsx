import React from 'react';
import '../styles/Header.css';
import Icon from '../public/images/icon.svg';
import NavigationElement from './NavigationElement';
import Image from 'next/image';

interface NavigationProps {
  reference: string;
  label: string;
}

const navigationLinks: NavigationProps[] = [
  { reference: '/', label: 'Profile' },
  { reference: '/about', label: 'About me' },
  { reference: '/projects', label: 'Portfolio' },
  { reference: '/comic', label: 'Comic' },
];

export default function Header() {
  return (
    <header className="header">
      <Image id="icon" src={Icon} alt="icon" />
      <nav className="header_menu">
        {navigationLinks.map((navigationLink) => (
          <NavigationElement
            key={navigationLink.label}
            reference={navigationLink.reference}
            label={navigationLink.label}
          />
        ))}
      </nav>
    </header>
  );
}
