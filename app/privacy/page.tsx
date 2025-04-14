import PageLayout from "../ui/components/PageLayout";

export const metadata = {
  title: "Privacy Policy – TruBot AI",
  description:
    "Understand how TruBot AI collects, uses, and protects your data.",
};

const Page = () => {
  return (
    <PageLayout className="min-h-screen">
      <h1 className="text-3xl font-bold text-navy mb-4">Privacy Policy</h1>

      <p className="text-gray-600">
        This is a placeholder privacy policy page. We respect your privacy and
        will update this with full details soon.
      </p>
    </PageLayout>
  );
};

export default Page;
