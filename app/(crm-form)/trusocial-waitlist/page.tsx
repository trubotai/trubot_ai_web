"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Loader2,
  User,
  Mail,
  Phone,
  Building,
  Briefcase,
  Target,
} from "lucide-react";
import { useState } from "react";

import LocationInput from "@/app/ui/components/form/LocationInput";
import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import Button from "@/app/ui/components/shared/Button";

const formSchema = z.object({
  firstName: z.string().min(1, "Please enter your first name"),
  lastName: z.string().min(1, "Please enter your last name"),
  email: z.string().email("Please enter a valid email address"),
  mobile: z.string().optional(),
  location: z.string().optional(),
  companyName: z.string().optional(),
  jobTitle: z.string().optional(),
  socialMediaNeeds: z.string().min(1, "Please select your primary need"),
});

const socialMediaNeedsOptions = [
  "Content creation and scheduling",
  "Multi-platform posting",
  "Analytics and reporting",
  "Engagement management",
  "Just getting started with social media",
];

export default function SubscribePage() {
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
          <div className="w-full max-w-lg mx-auto bg-white border border-gray-200 rounded-2xl shadow-xl p-8 text-center fade-in scale-up">
            <div className="w-16 h-16 bg-electric/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-electric"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-heading text-electric mb-4">
              You&rsquo;re on the waitlist!
            </h3>
            <p className="text-navy/80 font-body mb-6">
              We&rsquo;ll notify you as soon as TruSocial launches. Thank you
              for your interest!
            </p>
            <Button href="/" label="Back to Home" variant="primary" animate />
          </div>
        ) : (
          <div className="w-full max-w-lg mx-auto">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-electric to-teal p-6 text-white text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-heading font-semibold mb-2">
                  Get Early Access
                </h2>
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
                  <h3 className="text-sm font-semibold text-navy/70 uppercase tracking-wide mb-4">
                    Required Information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="firstName"
                        {...form.register("firstName")}
                        placeholder="First name"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric focus:border-transparent transition-all duration-200"
                      />
                      {form.formState.errors.firstName && (
                        <p className="text-coral text-xs mt-1 ml-1">
                          {form.formState.errors.firstName.message}
                        </p>
                      )}
                    </div>

                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="lastName"
                        {...form.register("lastName")}
                        placeholder="Last name"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric focus:border-transparent transition-all duration-200"
                      />
                      {form.formState.errors.lastName && (
                        <p className="text-coral text-xs mt-1 ml-1">
                          {form.formState.errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      {...form.register("email")}
                      placeholder="your@email.com"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric focus:border-transparent transition-all duration-200"
                    />
                    {form.formState.errors.email && (
                      <p className="text-coral text-xs mt-1 ml-1">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Optional Fields */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-navy/70 uppercase tracking-wide mb-4">
                    Additional Information (Optional)
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="mobile"
                        {...form.register("mobile")}
                        placeholder="Mobile number"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric focus:border-transparent transition-all duration-200"
                      />
                    </div>

                    <LocationInput
                      onChange={(value) => form.setValue("location", value)}
                      placeholder="City, State"
                      className=" text-gray-400 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Building className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="companyName"
                        {...form.register("companyName")}
                        placeholder="Company name"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric focus:border-transparent transition-all duration-200"
                      />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Briefcase className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="jobTitle"
                        {...form.register("jobTitle")}
                        placeholder="Job title"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric focus:border-transparent transition-all duration-200"
                      />
                    </div>
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
                  <select
                    id="socialMediaNeeds"
                    {...form.register("socialMediaNeeds")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric focus:border-transparent transition-all duration-200 bg-white"
                  >
                    <option value="">Select your primary need</option>
                    {socialMediaNeedsOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {form.formState.errors.socialMediaNeeds && (
                    <p className="text-coral text-xs mt-1">
                      {form.formState.errors.socialMediaNeeds.message}
                    </p>
                  )}
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
}
