import WebDeveloping from "../../assets/images/WebDeveloping.png";
import DesignMaking from "../../assets/images/DesignMaking.png";
import Advertisement from "../../assets/images/Advertisement.png";
import Printing from "../../assets/images/Printing.png";

export default function AuthSideContent() {
  return (
    <div className="relative h-full w-full flex flex-col items-center justify-evenly overflow-hidden">
      <div className=" absolute h-[400px] aspect-square rounded-full bg-transparent border-[10px] border-whiteDecorBg top-[-10%] right-[-10%]  "></div>
      <div className=" absolute h-[200px] aspect-square rounded-full bg-transparent border-[10px] border-whiteDecorBg top-[-10%] right-[-10%] blur-[5px] "></div>
      <div className=" absolute h-[400px] aspect-square rounded-full bg-transparent border-[10px] border-whiteDecorBg top-[-15%] left-[-15%]  "></div>
      <div className=" absolute h-[250px] aspect-square rounded-full bg-transparent border-[10px] border-whiteDecorBg top-[30%] translate-x-[-100px]"></div>
      <div className=" absolute h-[200px] aspect-square rounded-full bg-transparent border-[10px] border-whiteDecorBg top-[35%] right-[10%] blur-[5px]"></div>
      <div className=" absolute h-[300px] aspect-square rounded-full bg-transparent border-[10px] border-whiteDecorBg top-[40%] left-[-10%] blur-[5px]"></div>
      <div className=" absolute h-[350px] aspect-square rounded-full bg-transparent border-[10px] border-whiteDecorBg top-[60%] right-[-10%]"></div>
      <div className=" absolute h-[200px] aspect-square rounded-full bg-transparent border-[10px] border-whiteDecorBg bottom-[-10%]  blur-[5px]"></div>
      <div className=" absolute h-[200px] aspect-square rounded-full bg-transparent border-[10px] border-whiteDecorBg bottom-[5%]  left-[10%]"></div>

      <CardDecor
        text="შეუკვეთე ვებგვერდი"
        img={WebDeveloping}
        alt="WebDeveloping"
        right
      />
      <CardDecor
        text="შეუკვეთე დიზაინი"
        img={DesignMaking}
        alt="DesignMaking"
      />
      <CardDecor
        text="შეუკვეთე რეკლამა"
        img={Advertisement}
        alt="Advertisement"
        right
      />
      <CardDecor text="დაბეჭდე ბანერი/პოსტერი" img={Printing} alt="Printing" />
    </div>
  );
}
export function CardDecor(props: {
  text: string;
  img: string;
  alt: string;
  right?: boolean;
}) {
  return (
    <div
      className={` ${
        props.right ? "translate-x-[25%]" : "translate-x-[-25%]"
      } group rounded-cards h-[175px] w-[340px] backdrop-blur-[5px] bg-whiteBg shadow-def flex flex-col overflow-hidden select-none transition-colors hover:bg-whiteBgHover cursor-pointer`}
    >
      <div className=" image_side h-[140px] w-full relative">
        <img
          src={props.img}
          className="flickfx group-hover:opacity-95  transition-opacity absolute h-full w-full object-cover top-0 left-0"
          alt={props.alt}
        />
      </div>
      <div className="h-[40px] w-full px-5 flex items-center text-[13px] font-regular text-white tracking-wide">
        {props.text}
      </div>
    </div>
  );
}
