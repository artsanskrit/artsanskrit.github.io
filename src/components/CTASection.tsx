"use client";

import Link from "next/link";

interface CTASectionProps {
  heading: string;
  description: string;
  backgroundGradient?: string;
  buttonText?: string;
  secondaryButtonText?: string;
  onContactClick?: () => void;
}

export function CTASection({
  heading,
  description,
  backgroundGradient = "linear-gradient(to right, #FF5F6D, #FF7A45)",
  buttonText = "Get in Touch",
  secondaryButtonText,
}: CTASectionProps) {
  return (
    <div 
      className="rounded-3xl py-16 text-center shadow-xl"
      style={{ background: backgroundGradient }}
    >
      <h2 className="text-3xl font-bold text-white">{heading}</h2>
      <p className="text-white/90 mt-3">{description}</p>

      <div className="flex justify-center gap-4 mt-6">
        <Link
          href="/#contact"
          className="bg-white text-black px-6 py-3 rounded-full shadow hover:shadow-lg transition font-medium"
        >
          {buttonText}
        </Link>

        {secondaryButtonText && (
          <Link
            href="/#contact"
            className="border-2 border-white text-white px-6 py-3 rounded-full shadow hover:shadow-lg transition font-medium hover:bg-white/10"
          >
            {secondaryButtonText}
          </Link>
        )}
      </div>
    </div>
  );
}
