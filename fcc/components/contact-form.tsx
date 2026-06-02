"use client";

export function ContactForm() {
  return (
    <form
      className="flex flex-1 flex-col gap-5"
      aria-label="Contact form"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-name" className="text-sm font-semibold text-[#1a1a1a]">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          required
          placeholder="Your full name"
          className="rounded-xl border border-gray-300 px-4 py-3 text-base text-[#1a1a1a] outline-none transition-colors placeholder:text-gray-400 focus:border-[#29479B] focus:ring-2 focus:ring-[#29479B]/20"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-email" className="text-sm font-semibold text-[#1a1a1a]">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          required
          placeholder="your@email.com"
          className="rounded-xl border border-gray-300 px-4 py-3 text-base text-[#1a1a1a] outline-none transition-colors placeholder:text-gray-400 focus:border-[#29479B] focus:ring-2 focus:ring-[#29479B]/20"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className="text-sm font-semibold text-[#1a1a1a]">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="How can we help you?"
          className="resize-none rounded-xl border border-gray-300 px-4 py-3 text-base text-[#1a1a1a] outline-none transition-colors placeholder:text-gray-400 focus:border-[#29479B] focus:ring-2 focus:ring-[#29479B]/20"
        />
      </div>
      <button
        type="submit"
        className="rounded-xl bg-[#29479B] px-8 py-4 text-base font-bold text-white transition-colors hover:bg-[#1a2d6e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#29479B]"
      >
        Submit
      </button>
    </form>
  );
}
