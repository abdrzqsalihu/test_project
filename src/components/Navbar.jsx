function Navbar() {
  return (
    <nav className="bg-[#0C4C7C]">
      <div className=" mx-auto flex justify-between items-center max-w-[1300px] py-5">
        <a href="/" className="text-white text-2xl font-bold uppercase italic">
          Logo
        </a>
        <ul className="text-white flex gap-8">
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
