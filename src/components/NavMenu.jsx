import Link from "next/link";

export default function NavMenu() {
  return (
    <div className="flex items-center justify-between max-w-[1180px] m-auto px-6 py-14">
      <Link href="/">
        <h3 className="text-lg md:text-[24px] font-bold">kobe michael</h3>
      </Link>
      <div className="flex items-center gap-5 md:gap-11 text-sm md:text-[20px]">
        <Link href="/experience">
          <p>experience</p>
        </Link>
        <p>contact</p>
      </div>
    </div>
  );
}
