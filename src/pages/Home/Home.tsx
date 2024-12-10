import { SkeletonWindow } from "../../assets/decorations/Decorations";
import { AdsIcon, DesignIcon, WebIcon } from "../../assets/icons/icons";
import WebDeveloping from "../../assets/images/WebDeveloping.png";
import DesignMaking from "../../assets/images/DesignMaking.png";
import Advertisement from "../../assets/images/Advertisement.png";
import Printing from "../../assets/images/Printing.png";
import OnHome from "../../assets/images/OnHome.png";

import Card from "../../components/globals/Card";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-between medium:flex-col-reverse medium:gap-[80px]">
        <h1 className="text-black text-[52px] mobileSm:text-[36px] mobileSm:leading-[48px] leading-[64px] flex-1 medium:text-center medium:w-full">
          ჩვენ გთავაზობთ <br /> <span className="text-main">თანამედროვე </span>{" "}
          <br /> ციფრულ სერვისებს
        </h1>
        <div className="flex-1 flex items-center justify-end pr-[5%] ">
          <SkeletonWindow className="rounded-info h-[170px] mobileSm:h-[130px] shadow-[20px_20px_rgba(33,_149,_243,_0.3),_40px_40px_rgba(33,_149,_243,_0.1)]" />
        </div>
      </div>
      <div className="info_card_row flex justify-start items-center gap-4 font-bpg mt-12 text-[14px] flex-wrap medium:justify-center">
        <div className="info_card px-4 h-[50px] rounded-[13px] text-black shadow-def flex items-center bg-bg select-none cursor-pointer transition-colors hover:bg-whiteHover ">
          <div className="info_card_icon bg-green rounded-[8px] h-[32px] p-[6px] aspect-square center mr-4">
            <WebIcon className="h-full aspect-square" />
          </div>
          ვებგვერდის დამზადება
        </div>
        <div className="info_card px-4 h-[50px] rounded-[13px] text-black shadow-def flex items-center bg-bg select-none cursor-pointer transition-colors hover:bg-whiteHover ">
          <div className="info_card_icon bg-red rounded-[8px] h-[32px] p-[6px] aspect-square center mr-4">
            <DesignIcon className="h-full aspect-square" />
          </div>
          დიზაინის დამზადება
        </div>
        <div className="info_card px-4 h-[50px] rounded-[13px] text-black shadow-def flex items-center bg-bg select-none cursor-pointer transition-colors hover:bg-whiteHover ">
          <div className="info_card_icon bg-yellow rounded-[8px] h-[32px] p-[6px] aspect-square center mr-4">
            <AdsIcon className="h-full aspect-square" />
          </div>
          GOOGLE რეკლამირება
        </div>
      </div>
      <div className="line bg-lineDecor h-[2px] w-full my-8"></div>
      <h3 className="text-[20px] text-black2 mb-5">სერვისები</h3>
      <div className="flex gap-7 my-3 w-full overflow-hidden">
        <Card
          text="შეუკვეთე ვებგვერდი"
          img={WebDeveloping}
          alt="WebDeveloping"
        />
        <Card text="შეუკვეთე დიზაინი" img={DesignMaking} alt="DesignMaking" />
        <Card text="შეუკვეთე რეკლამა" img={Advertisement} alt="Advertisement" />
        <Card text="დაბეჭდე ბანერი/პოსტერი" img={Printing} alt="Printing" />
      </div>
      <h3 className="text-[20px] text-black2 mb-5 mt-14">პროექტები</h3>
      <div className="flex gap-7 my-3">
        <Card
          text="უძრავი ქონების ყიდვა/გაყიდვა"
          img={OnHome}
          alt="OnHome.Ge"
        />
      </div>
    </>
  );
}
