import { useState } from "react";
import {
  Icon,
  MoonIcon,
  PhoneIcon,
  StackedIcon,
  UserIcon,
} from "../assets/icons/icons";

function SideBar() {
  const [rowActive, setRowActive] = useState(0);
  return (
    <>
      <div className="mobile:hidden w-[80px] min-w-[80px] h-[100vh] min-h-[350px] sticky top-0 bg-gradient-to-r from-main to-secondMain py-[25px] flex justify-center select-none">
        <div className="flex flex-col justify-between gap-3.5 ">
          <div className="first_row flex items-center flex-col gap-3.5">
            {firstRow.map((e: Trow) => (
              <div
                key={e.id}
                onClick={() => setRowActive(e.id)}
                className={`h-[44px] aspect-square rounded-[15px]  ${
                  rowActive == e.id ? "bg-white" : "bg-whiteBg"
                } backdrop-blur-[20px] flex justify-center items-center cursor-pointer transition-all ${
                  rowActive == e.id
                    ? "hover:opacity-90"
                    : "hover:bg-whiteBgHover"
                } `}
              >
                <e.icon
                  className={
                    rowActive == e.id
                      ? "[&>path]:fill-main"
                      : e.id !== 0
                      ? "[&>path]:fill-white"
                      : "[&>rect]:fill-white"
                  }
                />
              </div>
            ))}
          </div>
          <div className="second_row flex items-center flex-col gap-3.5">
            <div className="h-[44px] aspect-square rounded-[15px] bg-whiteBg backdrop-blur-[20px] flex justify-center items-center cursor-pointer transition-colors hover:bg-whiteBgHover active:bg-whiteBgActive">
              <PhoneIcon className="h-[22px] aspect-square [&>path]:stroke-white" />
            </div>
            <div className="h-[44px] aspect-square rounded-[15px] bg-whiteBg backdrop-blur-[20px] flex justify-center items-center cursor-pointer transition-colors hover:bg-whiteBgHover active:bg-whiteBgActive">
              <MoonIcon className="h-[22px] aspect-square [&>path]:fill-white" />
            </div>
          </div>
        </div>
      </div>
      <MobileBar />
    </>
  );
}
type Trow = {
  id: number;
  icon: ({ className }: any) => JSX.Element;
  link: string;
};
const firstRow: Trow[] = [
  {
    id: 0,
    icon: ({ className }: any) => (
      <Icon
        className={`h-[22px] [&>rect]:transition-all aspect-square ${className}`}
      />
    ),

    link: "/",
  },
  {
    id: 1,
    icon: ({ className }: any) => (
      <UserIcon
        className={`h-[22px] [&>path]:transition-all aspect-square  ${className}`}
      />
    ),
    link: "/",
  },
  {
    id: 2,
    icon: ({ className }: any) => (
      <StackedIcon
        className={`h-[22px] [&>path]:transition-all aspect-square  ${className}`}
      />
    ),
    link: "/",
  },
];

export default SideBar;

function MobileBar() {
  const [active, setActive] = useState("/");
  return (
    <div className="mobile:flex fixed z-10 bottom-0 h-[65px] w-full left-0 bg-main hidden justify-between px-8 items-center rounded-t-3xl">
      <div className="flex gap-4">
        <div
          onClick={() => setActive("/User")}
          className={` h-[44px] aspect-square rounded-[15px] backdrop-blur-[20px] flex justify-center items-center cursor-pointer transition-all ${
            active == "/User" ? "bg-white" : "bg-whiteBg"
          } backdrop-blur-[20px] flex justify-center items-center cursor-pointer transition-all ${
            active == "/User" ? "hover:opacity-90" : "hover:bg-whiteBgHover"
          }`}
        >
          <UserIcon
            className={`h-[22px] aspect-square ${
              active == "/User" ? "[&>path]:fill-main" : "[&>path]:fill-white"
            }`}
          />
        </div>
        <div
          onClick={() => setActive("/Orders")}
          className={` h-[44px] aspect-square rounded-[15px] backdrop-blur-[20px] flex justify-center items-center cursor-pointer transition-all ${
            active == "/Orders" ? "bg-white" : "bg-whiteBg"
          } backdrop-blur-[20px] flex justify-center items-center cursor-pointer transition-all ${
            active == "/Orders" ? "hover:opacity-90" : "hover:bg-whiteBgHover"
          }`}
        >
          <StackedIcon
            className={`h-[22px] aspect-square ${
              active == "/Orders" ? "[&>path]:fill-main" : "[&>path]:fill-white"
            }`}
          />
        </div>
      </div>
      <div className="flex gap-4">
        <div
          onClick={() => setActive("/")}
          className={` h-[44px] aspect-square rounded-[15px] backdrop-blur-[20px] flex justify-center items-center cursor-pointer transition-all ${
            active == "/" ? "bg-white" : "bg-whiteBg"
          } backdrop-blur-[20px] flex justify-center items-center cursor-pointer transition-all ${
            active == "/" ? "hover:opacity-90" : "hover:bg-whiteBgHover"
          }`}
        >
          <Icon
            className={`h-[22px] [&>rect]:transition-all aspect-square ${
              active == "/" ? "[&>rect]:fill-main" : "[&>rect]:fill-white"
            }`}
          />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="h-[44px] aspect-square rounded-[15px] bg-whiteBg backdrop-blur-[20px] flex justify-center items-center cursor-pointer transition-colors hover:bg-whiteBgHover active:bg-whiteBgActive">
          <PhoneIcon className="h-[22px] aspect-square [&>path]:stroke-white" />
        </div>
        <div className="h-[44px] aspect-square rounded-[15px] bg-whiteBg backdrop-blur-[20px] flex justify-center items-center cursor-pointer transition-colors hover:bg-whiteBgHover active:bg-whiteBgActive">
          <MoonIcon className="h-[22px] aspect-square [&>path]:fill-white" />
        </div>
      </div>
    </div>
  );
}
