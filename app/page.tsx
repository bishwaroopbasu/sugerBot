import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      Outer page(unprotected)
      <Link href="/sign-in">
        <Button>Login</Button>
      </Link>
      <Link href="/sign-up">
        <Button>SignUp</Button>
      </Link>
    </div>
  );
}
