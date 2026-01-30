import { auth } from "@/services/auth";
import SignOutButton from "./_components/sign-out-button";

export default async function Page() {
  const session = await auth();
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-6">
      <div>Hello {session?.user.name}</div>
      <SignOutButton />
    </main>
  );
}
