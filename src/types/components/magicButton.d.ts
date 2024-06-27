interface IMagicButtonProps {
  title: string;
  icon: React.ReactNode;
  position: IconPosition;
  handleClick?: () => void;
  otherClasses?: ClassValue;
}
