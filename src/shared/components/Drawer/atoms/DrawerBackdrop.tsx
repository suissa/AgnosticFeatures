interface DrawerBackdropProps {
  onClick?: () => void;
  show: boolean;
}

export const DrawerBackdrop = ({ onClick, show }: DrawerBackdropProps) => {
  if (!show) return null;

  return <div className="fixed inset-0 bg-black/40 z-40" onClick={onClick} />;
};
