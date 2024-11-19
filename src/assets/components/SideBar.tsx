import { useState } from "react";
import {
  Icon,
  MoonIcon,
  PhoneIcon,
  StackedIcon,
  UserIcon,
} from "../icons/icons";

function SideBar() {
  const [rowActive, setRowActive] = useState(0);
  return (
    <div className="w-[80px] h-[100vh] min-h-[350px] sticky bg-gradient-to-r from-main to-secondMain py-[25px] flex justify-center select-none">
      <div className="flex flex-col justify-between gap-3.5 ">
        <div className="first_row flex items-center flex-col gap-3.5">
          {firstRow.map((e: Trow) => (
            <div
              key={e.id}
              onClick={() => setRowActive(e.id)}
              className={`h-[44px] aspect-square rounded-[15px]  ${
                rowActive == e.id ? "bg-white" : "bg-whiteBg"
              } backdrop-blur-[20px] flex justify-center items-center cursor-pointer transition-all ${
                rowActive == e.id ? "hover:opacity-90" : "hover:bg-whiteBgHover"
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

// <div className="h-[44px] aspect-square rounded-[15px] bg-whiteBg backdrop-blur-[20px] flex justify-center items-center cursor-pointer transition-colors hover:bg-whiteBgHover">
//   <UserIcon className="h-[22px] aspect-square [&>path]:fill-white" />
// </div>
// <div className="h-[44px] aspect-square rounded-[15px] bg-whiteBg backdrop-blur-[20px] flex justify-center items-center cursor-pointer transition-colors hover:bg-whiteBgHover">
//   <StackedIcon className="h-[22px] aspect-square [&>path]:fill-white" />
// </div>
export default SideBar;
