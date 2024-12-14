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
      <div className="w-[15%] text-desc">
        <span className="hidden ordersChange:block text-black3">ID:</span> #{id}
      </div>
      <div className="w-[20%] text-black">
        <span className="hidden ordersChange:block text-black3">შეკვეთა:</span>{" "}
        {order_type}
      </div>
      <div className="w-[15%] text-black2">
        <span className="hidden ordersChange:block text-black3">
          განთავსების დრო:
        </span>{" "}
        {order_date}
      </div>
      <div className="w-[15%] text-black2">
        <span className="hidden ordersChange:block text-black3">
          დასრულების დრო:
        </span>{" "}
        {order_date_deadline}
      </div>
      <div className="w-[15%] text-main">
        <span className="hidden ordersChange:block text-black3">ფასი:</span>{" "}
        {order_price}₾
      </div>
      <div className="w-[20%] flex flex-col items-center text-black2 justify-end ordersChange:justify-center">
        <span className="hidden ordersChange:block text-black3">სტატუსი:</span>{" "}
        {get_order_status(order_status)}
      </div>
    </div>
  );
}
function get_order_status(status: number): JSX.Element {
  switch (status) {
    case 0:
      return (
        <div className="flex items-center">
          გაუქმებული
          <div className=" h-[12px] aspect-square rounded-[4px] bg-red ml-2 translate-y-[-1px]"></div>
        </div>
      );
    case 1:
      return (
        <div className="flex items-center">
          მიმდინარე
          <div className=" h-[12px] aspect-square rounded-[4px] bg-yellow ml-2 translate-y-[-1px]"></div>
        </div>
      );
    case 2:
      return (
        <div className="flex items-center">
          დასრულებული
          <div className=" h-[12px] aspect-square rounded-[4px] bg-green ml-2 translate-y-[-1px]"></div>
        </div>
      );
    default:
      return <>...</>;
  }
}
