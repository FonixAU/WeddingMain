import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-[#96aa81] text-[#F9F6EE] font-semibold p-3 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <Link href="/">F+C</Link>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:text-[#2e333d]">
            Home
          </Link>
        </li>
        <li>
          <Link href="/gallery" className="hover:text-[#2e333d]">
            Gallery
          </Link>
        </li>
        <li>
          <Link href="/registry" className="hover:text-[#2e333d]">
            Registry
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
