"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function TopNavigation() {
  const router = useRouter();
  return (
    <nav className=" inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-primary border-b w-full overflow-x-hidden">
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link href="#" className="flex items-center" prefetch={false}>
            <span className="font-bold">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Beyblade_X_Logo.svg"
                width={120}
                height={40}
                alt="beybladexlogo"
                className="fill-black dark:fill-white invert"
              />
            </span>
          </Link>

          <nav className="hidden md:flex gap-6">
            <Link
              href="#"
              className="font-medium text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#"
              className="font-medium text-sm transition-colors hover:underline"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="font-medium text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Statistics
            </Link>
            <Link
              href="#"
              className="font-medium text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Join Us
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-gray-500 bg-[#101827] text-white"
              onClick={() => router.push("/login")}
            >
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
