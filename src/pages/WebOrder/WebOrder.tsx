import Button from "../../components/interface/Button";

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
        <div className=" bg-lineDecor2 h-2 w-10 rounded-md mx-auto"></div>
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
    </section>
  );
}
