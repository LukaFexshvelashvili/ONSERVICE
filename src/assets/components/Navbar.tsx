import { useState } from "react";
import { ChatIcon, NotificationIcon, UserIcon } from "../icons/icons";

export default function Navbar() {
  const [activeBubble, setActiveBubble] = useState<null | string>(null);

  return (
    <nav className="sticky flex items-center justify-between w-full">
      <div className="rounded-info text-black bg-white px-6 h-[40px] text-[16px] flex justify-center items-center shadow-def select-none cursor-pointer transition-colors hover:bg-whiteHover">
        <span className="text-main mr-1.5">ონ</span> სერვისი
      </div>
      <div className="flex gap-3.5 items-center">
        <NavButton
          icon={ChatIcon}
          isActive={activeBubble === "CHAT"}
          onClick={() =>
            setActiveBubble(activeBubble === "CHAT" ? null : "CHAT")
          }
          iconStyle="stroke"
        />
        <NavButton
          icon={NotificationIcon}
          isActive={activeBubble === "NOTIFICATIONS"}
          onClick={() =>
            setActiveBubble(
              activeBubble === "NOTIFICATIONS" ? null : "NOTIFICATIONS"
            )
          }
          iconStyle="fill"
        />
        <NavButton
          icon={UserIcon}
          isActive={activeBubble === "PROFILE"}
          onClick={() =>
            setActiveBubble(activeBubble === "PROFILE" ? null : "PROFILE")
          }
          iconStyle="fill"
        />
      </div>
    </nav>
  );
}

interface NavButtonProps {
  icon: React.ElementType;
  isActive: boolean;
  onClick: () => void;
  iconStyle: "fill" | "stroke";
}

const NavButton = ({
  icon: Icon,
  isActive,
  onClick,
  iconStyle,
}: NavButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={`rounded-info h-[40px] aspect-square flex justify-center items-center shadow-def select-none cursor-pointer transition-colors ${
        isActive ? "bg-main hover:bg-mainHover" : "bg-white hover:bg-whiteHover"
      }`}
    >
      <Icon
        className={`h-[20px] aspect-square [&>path]:transition-all ${
          isActive
            ? iconStyle === "fill"
              ? "[&>path]:fill-white"
              : "[&>path]:stroke-white"
            : iconStyle === "fill"
            ? "[&>path]:fill-black"
            : "[&>path]:stroke-black"
        }`}
      />
    </div>
  );
};
