import PageLayout from "../ui/components/PageLayout";

export const metadata = {
  title: "Terms of Service – TruBot AI",
  description:
    "Review the terms and conditions for using TruBot AI’s services.",
};

const Page = () => {
  return (
    <PageLayout className="min-h-screen">
      <h1 className="text-3xl font-bold text-navy mb-4">Terms of Service</h1>

      <p className="text-gray-600">
        These are placeholder terms of service. We’ll publish the full legal
        text soon.
      </p>
    </PageLayout>
  );
};

export default Page;
