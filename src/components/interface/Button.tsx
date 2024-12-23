import { Link } from "react-router-dom";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <Link to="/your-target-path">
      {" "}
      <button className="relative bg-gradient-to-r from-main to-secondMain h-[50px] w-[300px] rounded-md text-white text-start px-4 tracking-wide font-regular overflow-hidden before:absolute before:h-full before:w-[10px] before:bg-whiteDecorBg before:right-[80px] before:top-0 before:skew-x-12 after:absolute after:h-full after:w-[10px] after:bg-whiteDecorBg after:right-[60px] after:top-0 after:skew-x-12 before:transition-transform before:hover:translate-x-5 after:transition-transform after:hover:translate-x-5">
        {children}
      </button>{" "}
    </Link>
  );
}