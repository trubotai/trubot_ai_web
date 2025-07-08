import * as z from "zod";

export const waitlistFormSchema = z.object({
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

export type WaitlistFormData = z.infer<typeof waitlistFormSchema>;
