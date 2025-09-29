"use client";
import FooterLink from "@/components/Forms/FooterLink";
import InputField from "@/components/Forms/InputField";
import { CountrySelectField } from "@/components/Forms/SelectCountry";
import SelectField from "@/components/Forms/SelectField";
import { Button } from "@/components/ui/button";
import { SignUpWithEmail } from "@/lib/actions/auth.actions";
import {
  INVESTMENT_GOALS,
  PREFERRED_INDUSTRIES,
  RISK_TOLERANCE_OPTIONS,
} from "@/lib/constants";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const SignUp = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      country: "IND",
      investmentGoals: "Growth",
      riskTolerance: "High",
      preferredIndustry: "Technology",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: SignUpFormData) => {
    try {
      const result = await SignUpWithEmail(data);
      if (result.success) router.push("/");
    } catch (e) {
      console.error(e);
      toast.error("Sign up failed", {
        description:
          e instanceof Error ? e.message : "Failed to create an account.",
      });
    }
  };
  return (
    <>
      <h1 className="form-title">Sign Up & Personlize</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
          name="fullName"
          label="Full Name"
          placeholder="Enter Your Name"
          register={register}
          error={errors.fullName}
          validation={{ required: "Full Name is Required", minLength: 2 }}
        />

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

        <SelectField
          name="investmentGoals"
          label="Investment Goals"
          error={errors.investmentGoals}
          options={INVESTMENT_GOALS}
          control={control}
          placeholder="Select Your Investment Goal"
          required
        />

        <SelectField
          name="riskTolerance"
          label="Risk Tolerance"
          error={errors.riskTolerance}
          options={RISK_TOLERANCE_OPTIONS}
          control={control}
          placeholder="Select Your Risk Tolerance Capacity"
          required
        />

        <CountrySelectField
          name="country"
          label="Your Country"
          error={errors.country}
          control={control}
          required
        />

        <SelectField
          name="preferredIndustry"
          label="Preferred Industry"
          error={errors.preferredIndustry}
          options={PREFERRED_INDUSTRIES}
          control={control}
          placeholder="Select Your Industry"
          required
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting ? "Creating Account" : "Start Your Investing Journey"}
        </Button>
      </form>
      <FooterLink
        href="/sign-in"
        linkText="Sign In"
        text="Already have an Account?"
      />
    </>
  );
};

export default SignUp;
