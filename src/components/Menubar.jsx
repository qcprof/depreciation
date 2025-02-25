import Link from "next/link"

export default function Menubar() {
  return (
    <>
      <Link href="/" className="text-blue-600 hover:text-blue-800 px-4 py-2">
        Home
      </Link>
      <Link
        href="/straight-line"
        className="text-blue-600 hover:text-blue-800 px-4 py-2"
      >
        Straight Line Depreciation
      </Link>
      <Link
        href="/syd"
        className="text-blue-600 hover:text-blue-800 px-4 py-2"
      >
        SYD Depreciation
      </Link>
      <Link
        href="/about"
        className="text-blue-600 hover:text-blue-800 px-4 py-2"
      >
        About Us
      </Link>
      <Link
        href="/contact"
        className="text-blue-600 hover:text-blue-800 px-4 py-2"
      >
        Contact Us
      </Link>
    </>
  );
}
