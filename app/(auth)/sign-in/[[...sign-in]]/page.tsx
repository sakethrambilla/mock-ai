import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className=" h-[100vh] w-[100vw] flex items-center justify-center bg-primary">
      <SignIn />;
    </div>
  );
}
