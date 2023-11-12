import Link from "next/link";

export default function NavMenu() {
  return (
    <div className="flex items-center justify-between max-w-[1180px] m-auto px-6 h-[140px]">
      <Link href="/">
        <h3 className="text-lg md:text-[24px] font-bold">kobe michael</h3>
      </Link>
      <div className="flex items-center gap-5 md:gap-11 text-sm md:text-[20px] hover:text-yellow-200">
        <Link href="/about">
          <p>about</p>
        </Link>
        {/* <p>contact</p> */}
      </div>
    </div>
  );
}
