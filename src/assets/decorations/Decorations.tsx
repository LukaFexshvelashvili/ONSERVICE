export const SkeletonWindow = (props: any) => (
  <svg
    {...props}
    viewBox="0 0 276 162"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="276" height="162" rx="15" fill="#2196F3" />
    <rect x="14" y="16" width="50" height="18" rx="5" className="fill-bg" />
    <rect x="244" y="16" width="18" height="18" rx="5" className="fill-bg" />
    <rect x="221" y="16" width="18" height="18" rx="5" className="fill-bg" />
    <rect x="14" y="41" width="248" height="105" rx="5" className="fill-bg" />
  </svg>
);
