import { useRef, useEffect } from "react";

type OutsideClickProps = {
  children: any;
  onOutsideClick: () => void;
  className?: string;
};

export default function OutsideClick({
  children,
  onOutsideClick,
  className,
}: OutsideClickProps) {
  const box = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (box.current && !box.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [onOutsideClick]);

  return (
    <div ref={box} className={className}>
      {children}
    </div>
  );
}
