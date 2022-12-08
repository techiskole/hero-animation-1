import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center max-w-screen-lg mx-auto pt-8 z-10 relative text-black">
      <Logo />
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </div>
  );
};

export default Navbar;
