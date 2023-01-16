import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

export interface HeaderBarProps {}

export default function HeaderBar({ ...props }: HeaderBarProps) {
  return (
    <div {...props} className="w-full bg-[#073290] px-10 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-white">
          Tu PruTect
        </Link>

        <Link
          href="/"
          className="flex items-center align-middle text-white px-5"
        >
          <span className="px-2">UserName</span> <FaAngleDown />
        </Link>
      </div>
    </div>
  );
}
