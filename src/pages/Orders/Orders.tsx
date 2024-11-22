import OrderCard from "./OrderCard";

export default function Orders() {
  return (
    <>
      <h1 className="text-black text-[52px] leading-[64px] flex-1">
        გამარჯობა, <span className="text-main">ლუკა </span> <br />
      </h1>
      <p className="mt-5 text-desc text-[26px]">თქვენი შეკვეთები</p>
      <div className="line bg-lineDecor h-[4px] w-[150px] mx-auto mt-5 rounded-md"></div>
      <div className="mt-6 flex flex-col gap-2">
        <OrderCard
          id={234412}
          order_type="ვებგვერდი"
          order_date="11/13/2024"
          order_date_deadline="11/24/2024"
          order_price={241}
          order_status={1}
        />
        <OrderCard
          id={234410}
          order_type="ვებგვერდი"
          order_date="11/11/2024"
          order_date_deadline="11/21/2024"
          order_price={220}
          order_status={2}
        />
        <OrderCard
          id={234409}
          order_type="რეკლამა"
          order_date="11/4/2024"
          order_date_deadline="11/10/2024"
          order_price={50}
          order_status={0}
        />{" "}
        <OrderCard
          id={234402}
          order_type="დიზაინი"
          order_date="11/2/2024"
          order_date_deadline="11/8/2024"
          order_price={150}
          order_status={0}
        />
      </div>
    </>
  );
}
