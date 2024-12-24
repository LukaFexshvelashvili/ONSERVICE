export const WebServices: TWebService[] = [
  {
    id: 0,
    name: "სტარტერი",
    start_color: null,
    end_color: null,
    start_price: 249,
    end_price: 599,
    old_start_price: 399,
    old_end_price: 699,
    currency: "GEL",
    start_deadline_days: 2,
    end_deadline_days: 5,
    services: [
      "საინფორმაციო ვებგვერდი",
      "1-3 გვერდი",
      "2 ენის ჩაშენება",
      "SEO ოპტიმიზაცია",
      "GOOGLE ANALYTICS მიბმა",
    ],
  },
  {
    id: 1,
    name: "ექსპო",
    start_color: "#6B6EFF",
    end_color: "#1B7EFF",
    start_price: 849,
    end_price: 1299,
    old_start_price: 999,
    old_end_price: 1449,
    currency: "GEL",
    start_deadline_days: 7,
    end_deadline_days: 16,
    services: [
      "FULLSTACK ვებგვერდი",
      "3-6 გვერდი",
      "3 ენის ჩაშენება",
      "SEO ოპტიმიზაცია",
      "GOOGLE ANALYTICS მიბმა",
      "სერვერის მხარე",
      "მონაცემთა ბაზა",
    ],
  },
  {
    id: 2,
    name: "ბიზნესი",
    start_color: "#FF239C",
    end_color: "#FF7C35",
    start_price: 1649,
    end_price: 2599,
    old_start_price: 1849,
    old_end_price: 2799,
    currency: "GEL",
    start_deadline_days: 14,
    end_deadline_days: 31,
    services: [
      "კომერციული ვებგვერდი",
      "6+ გვერდი (მაქს 14)",
      "3-5 ენის ჩაშენება",
      "SEO ოპტიმიზაცია",
      "GOOGLE ANALYTICS მიბმა",
      "სერვერის მხარე",
      "მონაცემთა ბაზა",
    ],
  },
  {
    id: 3,
    name: "შეთანხმებით",
    start_color: "#39DBC0",
    end_color: "#0085E3",
    start_price: null,
    end_price: null,
    old_start_price: null,
    old_end_price: null,
    currency: "GEL",
    start_deadline_days: null,
    end_deadline_days: null,
    services: [
      "არჩევითი ვებგვერდი",
      "? გვერდი",
      "? ენის ჩაშენება",
      "SEO ოპტიმიზაცია",
      "GOOGLE ANALYTICS მიბმა",
      "სერვერის მხარე",
      "მონაცემთა ბაზა",
    ],
  },
];

export type TWebService = {
  id: number;
  name: string;
  start_color: null | string;
  end_color: null | string;
  start_price: number | null;
  end_price: number | null;
  old_start_price: number | null;
  old_end_price: number | null;
  currency: string;
  start_deadline_days: number | null;
  end_deadline_days: number | null;
  services: string[];
};
