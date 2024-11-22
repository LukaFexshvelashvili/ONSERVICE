import { useState } from "react";
import {
  ChatIcon,
  LogoutIcon,
  NotificationIcon,
  StackedIcon,
  UserIcon,
} from "../assets/icons/icons";
import OutsideClick from "./globals/OutsideClick";

export default function NavBar() {
  return (
    <nav className="sticky flex items-center justify-between w-full">
      <div className="rounded-info text-black bg-white px-6 h-[40px] text-[16px] flex justify-center items-center shadow-def select-none cursor-pointer transition-colors hover:bg-whiteHover">
        <span className="text-main mr-1.5">ონ</span> სერვისი
      </div>
      <div className="flex items-center">
        <NavActions />
      </div>
    </nav>
  );
}

export function NavActions() {
  const [activeBubble, setActiveBubble] = useState<null | string>(null);

  return (
    <OutsideClick
      className="flex gap-[15px] items-center relative"
      onOutsideClick={() => setActiveBubble(null)}
    >
      <>
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
      </>
      <div
        className={`action_bar absolute transition-all duration-200 ${
          activeBubble == null ? "invisible opacity-0" : "visible opacity-100"
        } right-0 w-[200px] rounded-info shadow-def flex flex-col items-center bg-white top-[55px]`}
      >
        {(() => {
          switch (activeBubble) {
            case "PROFILE":
              return <ProfileBar />;
            case "NOTIFICATIONS":
              return <NotificationsBar />;
            case "CHAT":
              return <ChatBar />;
            default:
              return <></>;
          }
        })()}
      </div>
    </OutsideClick>
  );
}

export function ChatBar() {
  return (
    <div className="flex flex-col text-black2 text-[14px] tracking-wide w-[170px] py-4">
      <div className="flex items-center gap-2 mx-auto select-none flex-col justify-center text-center">
        <div className="rounded-[8px] bg-main h-[28px] aspect-square"></div>
        დახმარების ცენტრთან ჩათის დაწყება
      </div>
      <div className="line bg-lineDecor h-[2px] w-[30px] mx-auto my-4"></div>
      <button className="w-full py-2.5 text-white rounded-info bg-main transition-colors hover:bg-mainHover text-[14px] tracking-wider">
        ჩათის დაწყება
      </button>
    </div>
  );
}

export function NotificationsBar() {
  return (
    <div className=" text-black2 text-[14px] tracking-wide w-[170px] py-4">
      <div className="flex flex-col gap-2 max-h-[200px]">
        <div className="flex items-center gap-3 mx-auto select-none cursor-pointer w-full p-2 rounded-[8px] relative transition-colors hover:bg-mainClearHover bg-mainClear">
          <div className="absolute top-[-2px] right-[-2px] h-2 w-2 rounded-full bg-main"></div>
          <div className="rounded-[8px] bg-main h-[24px] aspect-square"></div>
          შეტყობინება
        </div>
        <div className="flex items-center gap-3 mx-auto select-none cursor-pointer w-full p-2 rounded-[8px] relative transition-colors hover:bg-whiteHover">
          <div className="rounded-[8px] bg-main h-[24px] aspect-square"></div>
          შეტყობინება
        </div>
        <div className="flex items-center gap-3 mx-auto select-none cursor-pointer w-full p-2 rounded-[8px] relative transition-colors hover:bg-whiteHover">
          <div className="rounded-[8px] bg-main h-[24px] aspect-square"></div>
          შეტყობინება
        </div>
        <div className="flex items-center gap-3 mx-auto select-none cursor-pointer w-full p-2 rounded-[8px] relative transition-colors hover:bg-whiteHover">
          <div className="rounded-[8px] bg-main h-[24px] aspect-square"></div>
          შეტყობინება
        </div>
      </div>
    </div>
  );
}

export function ProfileBar() {
  return (
    <div className="flex flex-col text-black text-[15px] tracking-wide w-[150px] py-6">
      <div className="flex items-center gap-3 mx-auto select-none cursor-pointer">
        <div className="rounded-[8px] bg-main h-[24px] aspect-square"></div>
        ლუკა
      </div>
      <div className="line bg-lineDecor h-[2px] w-[30px] mx-auto my-4"></div>
      <div className="flex flex-col gap-[14px] tracking-widest  text-[14px] text-black2 select-none mt-1">
        <div className="flex items-center gap-2 cursor-pointer w-min">
          <UserIcon className="h-[18px] aspect-square [&>path]:fill-black2" />{" "}
          პროფილი
        </div>
        <div className="flex items-center gap-2 cursor-pointer w-min">
          <StackedIcon className="h-[18px] aspect-square [&>path]:fill-black2" />{" "}
          შეკვეთები
        </div>
        <div className="flex items-center gap-2 cursor-pointer w-min">
          <LogoutIcon className="h-[18px] aspect-square [&>path]:stroke-black2" />{" "}
          გასვლა
        </div>
      </div>
    </div>
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
