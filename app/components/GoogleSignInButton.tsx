"use client";

import { signIn } from "next-auth/react";

export default function GoogleSignInButton() {
  return (
    <button
      onClick={() => signIn("google", { callbackUrl: "/" })}
      className="w-full flex items-center justify-center gap-3 border rounded-lg py-3 hover:bg-neutral-50"
    >
      {/* You can swap this SVG for an icon component later */}
      <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden>
        <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3..."></path>
        {/* (trimmed for brevity) */}
      </svg>
      <span className="font-medium">Continue with Google</span>
    </button>
  );
}