export default function CallToActionBanner() {
  return (
    <section className="bg-blue-600 text-white py-16 px-6 text-center rounded-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">
        Ready to Secure Your Organization?
      </h2>
      <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          placeholder="Your email address"
          required
          className="flex-grow px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <button
          type="submit"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
        >
          Talk to Our Experts
        </button>
      </form>
    </section>
  );
}
