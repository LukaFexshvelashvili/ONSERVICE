import { SkeletonWindow } from "../../assets/decorations/Decorations";
import { AdsIcon, DesignIcon, WebIcon } from "../../assets/icons/icons";

export default function Home() {
  return (
    <div className="mt-12">
      <div className="flex items-center justify-between">
        <h1 className="text-black text-[52px] leading-[64px] flex-1">
          ჩვენ გთავაზობთ <br /> <span className="text-main">თანამედროვე </span>{" "}
          <br /> ციფრულ სერვისებს
        </h1>
        <div className="flex-1 center">
          <SkeletonWindow className="rounded-info h-[170px] shadow-[20px_20px_rgba(33,_149,_243,_0.3),_40px_40px_rgba(33,_149,_243,_0.1)]" />
        </div>
      </div>
      <div className="info_card_row flex justify-start items-center gap-6 font-bpg mt-12 text-[16px]">
        <div className="info_card px-5 h-[50px] rounded-info text-black shadow-def flex items-center bg-bg select-none cursor-pointer transition-colors hover:bg-whiteHover ">
          <div className="info_card_icon bg-green rounded-[10px] h-[33px] aspect-square center mr-5">
            <WebIcon className="h-[20px] aspect-square" />
          </div>
          ვებგვერდის დამზადება
        </div>
        <div className="info_card px-5 h-[50px] rounded-info text-black shadow-def flex items-center bg-bg select-none cursor-pointer transition-colors hover:bg-whiteHover ">
          <div className="info_card_icon bg-red rounded-[10px] h-[33px] aspect-square center mr-5">
            <DesignIcon className="h-[20px] aspect-square" />
          </div>
          დიზაინის დამზადება
        </div>
        <div className="info_card px-5 h-[50px] rounded-info text-black shadow-def flex items-center bg-bg select-none cursor-pointer transition-colors hover:bg-whiteHover ">
          <div className="info_card_icon bg-yellow rounded-[10px] h-[33px] aspect-square center mr-5">
            <AdsIcon className="h-[20px] aspect-square" />
          </div>
          GOOGLE რეკლამირება
        </div>
      </div>
      <div className="line bg-lineDecor h-[2px] w-full my-8"></div>
    </div>
  );
}
