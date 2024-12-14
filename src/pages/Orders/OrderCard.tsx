export default function OrderCard({
  id,
  order_type,
  order_date,
  order_date_deadline,
  order_price,
  order_status,
}: {
  id: number;
  order_type: string;
  order_date: string;
  order_date_deadline: string;
  order_price: number;
  order_status: number;
}) {
  return (
    <div className="flex items-center text-[14px] h-[50px] w-full rounded-info shadow-def bg-white px-10 ordersChange:flex-col ordersChange:h-auto ordersChange:py-5 ordersChange:text-center ordersChange:[&>div]:w-full ordersChange:gap-2">
      <div className="w-[15%] text-desc">#{id}</div>
      <div className="w-[20%] text-black">{order_type}</div>
      <div className="w-[15%] text-black2">{order_date}</div>
      <div className="w-[15%] text-black2">{order_date_deadline}</div>
      <div className="w-[15%] text-main">{order_price}₾</div>
      <div className="w-[20%] flex items-center text-black2 justify-end ordersChange:justify-center">
        {get_order_status(order_status)}
      </div>
    </div>
  );
}
function get_order_status(status: number): JSX.Element {
  switch (status) {
    case 0:
      return (
        <>
          გაუქმებული
          <div className=" h-[12px] aspect-square rounded-[4px] bg-red ml-4"></div>
        </>
      );
    case 1:
      return (
        <>
          მიმდინარე
          <div className=" h-[12px] aspect-square rounded-[4px] bg-yellow ml-4"></div>
        </>
      );
    case 2:
      return (
        <>
          დასრულებული
          <div className=" h-[12px] aspect-square rounded-[4px] bg-green ml-4"></div>
        </>
      );
    default:
      return <>...</>;
  }
}
