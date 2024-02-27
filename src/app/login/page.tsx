import Image from "next/image";
import { getProviders } from "next-auth/react";
import React from "react";

import { Icons } from "@/components/ui/icons";
import ProviderButton from "@/components/ProviderButton";
import ModeToggle from "@/components/ModeToggle";
import Link from "next/link";

export const metadata = {
  title: "Babylon | Login",
  description: "Login to Babylon with Spotify",
};

export default async function Login(): Promise<React.JSX.Element> {
  const providers = await getProviders();
  return (
    <div className="flex min-h-screen flex-col">
      <div className="m-6 flex flex-row justify-end">
        <ModeToggle />
      </div>
      <div className="flex-grow flex flex-col items-center justify-center gap-y-8">
        <div className="relative flex flex-col items-center justify-center h-96 w-6/12 p-10 glass">
          <p className="text-5xl italic">
            “Music is the universal language of mankind.”
          </p>
          <p className="absolute bottom-0 right-0 text-md mb-8 mr-7">
            ― Henry Wadsworth Longfellow
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-10">
          {providers &&
            Object.values(providers).map((provider) => (
              <ProviderButton
                key={provider.name}
                id={provider.id}
                name={provider.name}
                callback={"/"}
              />
            ))}
        </div>
      </div>
      <footer className="flex flex-row-reverse items-center place-content-center">
        <div className="ml-auto p-4">
          <p>Made with ❤️‍🔥.</p>
        </div>
        <div className="p-4">
          <a href="https://github.com/jlisbon12">
            <Icons.github className="w-6 h-6 hover:text-slate-200 dark:hover:text-slate-900" />
          </a>
        </div>
      </footer>
    </div>
  );
}
