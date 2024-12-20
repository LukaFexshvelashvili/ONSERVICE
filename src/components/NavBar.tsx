import { useState } from "react";
import {
  ChatIcon,
  FacebookIcon,
  Icon,
  IconBlue,
  InstagramIcon,
  LogoutIcon,
  NotificationIcon,
  PhoneIcon,
  StackedIcon,
  UserIcon,
} from "../assets/icons/icons";
import OutsideClick from "./globals/OutsideClick";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="fixed flex items-center justify-between w-[calc(100%-130px)] mobile:w-full mobile:left-0 mobile:px-5 mobile:top-5 z-10">
      <div className="rounded-info text-black bg-white px-6 h-[40px] text-[16px] flex justify-center items-center shadow-defH select-none cursor-pointer transition-colors hover:bg-whiteHover">
        <span className="text-main mr-1.5">ონ</span> სერვისი
      </div>
      <div className="hidden mobile:flex">
        <ResponsiveNavBar />
      </div>
      <div className="flex items-center mobile:hidden">
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
              return <ProfileBar setActiveBubble={setActiveBubble} />;
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

export function ProfileBar(props: { setActiveBubble: Function }) {
  return (
    <div className="flex flex-col text-black text-[15px] tracking-wide w-[150px] py-6">
      <div className="flex items-center gap-3 mx-auto select-none cursor-pointer">
        <div className="rounded-[8px] bg-main h-[24px] aspect-square"></div>
        ლუკა
      </div>
      <div className="line bg-lineDecor h-[2px] w-[30px] mx-auto my-4"></div>
      <div className="flex flex-col gap-[14px] tracking-widest  text-[14px] text-black2 select-none mt-1">
        <Link
          to={"/profile"}
          onClick={() => props.setActiveBubble(null)}
          className="flex items-center gap-2 cursor-pointer w-min"
        >
          <UserIcon className="h-[18px] aspect-square translate-y-[-2px] [&>path]:fill-black2" />{" "}
          პროფილი
        </Link>
        <Link
          to={"/orders"}
          onClick={() => props.setActiveBubble(null)}
          className="flex items-center gap-2 cursor-pointer w-min"
        >
          <StackedIcon className="h-[18px] aspect-square translate-y-[-2px] [&>path]:fill-black2" />{" "}
          შეკვეთები
        </Link>
        <Link
          to={"/logout"}
          onClick={() => props.setActiveBubble(null)}
          className="flex items-center gap-2 cursor-pointer w-min"
        >
          <LogoutIcon className="h-[18px] aspect-square translate-y-[-2px] [&>path]:stroke-black2" />{" "}
          გასვლა
        </Link>
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
      className={`rounded-info h-[40px] aspect-square flex justify-center items-center shadow-defH select-none cursor-pointer transition-colors ${
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

const ResponsiveNavBar = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <>
      <div
        onClick={() => setIsActive((state) => !state)}
        className={` relative z-10 rounded-info h-[40px] aspect-square flex flex-col justify-center items-end gap-1.5 px-2 shadow-def select-none cursor-pointer transition-colors ${
          isActive ? "bg-whiteHover " : "bg-white "
        }`}
      >
        <span
          className={`transition-transform h-[2px] w-full bg-black2 ${
            isActive ? "translate-y-[8px] -rotate-45" : ""
          }`}
        ></span>
        <span
          className={`transition-opacity h-[2px] w-2/4 bg-black2 ${
            isActive ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`transition-transform h-[2px]  bg-black2 ${
            isActive ? "translate-y-[-8px] w-full rotate-45" : "w-1/4"
          }`}
        ></span>
      </div>
      <div className="h-full w-full fixed top-0 left-0 bg-white translate-x-full flex flex-col items-center justify-center">
        <div className="flex-col items-center">1</div>
      </div>
      <div
        className={`h-full w-full fixed bg-white top-0 left-full flex items-center flex-col duration-300 transition-transform py-[25%] ${
          isActive ? "-translate-x-full" : ""
        }`}
      >
        <div className="flex items-center gap-3 text-black2 text-[18px]">
          <IconBlue className="h-[32px] aspect-square" />
          ლუკა
        </div>
        <div className=" bg-lineDecor h-[3px] w-[40px] rounded-md my-4"></div>
        <div className="flex flex-col gap-5 text-black2 w-[80%] max-w-[320px] mt-10 font-medium text-[15px]">
          {RespoRow.map((e: Trow) => (
            <div key={e.id} className="flex gap-3 items-center">
              <e.icon
                className={` ${
                  e.type == "fill"
                    ? "[&>path]:fill-black2"
                    : "[&>path]:stroke-black2"
                } `}
              />
              {e.title}
            </div>
          ))}
        </div>
        <div className="flex gap-5 flex-col w-[90%] max-w-[320px] mt-auto">
          <button className="h-[40px] w-full flex items-center gap-4 bg-[rgba(52,214,117,0.05)] text-[#34D675] rounded-xl font-medium text-[14px]">
            <div className="h-[40px] aspect-square flex justify-center items-center bg-[#34D675] rounded-xl">
              <PhoneIcon className="h-[20px] aspect-square" />
            </div>
            დარეკვა
          </button>
          <button className="h-[40px] w-full flex items-center gap-4 bg-[rgba(64,171,253,0.05)] text-[#40AAFD] rounded-xl font-medium text-[14px]">
            <div className="h-[40px] aspect-square flex justify-center items-center bg-[#40AAFD] rounded-xl">
              <FacebookIcon className="h-[20px] aspect-square flex justify-center items-center" />
            </div>
            Facebook გვერდი
          </button>
          <button className="h-[40px] w-full flex items-center gap-4 bg-[rgba(247,37,132,0.05)] text-[#F72585] rounded-xl font-medium text-[14px]">
            <div className="h-[40px] aspect-square flex justify-center items-center bg-[#F72585] rounded-xl">
              <InstagramIcon className="h-[20px] aspect-square" />
            </div>
            Instagram გვერდი
          </button>
        </div>
      </div>
    </>
  );
};
type Trow = {
  id: number;
  title: string;
  icon: ({ className }: any) => JSX.Element;
  link: string;
  type: string;
};
const RespoRow: Trow[] = [
  {
    id: 0,
    title: "პროფილი",
    icon: ({ className }: any) => (
      <UserIcon
        className={`h-[22px] [&>rect]:transition-all aspect-square ${className}`}
      />
    ),
    type: "fill",
    link: "/",
  },
  {
    id: 1,
    title: "შეტყობინებები",
    icon: ({ className }: any) => (
      <NotificationIcon
        className={`h-[22px] [&>rect]:transition-all aspect-square ${className}`}
      />
    ),
    type: "fill",
    link: "/",
  },
  {
    id: 2,
    title: "ჩათის დაწყება",
    icon: ({ className }: any) => (
      <ChatIcon
        className={`h-[22px] [&>rect]:transition-all aspect-square ${className}`}
      />
    ),
    type: "stroke",

    link: "/",
  },
  {
    id: 3,
    title: "შეკვეთები",
    icon: ({ className }: any) => (
      <StackedIcon
        className={`h-[22px] [&>path]:transition-all aspect-square ${className}`}
      />
    ),
    type: "fill",

    link: "/",
  },
  {
    id: 4,
    title: "გასვლა",
    icon: ({ className }: any) => (
      <LogoutIcon
        className={`h-[22px] [&>rect]:transition-all aspect-square ${className}`}
      />
    ),
    type: "stroke",

    link: "/",
  },
];
