import Link from 'next/link';
import '../styles/NavigationElement.css';

interface NavigationProps {
  reference: string;
  label: string;
}

export default function NavigationElement({
  reference,
  label,
}: NavigationProps) {
  return (
    <Link className="menu_element" href={reference}>
      {label}
    </Link>
  );
}
