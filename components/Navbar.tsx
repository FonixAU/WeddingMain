import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white text-black p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <Link href="/">F+C</Link>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link href="/gallery" className="hover:text-gray-400">
            Gallery
          </Link>
        </li>
        <li>
          <Link href="/registry" className="hover:text-gray-400">
            Registry
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
