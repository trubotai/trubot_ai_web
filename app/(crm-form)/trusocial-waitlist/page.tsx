"use client";

import * as z from "zod";
import { toast } from "sonner";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import {
  Loader2,
  User,
  Mail,
  Phone,
  Building,
  Briefcase,
  Target,
} from "lucide-react";

import LocationInput from "@/app/ui/components/form/LocationInput";
import GoogleMapsLoader from "@/app/ui/components/form/GoogleMapsLoader";
import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import Button from "@/app/ui/components/shared/Button";
import SubscribedBox from "./components/SubscribedBox";
import TextInput from "@/app/ui/components/form/TextInput";
import SelectInput from "@/app/ui/components/form/SelectInput";

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be at most 50 characters")
    .regex(/^[A-Za-z]+$/, "First name can only contain alphabets"),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be at most 50 characters")
    .regex(/^[A-Za-z]+$/, "Last name can only contain alphabets"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(100, "Email must be at most 100 characters"),
  mobile: z.string().optional(),
  location: z.string().optional(),
  companyName: z
    .string()
    .max(50, "Company name must be at most 50 characters")
    .optional(),
  jobTitle: z
    .string()
    .max(50, "Job title must be at most 50 characters")
    .optional(),
  socialMediaNeeds: z.string().min(1, "Please select your primary need"),
});

const socialMediaNeedsOptions = [
  "Content creation and scheduling",
  "Multi-platform posting",
  "Analytics and reporting",
  "Engagement management",
  "Just getting started with social media",
];

const Page = () => {
  const [subscribed, setSubscribed] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
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

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(
      JSON.stringify({
        firstName: values.firstName,
        lastName: values.lastName,
        emailAddress: values.email,
        mobileNumber: values.mobile || "",
        location: values.location || "",
        companyName: values.companyName || "",
        jobTitle: values.jobTitle || "",
        socialMediaNeeds: values.socialMediaNeeds,
        productInterest: "TruSocial",
        source: "Waitlist Page",
      })
    );
    try {
      const response = await fetch(
        "https://crm.trubotai.com/api/v1/LeadCapture/84006ddb862651d0c4c17f07061b0f8b",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: values.firstName,
            lastName: values.lastName,
            emailAddress: values.email,
            mobileNumber: values.mobile || "",
            location: values.location || "",
            companyName: values.companyName || "",
            jobTitle: values.jobTitle || "",
            socialMediaNeeds: values.socialMediaNeeds,
            productInterest: "TruSocial",
            source: "Waitlist Page",
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      toast.success("Thank you for joining the TruSocial waitlist!");
      form.reset();
      setSubscribed(true);
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <PageLayout className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-electric/5 to-teal/5">
      <div className="w-full max-w-2xl mx-auto px-4">
        <SectionHeader
          title="Join the TruSocial Waitlist"
          subtitle="Be the first to experience AI-powered social media management. Get early access, exclusive perks, and help shape the future of TruSocial."
        />

        {subscribed ? (
          <SubscribedBox />
        ) : (
          <div className="w-full max-w-lg mx-auto">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
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
                    <TextInput
                      id="firstName"
                      label={undefined}
                      icon={User}
                      error={form.formState.errors.firstName?.message}
                      placeholder="First name"
                      {...form.register("firstName")}
                    />
                    <TextInput
                      id="lastName"
                      label={undefined}
                      icon={User}
                      error={form.formState.errors.lastName?.message}
                      placeholder="Last name"
                      {...form.register("lastName")}
                    />
                  </div>

                  <TextInput
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
                    <TextInput
                      id="mobile"
                      label={undefined}
                      icon={Phone}
                      error={form.formState.errors.mobile?.message}
                      placeholder="Mobile number"
                      {...form.register("mobile")}
                    />

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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <TextInput
                      id="companyName"
                      label={undefined}
                      icon={Building}
                      error={form.formState.errors.companyName?.message}
                      placeholder="Company name"
                      {...form.register("companyName")}
                    />

                    <TextInput
                      id="jobTitle"
                      label={undefined}
                      icon={Briefcase}
                      error={form.formState.errors.jobTitle?.message}
                      placeholder="Job title"
                      {...form.register("jobTitle")}
                    />
                  </div>
                </div>

                {/* Social Media Needs */}
                <div className="space-y-3">
                  <label
                    htmlFor="socialMediaNeeds"
                    className="text-sm font-medium text-navy"
                  >
                    What&rsquo;s your primary social media need? *
                  </label>
                  <div className="relative">
                    <SelectInput
                      id="socialMediaNeeds"
                      label={undefined}
                      error={form.formState.errors.socialMediaNeeds?.message}
                      {...form.register("socialMediaNeeds")}
                    >
                      <option value="">Select your primary need</option>
                      {socialMediaNeedsOptions.map((option) => (
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
