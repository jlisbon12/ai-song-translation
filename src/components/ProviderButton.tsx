"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Icons } from "./ui/icons";

export default function ProviderButton({
  id,
  name,
  callback,
}: {
  id: string;
  name: string;
  callback: string;
}): React.JSX.Element {
  return (
    <Button
      key={name}
      className="rounded-md px-4 py-2 text-md text-white transition duration-300 hover:bg-green-400 hover:text-black dark:text-black dark:hover:text-white"
      onClick={async (): Promise<void> =>
        void (await signIn(id, { callbackUrl: callback }))
      }
    >
      Sign in with {name}
      <Icons.spotify className="ml-2" />
    </Button>
  );
}
