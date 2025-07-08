"use client";

import { toast } from "sonner";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Loader2, Mail, Target } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

import LocationInput from "@/app/ui/components/form/LocationInput";
import GoogleMapsLoader from "@/app/ui/components/form/GoogleMapsLoader";
import TextInput from "@/app/ui/components/form/TextInput";
import SelectInput from "@/app/ui/components/form/SelectInput";
import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import Button from "@/app/ui/components/shared/Button";
import SubscribedBox from "./components/SubscribedBox";
import { inputList } from "@/app/ui/libs/constants/crm-form/trusocial-waitlist";
import {
  inputFormData,
  inputFormSchema,
} from "@/app/ui/libs/validation/trusocialWaitlist.schema";

const Page = () => {
  const [subscribed, setSubscribed] = useState(false);
  const form = useForm<inputFormData>({
    resolver: zodResolver(inputFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      location: "",
      companyName: "",
      jobTitle: "",
      socialMediaNeeds: "",
    },
  });

  const onSubmit = async (values: inputFormData) => {
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Network response was not ok");

      toast.success("Thank you for joining the TruSocial waitlist!");
      form.reset();
      setSubscribed(true);
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <PageLayout className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-2xl mx-auto px-4">
        <SectionHeader
          title="Join the TruSocial Waitlist"
          subtitle="Be the first to experience AI-powered social media management. Get early access, exclusive perks, and help shape the future of TruSocial."
        />

        {subscribed ? (
          <SubscribedBox />
        ) : (
          <div className="w-full max-w-lg mx-auto">
            <div className="bg-light border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-electric to-teal p-6 text-white text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  Get Early Access
                </h3>
                <p className="text-white/90 text-sm">
                  Join thousands of businesses waiting for TruSocial
                </p>
              </div>

              {/* Form */}
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="p-8 space-y-6"
              >
                {/* Required Fields */}
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-navy/70 uppercase tracking-wide mb-4">
                    Required Information
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {inputList
                      .filter((f) => ["firstName", "lastName"].includes(f.id))
                      .map((field) => (
                        <TextInput
                          key={field.id}
                          id={field.id}
                          label={undefined}
                          icon={field.icon}
                          error={
                            form.formState.errors[
                              field.id as keyof inputFormData
                            ]?.message
                          }
                          placeholder={field.placeholder}
                          type={field.type}
                          {...form.register(field.id as keyof inputFormData)}
                        />
                      ))}
                  </div>
                  <TextInput
                    key="email"
                    id="email"
                    label={undefined}
                    icon={Mail}
                    error={form.formState.errors.email?.message}
                    placeholder="your@email.com"
                    type="email"
                    {...form.register("email")}
                  />
                </div>

                {/* Optional Fields */}
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-navy/70 uppercase tracking-wide mb-4">
                    Additional Information (Optional)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {inputList
                      .filter((f) =>
                        ["mobile", "companyName", "jobTitle"].includes(f.id)
                      )
                      .map((field) => (
                        <TextInput
                          key={field.id}
                          id={field.id}
                          label={undefined}
                          icon={field.icon}
                          error={
                            form.formState.errors[
                              field.id as keyof inputFormData
                            ]?.message
                          }
                          placeholder={field.placeholder}
                          type={field.type}
                          {...form.register(field.id as keyof inputFormData)}
                        />
                      ))}
                    <GoogleMapsLoader>
                      <Controller
                        name="location"
                        control={form.control}
                        render={({ field }) => (
                          <LocationInput
                            onChange={field.onChange}
                            placeholder="City, State"
                            className={`w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric focus:border-transparent transition-all duration-200 ${
                              form.formState.errors.location
                                ? "border-coral"
                                : ""
                            }`}
                            error={form.formState.errors.location?.message}
                          />
                        )}
                      />
                    </GoogleMapsLoader>
                  </div>
                </div>

                {/* Social Media Needs */}
                <div className="space-y-3">
                  <label
                    htmlFor="socialMediaNeeds"
                    className="text-sm font-semibold text-navy/70 uppercase tracking-wide mb-4"
                  >
                    {inputList.find((f) => f.id === "socialMediaNeeds")?.label}
                  </label>
                  <div className="relative mt-4">
                    <SelectInput
                      id="socialMediaNeeds"
                      label={undefined}
                      error={form.formState.errors.socialMediaNeeds?.message}
                      {...form.register("socialMediaNeeds")}
                    >
                      <option value="">Select your primary need</option>
                      {inputList
                        .find((f) => f.id === "socialMediaNeeds")
                        ?.options?.map((option: string) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                    </SelectInput>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  as="button"
                  type="submit"
                  label={
                    form.formState.isSubmitting ? "" : "Join TruSocial Waitlist"
                  }
                  className="w-full py-3 text-base font-semibold"
                  disabled={form.formState.isSubmitting}
                  animate
                >
                  {form.formState.isSubmitting && (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  )}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By joining the waitlist, you agree to receive updates about
                  TruSocial launch.
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default Page;
