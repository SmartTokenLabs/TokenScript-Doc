export const Logo = () => {
  return (
    <div className="logo">
      <div className="white-logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="#fff"
            stroke="#fff"
            strokeLinecap="round"
            strokeWidth="1.382"
            d="M12 .787l11.309 6.169v9.543L12 22.667.691 16.5V6.956L12 .787z"
          ></path>
          <path
            fill="#01052F"
            stroke="#fff"
            strokeLinecap="round"
            strokeWidth="1.382"
            d="M1.443 6.545L12 .787l10.557 5.758L12 12.304 1.443 6.545z"
          ></path>
        </svg>
        <span className="text-[20px] font-medium text-white">
          Smart Layer Launchpad
        </span>
      </div>

      <div className="dark-logo">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 0.787169L23.3089 6.95569V16.4989L12 22.6674L0.691052 16.4989V6.95569L12 0.787169Z"
            fill="black"
            stroke="black"
            strokeWidth="1.3821"
            strokeLinecap="round"
          />
          <path
            d="M1.44314 6.54545L12 0.787169L22.5569 6.54545L12 12.3037L1.44314 6.54545Z"
            fill="white"
            stroke="#01052F"
            strokeWidth="1.3821"
            strokeLinecap="round"
          />
        </svg>

        <span className="text-[20px] font-medium text-black">
          Smart Layer Launchpad
        </span>
      </div>
    </div>
  );
};
