"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useState } from "react";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import Button from "@/app/ui/components/shared/Button";

const formSchema = z.object({
  name: z.string().min(1, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
});

export default function SubscribePage() {
  const [subscribed, setSubscribed] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch(
        "https://crm.trubotai.com/api/v1/LeadCapture/84006ddb862651d0c4c17f07061b0f8b",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: values.name,
            emailAddress: values.email,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      toast.success("Thank you for joining!");
      form.reset();
      setSubscribed(true);
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <PageLayout className="flex flex-col items-center justify-center">
      <SectionHeader
        title="Join the TruSocial Waitlist"
        subtitle="Be the first to experience AI-powered social media management. Get early access, exclusive perks, and help shape the future of TruSocial."
      />

      {subscribed ? (
        <div className="w-full max-w-md bg-white border rounded-xl shadow-lg p-8 text-center fade-in scale-up">
          <h3 className="text-2xl font-heading text-electric mb-4">
            You&rsquo;re on the waitlist!
          </h3>

          <p className="text-navy/80 font-body mb-6">
            We&rsquo;ll notify you as soon as TruSocial launches. Thank you for
            your interest!
          </p>

          <Button href="/" label="Back to Home" variant="primary" animate />
        </div>
      ) : (
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-md space-y-6 p-8 border rounded-xl shadow-lg bg-white"
        >
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-navy">
              Your Name
            </label>
            <input
              id="name"
              {...form.register("name")}
              placeholder="John Doe"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-electric"
            />

            {form.formState.errors.name && (
              <p className="text-coral text-xs mt-1">
                {form.formState.errors.name.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-navy">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              {...form.register("email")}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-electric"
            />

            {form.formState.errors.email && (
              <p className="text-coral text-xs mt-1">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>

          <Button
            as="button"
            type="submit"
            label={form.formState.isSubmitting ? "" : "Join Waitlist"}
            className="w-full"
            disabled={form.formState.isSubmitting}
            animate
          >
            {form.formState.isSubmitting && (
              <Loader2 className="h-5 w-5 animate-spin" />
            )}
          </Button>
        </form>
      )}
    </PageLayout>
  );
}
