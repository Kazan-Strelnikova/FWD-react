import './NavigationElement.css';

interface NavigationProps {
  reference: string;
  label: string;
}

export default function NavigationElement({
  reference,
  label,
}: NavigationProps) {
  return (
    <a className="menu_element" href={reference}>
      {label}
    </a>
  );
}
