import { SignUp } from "@clerk/nextjs";

import React from "react";

const SignUpPage = () => {
  return (
    <main className="flex items-center h-full justify-center">
      <SignUp />
    </main>
  );
};

export default SignUpPage;
