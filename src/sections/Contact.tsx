"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Use FormSubmit.co AJAX endpoint so we can handle response in JS
      const response = await fetch("https://formsubmit.co/ajax/artsanskrit@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          // tell FormSubmit who should receive replies
          _replyto: formData.email,
          _subject: `New contact from ${formData.name} via Artsanskrit Portfolio`,
          // simple autoresponse for the sender
          _autoresponse:
            "Thank you for contacting Artsanskrit! We'll get back to you as soon as possible.",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });

        // Reset success message after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        // Handle error
        console.error("Contact form error:", data);
        // Optionally show error toast using Sonner
      }
    } catch (error) {
      console.error("Contact form submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-[#FFF0F0] via-[#FFF5F5] to-[#FFF8F8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-foreground/50 uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-3">
              Ready to <span className="text-primary">Start?</span>
            </h2>
            <p className="text-foreground/60 mt-4 text-lg">
              Let&apos;s create something amazing together
            </p>

            {/* Contact Info */}
            <div className="mt-10 space-y-6">
              <motion.a
                href="mailto:Artsanskrit@gmail.com"
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl shadow-soft flex items-center justify-center group-hover:shadow-medium transition-shadow">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground/50">Email me at</p>
                  <p className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                    Artsanskrit@gmail.com
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+917065365631"
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl shadow-soft flex items-center justify-center group-hover:shadow-medium transition-shadow">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground/50">Call me at</p>
                  <p className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                    +91 7065365631
                  </p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Content - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              action="https://formsubmit.co/artsanskrit@gmail.com"
              method="POST"
              className="space-y-6"
            >
              {/* hidden fields for FormSubmit, _replyto is updated via JS when submitting */}
              <input
                type="hidden"
                name="_autoresponse"
                value="Thank you for contacting Artsanskrit! We'll get back to you as soon as possible."
              />
              <input
                type="hidden"
                name="_replyto"
                value={formData.email}
              />
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground/70 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-white rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground/70 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-white rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground/70 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-4 bg-white rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold shadow-glow hover:bg-primary-dark transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
