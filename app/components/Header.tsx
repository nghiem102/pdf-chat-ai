import { UserButton, currentUser } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/logo.png";

const Header = async () => {
  const user: User | null = await currentUser();
  const isLoggedIn = !!user;

  return (
    <header className="sticky top-0 z-40 bg-white w-full border-b border-b-slate-200 shadow-sm">
      <div className="h-16 py-4 container mx-auto">
        <nav className="flex items-center justify-between mx-10">
          <Link
            href="/"
            className="hover:text-slate-600 cursor-pointer flex items-center gap-2"
          >
            <Image src={logo} alt="Logo" width={28} />
            <span className="text-2xl font-medium">PDFChatAI</span>
          </Link>
          <div className="flex items-center gap-5">
            {isLoggedIn ? (
              <>
                {/* <Link href="/dashboard">Dashboard</Link> */}
                <UserButton afterSignOutUrl="/" />
              </>
            ) : (
              <Link
                href="/sign-in"
                className="text-primary py-1.5 px-[22px] text-center text-xl font-normal border rounded-[18px] border-solid border-primary "
              >
                Log in
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
