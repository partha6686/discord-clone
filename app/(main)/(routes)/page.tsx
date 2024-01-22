import InitialModal from "@/components/modals/initial-modal";
import { ModeToggle } from "@/components/mode-toggle";
import { UserButton,currentUser,redirectToSignIn } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();
  // console.log("USER:",user);
  
  return (
    <div>
      <UserButton afterSignOutUrl="/sign-in" />
      <ModeToggle />
      <InitialModal />
    </div>
  );
}
