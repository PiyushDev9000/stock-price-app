"use server";

import { headers } from "next/headers";
import { auth } from "../better-auth/auth";
import { inngest } from "../inngest/client";

export const SignUpWithEmail = async ({
  email,
  fullName,
  country,
  investmentGoals,
  password,
  preferredIndustry,
  riskTolerance,
}: SignUpFormData) => {
  try {
    const response = await auth.api.signUpEmail({
      body: {
        email: email,
        password: password,
        name: fullName,
      },
    });

    if (response) {
      await inngest.send({
        name: "app/user.created",
        data: {
          email,
          name: fullName,
          country,
          investmentGoals,
          preferredIndustry,
          riskTolerance,
        },
      });
    }

    return { success: true, data: response };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      error: `Sign Up failed with ${error}`,
    };
  }
};

export const SignOut = async () => {
  try {
    await auth.api.signOut({ headers: await headers() });
  } catch (error) {
    console.log(error);
    return {
      succes: false,
      error: "Sign Out Failed",
    };
  }
};

export const SignInWithEmail = async ({ email, password }: SignInFormData) => {
  try {
    const response = await auth.api.signInEmail({
      body: {
        email: email,
        password: password,
      },
    });

    return { success: true, data: response };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      error: `Sign Up failed with ${error}`,
    };
  }
};
