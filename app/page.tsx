export default function HomePage() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-5xl font-bold mb-4">
          Transform Business Communication with AI
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Meet TruBot AI – Chatbots, Voicebots, and AI Agents tailored for
          modern growth.
        </p>
        <div className="space-x-4">
          <a
            href="/products"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Explore Products
          </a>
          <a
            href="/contact"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50"
          >
            Request Demo
          </a>
        </div>
      </div>
    </section>
  );
}
