import { useEffect, useState } from "react";
import {
  Icon,
  MoonIcon,
  PhoneIcon,
  StackedIcon,
  UserIcon,
} from "../assets/icons/icons";
import { Link, useLocation } from "react-router-dom";

function SideBar() {
  const [rowActive, setRowActive] = useState(0);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes("/profile")) {
      setRowActive(1);
    } else if (location.pathname.includes("/orders")) {
      setRowActive(2);
    } else {
      setRowActive(0);
    }
  }, [location.pathname]);

  return (
    <>
      <div className="mobile:hidden w-[80px] min-w-[80px] h-[100vh] min-h-[350px] sticky top-0 bg-gradient-to-r from-main to-secondMain py-[25px] flex justify-center select-none">
        <div className="flex flex-col justify-between gap-3.5 ">
          <div className="first_row flex items-center flex-col gap-3.5">
            {firstRow.map((e: Trow) => (
              <Link key={e.id} to={e.link}>
                <div
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
              </Link>
            ))}
          </div>
          <div className="second_row flex items-center flex-col gap-3.5">
            <Link to={"tel:+995598159215"}>
              <div className="h-[44px] aspect-square rounded-[15px] bg-whiteBg backdrop-blur-[20px] flex justify-center items-center cursor-pointer transition-colors hover:bg-whiteBgHover active:bg-whiteBgActive">
                <PhoneIcon className="h-[22px] aspect-square [&>path]:stroke-white" />
              </div>
            </Link>
            <div className="h-[44px] aspect-square rounded-[15px] bg-whiteBg backdrop-blur-[20px] flex justify-center items-center cursor-pointer transition-colors hover:bg-whiteBgHover active:bg-whiteBgActive">
              <MoonIcon className="h-[22px] aspect-square [&>path]:fill-white" />
            </div>
          </div>
        </div>
      </div>
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
    link: "/profile",
  },
  {
    id: 2,
    icon: ({ className }: any) => (
      <StackedIcon
        className={`h-[22px] [&>path]:transition-all aspect-square  ${className}`}
      />
    ),
    link: "/orders",
  },
];

export default SideBar;
