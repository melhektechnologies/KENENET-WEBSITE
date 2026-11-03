import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-paper py-20 px-5">
      <div className="max-w-xl text-center space-y-6">
        <span className="font-sans text-[14px] font-semibold tracking-[0.12em] uppercase text-purple">
          404 Error
        </span>
        <Heading as="h1" variant="display-lg">
          Page not found.
        </Heading>
        <p className="font-sans text-[17px] text-ink-600 leading-relaxed">
          The page you are looking for does not exist or has been moved. You can return to our homepage or get in touch with our team.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button variant="primary" size="md" href="/">
            Return to Home
          </Button>
          <Button variant="secondary" size="md" href="/contact" icon={false}>
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}

