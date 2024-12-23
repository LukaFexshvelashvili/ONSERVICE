import { Link } from "react-router-dom";

export default function Card(props: {
  text: string;
  img: string;
  alt: string;
  link: string;
}) {
  return (
    <Link
      to={props.link}
      className="flickfx group rounded-cards h-[185px] w-[370px] min-w-[370px] bg-white shadow-def flex- flex-col overflow-hidden select-none transition-colors hover:bg-whiteHover cursor-pointer"
    >
      <div className=" image_side h-[140px] w-full relative">
        <img
          src={props.img}
          className="flickfx group-hover:opacity-95 transition-opacity absolute h-full w-full object-cover top-0 left-0"
          alt={props.alt}
        />
      </div>
      <div className="h-[45px] w-full px-5 flex items-center text-[14px] font-bpg text-black2 tracking-[1.5px]">
        {props.text}
      </div>
    </Link>
  );
}
