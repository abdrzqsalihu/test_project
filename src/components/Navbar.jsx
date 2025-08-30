function Navbar() {
  return (
    <nav className="fixed top-0 left-0 bg-white w-full z-50 px-5 backdrop-blur-lg opacity-70 shadow-sm">
      <div className="mx-auto flex justify-between items-center max-w-[1300px] py-5">
        <a href="/" className=" text-2xl font-bold uppercase italic">
          Logo
        </a>
        <ul className="text-black flex gap-8">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
