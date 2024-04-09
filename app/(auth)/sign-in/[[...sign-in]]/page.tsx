import { SignIn } from "@clerk/nextjs";

import React from "react";

const SigninPage = () => {
  return (
    <main className="flex items-center h-full justify-center">
      <SignIn />
    </main>
  );
};

export default SigninPage;
