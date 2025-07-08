"use client";

import { toast } from "sonner";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Loader2, MessageSquare, Mail, Phone } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

import TextInput from "@/app/ui/components/form/TextInput";
import TextArea from "@/app/ui/components/form/TextArea";
import Button from "@/app/ui/components/shared/Button";
import { inputList } from "@/app/ui/libs/constants/crm-form/contact-form";
import ContactSuccessBox from "./components/ContactSuccessBox";
import {
  contactFormData,
  contactFormSchema,
} from "@/app/ui/libs/validation/contactForm.schema";

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className = "" }: ContactFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<contactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      message: "",
    },
  });

  const onSubmit = async (values: contactFormData) => {
    try {
      const response = await fetch("/api/contact-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Network response was not ok");

      toast.success(
        "Thank you for your message! We&rsquo;ll get back to you soon."
      );
      form.reset();
      setSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  if (submitted) return <ContactSuccessBox />;

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className={`space-y-7 ${className}`}
    >
      {/* Required Fields */}
      <div className="space-y-4">
        <h4 className="text-sm font-semibold text-navy/70 uppercase tracking-wide mb-2">
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
                  form.formState.errors[field.id as keyof contactFormData]
                    ?.message
                }
                placeholder={field.placeholder}
                type={field.type}
                className="py-4 px-4 text-base rounded-xl border-2 border-gray-200 focus:border-electric focus:ring-2 focus:ring-electric/30 transition-all duration-200 bg-white/80 shadow-sm hover:shadow-md"
                {...form.register(field.id as keyof contactFormData)}
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
          className="py-4 px-4 text-base rounded-xl border-2 border-gray-200 focus:border-electric focus:ring-2 focus:ring-electric/30 transition-all duration-200 bg-white/80 shadow-sm hover:shadow-md"
          {...form.register("email")}
        />
      </div>

      {/* Optional Fields */}
      <div className="space-y-4">
        <h4 className="text-sm font-semibold text-navy/70 uppercase tracking-wide mb-2">
          Additional Information (Optional)
        </h4>
        <TextInput
          key="mobile"
          id="mobile"
          label={undefined}
          icon={Phone}
          error={form.formState.errors.mobile?.message}
          placeholder="Mobile number"
          type="text"
          className="py-4 px-4 text-base rounded-xl border-2 border-gray-200 focus:border-electric focus:ring-2 focus:ring-electric/30 transition-all duration-200 bg-white/80 shadow-sm hover:shadow-md"
          {...form.register("mobile")}
        />
      </div>

      {/* Message */}
      <div className="space-y-3">
        <label
          htmlFor="message"
          className="text-sm font-semibold text-navy/70 uppercase tracking-wide mb-2"
        >
          How can we help you
        </label>
        <div className="relative mt-2">
          <TextArea
            id="message"
            label={undefined}
            icon={MessageSquare}
            error={form.formState.errors.message?.message}
            placeholder="Tell us how we can help you..."
            className="py-4 px-4 text-base rounded-xl border-2 border-gray-200 focus:border-electric focus:ring-2 focus:ring-electric/30 transition-all duration-200 bg-white/80 shadow-sm hover:shadow-md min-h-[120px]"
            {...form.register("message")}
          />
        </div>
      </div>

      {/* Submit Button */}
      <Button
        as="button"
        type="submit"
        label={form.formState.isSubmitting ? "" : "Send Message"}
        className="w-full py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-electric to-teal shadow-lg hover:shadow-xl transition-all duration-200"
        disabled={form.formState.isSubmitting}
        animate
      >
        {form.formState.isSubmitting && (
          <Loader2 className="h-6 w-6 animate-spin" />
        )}
      </Button>

      <p className="text-xs text-gray-500 text-center mt-2">
        By submitting this form, you agree to our privacy policy and terms of
        service.
      </p>
    </form>
  );
};

export default ContactForm;
