import AuthCard from "../components/AuthCard";
import GoogleSignInButton from "../components/GoogleSignInButton";

export default function Signup() {
  return (
    <div className="flex items-center justify-center h-screen">
      <AuthCard title="Create your account" subtitle="Fast, simple, and secure.">
        <GoogleSignInButton />

        <p className="text-sm text-center text-neutral-500 mt-6">
          Or continue on{" "}
          <a
            href="https://lyra.so/signup"
            className="underline hover:text-neutral-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            lyra.so/signup
          </a>
        </p>
      </AuthCard>
    </div>
  );
}