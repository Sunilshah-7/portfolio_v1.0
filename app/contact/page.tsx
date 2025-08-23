import React from "react";

const ContactForm = () => (
  <form
    action="https://formspree.io/f/mvgqeonk"
    method="POST"
    className="max-w-xl px-4 mx-auto mt-6 space-y-4 sm:mt-10 sm:space-y-6 sm:px-0"
  >
    <input
      type="text"
      name="name"
      placeholder="Name"
      className="w-full px-4 py-3 text-sm text-gray-900 placeholder-gray-500 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 sm:text-base"
      required
    />
    <input
      type="email"
      name="email"
      placeholder="Email"
      className="w-full px-4 py-3 text-sm text-gray-900 placeholder-gray-500 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 sm:text-base"
      required
    />
    <textarea
      name="message"
      placeholder="Message"
      rows={5}
      className="w-full px-4 py-3 text-sm text-gray-900 placeholder-gray-500 bg-white rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 sm:text-base"
      required
    />
    <button
      type="submit"
      className="w-full py-3 text-sm font-semibold text-white transition-colors duration-200 border border-white rounded-md hover:bg-white hover:text-blue-500 sm:text-base"
    >
      Say Hello
    </button>
  </form>
);

const Page = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen px-4 bg-blue-400 sm:px-6 lg:px-8">
      <section className="py-12 mx-auto max-w-7xl">
        <h2 className="mb-2 text-xl font-semibold text-center text-blue-900 sm:text-2xl">
          What&apos;s Next?
        </h2>
        <h1 className="mb-4 text-3xl font-bold text-center text-white sm:text-4xl">
          Get In Touch
        </h1>
        <p className="max-w-2xl px-4 mx-auto mb-6 text-base text-center text-blue-100 sm:mb-10 sm:text-lg">
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
