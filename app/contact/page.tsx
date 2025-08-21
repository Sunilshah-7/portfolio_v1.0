import React from "react";

const ContactForm = () => (
  <form
    action="https://formspree.io/f/mvgqeonk"
    method="POST"
    className="max-w-xl mx-auto mt-10 space-y-6"
  >
    <input
      type="text"
      name="name"
      placeholder="Name"
      className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      required
    />
    <input
      type="email"
      name="email"
      placeholder="Email"
      className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      required
    />
    <textarea
      name="message"
      placeholder="Message"
      rows={5}
      className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      required
    />
    <button
      type="submit"
      className="w-full py-3 font-semibold text-white transition-colors duration-200 border border-white rounded-md hover:bg-white hover:text-blue-500"
    >
      Say Hello
    </button>
  </form>
);

const Page = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen bg-blue-400">
      <section className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-2 text-2xl font-semibold text-center text-blue-900">
          What&apos;s Next?
        </h2>
        <h1 className="mb-4 text-4xl font-bold text-center text-white">
          Get In Touch
        </h1>
        <p className="max-w-2xl mx-auto mb-10 text-lg text-center text-blue-100">
          Let&apos;s Chat! Whether you have a question, a project idea, or just
          want to connect, I&apos;m always happy to hear from you. Drop me a
          message, and I&apos;ll be in touch soon!
        </p>
        <ContactForm />
      </section>
    </div>
  );
};

export default Page;
