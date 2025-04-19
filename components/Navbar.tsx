import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-[#274134] text-[#F9F6EE] font-semibold p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <Link href="/">F+C</Link>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:text-black">
            Home
          </Link>
        </li>
        <li>
          <Link href="/gallery" className="hover:text-black">
            Gallery
          </Link>
        </li>
        <li>
          <Link href="/registry" className="hover:text-black">
            Registry
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
