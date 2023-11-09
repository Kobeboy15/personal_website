import Link from "next/link";

export default function NavMenu() {
  return (
    <div className="flex items-center justify-between px-40 py-14">
      <Link href="/">
        <h3 className=" text-[24px] font-bold">kobe michael</h3>
      </Link>
      <div className="flex items-center gap-11 text-[20px]">
        <Link href="/experience">
          <p>experience</p>
        </Link>
        <p>contact</p>
      </div>
    </div>
  );
}
