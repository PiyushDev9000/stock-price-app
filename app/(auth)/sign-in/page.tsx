"use client";
import FooterLink from "@/components/Forms/FooterLink";
import InputField from "@/components/Forms/InputField";
import { Button } from "@/components/ui/button";
import React from "react";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: SignInFormData) => {
    console.log(data);
  };

  return (
    <>
      <h1 className="form-title">Log In Your Account</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
          name="email"
          label="Email ID"
          placeholder="Enter Your Email"
          register={register}
          error={errors.email}
          validation={{
            required: "Email name is required",
            pattern: /^\w+@\w+\.\w+$/,
            message: "Email address is required",
          }}
        />
        <InputField
          name="password"
          type="password"
          label="Password"
          placeholder="Enter Your Password"
          register={register}
          error={errors.password}
          validation={{ required: "Password Required", minLength: 8 }}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting ? "Logging In" : "Log In"}
        </Button>
      </form>
      <FooterLink
        href="/sign-up"
        linkText="Sign Up"
        text="Don't Have a Account?"
      />
    </>
  );
};

export default SignIn;
