import {
  ContactFacebookIcon,
  ContactPhoneIcon,
  ContactViberIcon,
  ContactWhatsappIcon,
} from "../../assets/icons/contact/ContactIcons";
import ServicePlan from "../../components/globals/ServicePlan";
import Button, { ButtonMini } from "../../components/interface/Button";
import { TWebService, WebServices } from "../../services/ServiceLists";

export default function WebOrder() {
  return (
    <div className="flex items-center justify-between medium:flex-col-reverse medium:gap-[80px]">
      <div className="flex flex-col gap-3 items-cente w-full">
        <h1 className="text-black text-center text-[52px] mobileSm:text-[36px] mobileSm:leading-[48px] leading-[64px] flex-1 medium:text-center medium:w-full">
          <span className="text-main">ვებგვერდის</span> დამზადება
        </h1>
        <p className=" text-desc text-center ">
          ვებგვერდის დამზადება თანამედროვე ტექნოლოგიების გამოყენებით
        </p>
        <div className=" bg-lineDecor2 h-1 w-14 rounded-md mx-auto my-3"></div>
        <div className="flex gap-4 justify-center">
          <Button>პროექტები</Button>
          <Button>შეკვეთა</Button>
          <Button>ჩვენს შესახებ</Button>
        </div>
        <div className="rounded-lg bg-white w-full p-5 mt-12">
          <p className=" text-desc text-start text-[18px]">პროექტები</p>
          <div className="flex flex-wrap justify-center gap-5 mb-5 mt-8">
            <div className="h-[200px] w-[350px] bg-whiteHover rounded-lg"></div>
            <div className="h-[200px] w-[350px] bg-whiteHover rounded-lg"></div>
            <div className="h-[200px] w-[350px] bg-whiteHover rounded-lg"></div>
            <div className="h-[200px] w-[350px] bg-whiteHover rounded-lg"></div>
            <div className="h-[200px] w-[350px] bg-whiteHover rounded-lg"></div>
            <div className="h-[200px] w-[350px] bg-whiteHover rounded-lg"></div>
            <div className="h-[200px] w-[350px] bg-whiteHover rounded-lg"></div>
            <div className="h-[200px] w-[350px] bg-whiteHover rounded-lg"></div>
          </div>
        </div>
        <Services />
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section className="mt-10">
      <h2 className=" text-desc text-center text-[24px]">სერვისები</h2>
      <div className="flex gap-5 items-start justify-center mt-10 flex-wrap">
        {WebServices.map((service: TWebService) => (
          <ServicePlan key={service.id} data={service} />
        ))}
      </div>
      <div className="bg-mainClear border-[2px] border-main rounded-lg p-4 text-main mb-5 mt-10 flex flex-col gap-3 max-w-[1350px] mx-auto">
        <p className=" underline text-[18px]">გაითვალისწინეთ</p>
        <p className=" font-regular text-[17px] tracking-wider">
          პროექტის ფასი განისაზღვრება მისი ფუნქციებით და ზომით რომელიც მოცემული
          პაკეტის შუალედიდან მიიღება
        </p>
        <p className=" font-regular text-[17px] tracking-wider">
          შეკვეთის სავარაუდო დროის დასრულების გადაჭარბებისას 1-3 დღით
          დაგიბრუნდებათ თანხის 5%, ხოლო 3-6 დღით დაგვიანებისას თანხის 10%
        </p>
      </div>
      <div className="bg-white shadow-def rounded-lg p-4 mb-5 mt-5 flex flex-col gap-3 max-w-[1350px] mx-auto">
        <p className="text-blackF text-[16px]">შეუკვეთე ახლავე</p>
        <div className="flex gap-5 justify-center items-center my-5">
          <ButtonMini color="#40AAFD">
            დაგვირეკე{" "}
            <ContactPhoneIcon className="h-[22px] aspect-square absolute right-5" />
          </ButtonMini>
          <ButtonMini color="#34D675">
            <span className=" font-poppinsRegular">whatsapp</span>{" "}
            <ContactWhatsappIcon className="h-[22px] aspect-square absolute right-5" />
          </ButtonMini>
          <ButtonMini color="#AB40FD">
            <span className=" font-poppinsRegular">viber</span>{" "}
            <ContactViberIcon className="h-[22px] aspect-square absolute right-5" />
          </ButtonMini>
          <ButtonMini color="#4076FD">
            <span className=" font-poppinsRegular">facebook</span>{" "}
            <ContactFacebookIcon className="h-[22px] aspect-square absolute right-5" />
          </ButtonMini>
        </div>
      </div>
    </section>
  );
}
