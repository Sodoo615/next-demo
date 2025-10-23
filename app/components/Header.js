import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full h-[50px] bg-red-500 flex items-center justify-between px-[50px]">
      <Link href={"/"}>
        <p>Home</p>
      </Link>
      <Link href={"/contact"}>Contact</Link>
      <Link href={"/about"}>
        <p>About</p>
      </Link>
    </div>
  );
}
